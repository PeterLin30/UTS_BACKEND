const dbPool = require('../config/database');

const shiftController = {
    bukaShift: async (req, res) => {
        try {
            const { modal_awal, nama_kasir } = req.body;
            const [result] = await dbPool.query(
                'INSERT INTO shift (modal_awal, nama_kasir, status, waktu_buka) VALUES (?, ?, "buka", CURRENT_TIMESTAMP)',
                [modal_awal, nama_kasir]
            );
            res.status(201).json({ status: 'success', shiftId: result.insertId, nama_kasir: nama_kasir });
        } catch (error) {
            res.status(500).json({ status: 'error', message: error.message });
        }
    },
    
    tutupShift: async (req, res) => {
        try {
            const { id, total_fisik } = req.body;
            
            // 1. Ambil Modal Awal & waktu_buka shift ini
            const [shiftData] = await dbPool.query(
                'SELECT modal_awal, waktu_buka FROM shift WHERE id = ?',
                [id]
            );
            if (!shiftData || shiftData.length === 0) {
                return res.status(404).json({ status: 'error', message: 'Shift tidak ditemukan' });
            }
            const modalAwal  = parseFloat(shiftData[0].modal_awal)  || 0;
            const waktuBuka  = shiftData[0].waktu_buka;

            // 2. Ambil Total Kembalian saja (Sebagai 'Sistem')
            const [trx] = await dbPool.query(
                `SELECT COALESCE(SUM(kembalian), 0) AS total_kembalian
                 FROM transaksi
                 WHERE metode_pembayaran = 'tunai'
                   AND tanggal >= ?`,
                [waktuBuka]
            );
            const totalKembalian = parseFloat(trx[0].total_kembalian) || 0;
            
            // 3. RUMUS SELISIH CUSTOM (Sesuai SOP Toko APXGP)
            // Ekspektasi Laci = Modal Awal - Total Kembalian
            const expectedKasLaci = modalAwal - totalKembalian;
            
            // Selisih = Uang Fisik - Ekspektasi Laci
            const selisih = parseFloat(total_fisik) - expectedKasLaci;

            // 4. Simpan ke database
            await dbPool.query(
                `UPDATE shift
                 SET waktu_tutup      = CURRENT_TIMESTAMP,
                     total_tunai_sistem = ?,
                     total_tunai_fisik  = ?,
                     selisih            = ?,
                     status             = 'tutup'
                 WHERE id = ?`,
                [totalKembalian, total_fisik, selisih, id]
            );

            res.status(200).json({ status: 'success', message: 'Shift berhasil ditutup' });
        } catch (error) {
            res.status(500).json({ status: 'error', message: error.message });
        }
    },

    getHistory: async (req, res) => {
        try {
            const [rows] = await dbPool.query('SELECT * FROM shift ORDER BY id DESC LIMIT 50');
            res.status(200).json({ status: 'success', data: rows });
        } catch (error) {
            res.status(500).json({ status: 'error', message: error.message });
        }
    }
};

module.exports = shiftController;