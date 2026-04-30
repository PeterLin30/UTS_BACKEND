// Base Class
class User {
    constructor(id, nama, peran) {
        this.id = id;
        this.nama = nama;
        this.peran = peran;
    }

    getProfile() {
        return { id: this.id, nama: this.nama, peran: this.peran };
    }
}

// Child Class: Admin
class Admin extends User {
    constructor(id, nama) {
        super(id, nama, 'Admin'); // Memanggil constructor dari User
    }

    aksesLaporan() {
        return `Akses laporan bulanan diizinkan untuk Admin: ${this.nama}`;
    }
}

// Child Class: Kasir
class Kasir extends User {
    constructor(id, nama) {
        super(id, nama, 'Kasir');
    }

    prosesTransaksi(total) {
        return `Kasir ${this.nama} memproses transaksi sebesar Rp${total}`;
    }
}

module.exports = { User, Admin, Kasir };