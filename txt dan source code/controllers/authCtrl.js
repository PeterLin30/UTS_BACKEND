const { Admin, Kasir } = require('../models/User');

const authController = {
    login: (req, res) => {
        const { role } = req.body;
        let currentUser;

        if (role === 'admin') {
            currentUser = new Admin(1, 'Peter Lin');
            return res.status(200).json({
                status: 'success',
                role: currentUser.peran,
                nama: currentUser.nama,
                permission: currentUser.aksesLaporan()
            });
        } else {
            currentUser = new Kasir(2, 'Staf');
            return res.status(200).json({
                status: 'success',
                role: currentUser.peran,
                nama: currentUser.nama,
                permission: 'Akses terbatas untuk verifikasi pembayaran dan kasir.'
            });
        }
    }
};

module.exports = authController;