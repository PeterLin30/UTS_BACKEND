const dbPool = require('../config/database');

const productController = {
    getAllProducts: async (req, res) => {
        try {
            const [rows] = await dbPool.query('SELECT * FROM barang');
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json({ status: 'success', data: rows });
        } catch (error) {
            res.status(500).json({ status: 'error', message: error.message });
        }
    },

    addProduct: async (req, res) => {
        try {
            const { nama_barang, stok, harga } = req.body;
            const query = 'INSERT INTO barang (nama_barang, stok, harga) VALUES (?, ?, ?)';
            await dbPool.query(query, [nama_barang, stok, harga]);
            res.status(201).json({ status: 'success', message: 'Barang berhasil ditambahkan' });
        } catch (error) {
            res.status(500).json({ status: 'error', message: error.message });
        }
    },

    // FITUR BARU: Hapus Barang
    deleteProduct: async (req, res) => {
        try {
            const id = req.params.id;
            await dbPool.query('DELETE FROM barang WHERE id = ?', [id]);
            res.status(200).json({ status: 'success', message: 'Data barang berhasil dihapus' });
        } catch (error) {
            res.status(500).json({ status: 'error', message: error.message });
        }
    },
    addStock: async (req, res) => {
        try {
            const id = req.params.id;
            const { tambahan_stok } = req.body;
            
            // Perintah UPDATE untuk menambahkan stok lama dengan stok baru
            await dbPool.query('UPDATE barang SET stok = stok + ? WHERE id = ?', [tambahan_stok, id]);
            
            res.status(200).json({ status: 'success', message: 'Stok berhasil diperbarui' });
        } catch (error) {
            res.status(500).json({ status: 'error', message: error.message });
        }
    }
};

module.exports = productController;