const dbPool = require('../config/database');

const transactionController = {
    checkout: async (req, res) => {
        const { keranjang, uangBayar, metode } = req.body;

        if (!keranjang || keranjang.length === 0) {
            return res.status(400).json({ status: 'error', message: 'Keranjang kosong' });
        }

        const connection = await dbPool.getConnection();
        
        try {
            await connection.beginTransaction();

            let subtotal = keranjang.reduce((sum, item) => sum + (item.harga * item.qty), 0);
            let biayaLayanan = 0;

            if (metode === 'qris') {
                biayaLayanan = subtotal * 0.007;
            }
            
            let ppn = subtotal * 0.11;
            let totalAkhir = subtotal + biayaLayanan + ppn;

            if (metode === 'tunai' || !metode) {
                totalAkhir = Math.ceil(totalAkhir / 100) * 100;
            }

            const uangDibayar = parseFloat(uangBayar) || 0;
            const kembalian   = (metode === 'tunai' || !metode) ? (uangDibayar - totalAkhir) : 0;

            const [transaksiResult] = await connection.query(
                `INSERT INTO transaksi
                    (total_harga, metode_pembayaran, biaya_layanan, ppn, uang_bayar, kembalian)
                 VALUES (?, ?, ?, ?, ?, ?)`,
                [totalAkhir, metode || 'tunai', biayaLayanan, ppn, uangDibayar, kembalian]
            );
            const transaksiId = transaksiResult.insertId;

            for (let item of keranjang) {
                await connection.query(
                    `INSERT INTO detail_transaksi
                        (transaksi_id, barang_id, nama_barang_saat_beli, qty, subtotal)
                     VALUES (?, ?, ?, ?, ?)`,
                    [transaksiId, item.id, item.nama, item.qty, item.harga * item.qty]
                );
                await connection.query(
                    'UPDATE barang SET stok = stok - ? WHERE id = ?',
                    [item.qty, item.id]
                );
            }

            await connection.commit();
            res.status(200).json({ status: 'success', message: 'Transaksi berhasil disimpan!', id: transaksiId });

        } catch (error) {
            await connection.rollback();
            console.error("Database Error:", error);
            res.status(500).json({ status: 'error', message: error.message });
        } finally {
            connection.release();
        }
    },

    getHistory: async (req, res) => {
        try {
            const query = `
                SELECT t.id, t.tanggal, t.total_harga, t.metode_pembayaran,
                       t.biaya_layanan, t.uang_bayar, t.kembalian,
                       COUNT(dt.id) as jumlah_item,
                       GROUP_CONCAT(CONCAT(dt.nama_barang_saat_beli, ' (x', dt.qty, ')') SEPARATOR ', ') as detail_barang
                FROM transaksi t
                LEFT JOIN detail_transaksi dt ON t.id = dt.transaksi_id
                GROUP BY t.id
                ORDER BY t.tanggal DESC
                LIMIT 500
            `;
            const [rows] = await dbPool.query(query);
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json({ status: 'success', data: rows });
        } catch (error) {
            res.status(500).json({ status: 'error', message: error.message });
        }
    }
};

module.exports = transactionController;