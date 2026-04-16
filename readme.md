# 🛒 Smart POS APXGP - Sistem Kasir UMKM Premium

![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![JavaScript](https://img.shields.io/badge/Frontend-Vanilla%20JS-yellow)
![MySQL](https://img.shields.io/badge/Database-MySQL-blue)

**Smart POS APXGP** adalah aplikasi manajemen penjualan dan inventaris yang dirancang khusus untuk membantu operasional UMKM secara digital. Aplikasi ini hadir dengan antarmuka **Glassmorphism** modern dan fitur **Hyper-Realistic Thermal Receipt**.

---

## 🚀 Fitur Unggulan

Aplikasi ini mencakup fitur lengkap dari manajemen gudang hingga laporan keuangan:

### 💼 Manajemen Kasir & Transaksi
* **Multi-Payment Method**: Mendukung Tunai (dengan pembulatan otomatis), QRIS (dengan kalkulasi fee), dan Kartu Debit.
* **Thermal Receipt Simulator**: Struk belanja digital dengan desain realistis (efek kertas thermal, zig-zag cut, dan barcode).
* **Stock Validation**: Mencegah transaksi jika stok barang tidak mencukupi.

### 📈 Analitik & Laporan (Mode Admin)
* **Sales Dashboard**: Visualisasi pendapatan real-time menggunakan grafik interaktif (Chart.js).
* **Shift Management**: Pencatatan modal awal, penutupan kas, dan deteksi selisih uang laci secara otomatis.
* **Export Data**: Kemampuan mengunduh laporan penjualan dalam format `.csv` (Excel).

### 📦 Inventaris (CRUD)
* Pengelolaan katalog barang (Tambah, Edit Stok, Hapus).
* Fitur pencarian barang secara instan (*Live Search*).

---

## 🛠️ Teknologi yang Digunakan

| Sektor | Teknologi |
| :--- | :--- |
| **Backend** | Node.js, Express.js, MySQL2 |
| **Frontend** | Vanilla JavaScript (ES6+), HTML5, CSS3 |
| **UI/UX** | Glassmorphism Style, SweetAlert2, Google Fonts |
| **Library** | Chart.js (Analitik) |

---

## 📥 Instalasi & Persiapan

Ikuti langkah-langkah berikut untuk menjalankan proyek di komputer Anda:

### 1. Prasyarat
Pastikan Anda sudah menginstal:
* [Node.js](https://nodejs.org/) (v16+)
* [XAMPP](https://www.apachefriends.org/) (Untuk MySQL)

### 2. Persiapan Database
1.  Buka **XAMPP Control Panel** dan aktifkan modul **MySQL**.
2.  Masuk ke `phpMyAdmin` atau `MySQL Workbench`.
3.  Buat database baru bernama `apxgp`.
4.  Impor file `apxgp.sql` yang ada di root folder ke dalam database tersebut.
    > **Catatan**: Jika port MySQL Anda bukan `3306`, sesuaikan pengaturannya di file `config/database.js`.

### 3. Menjalankan Server
Buka terminal/CMD di folder proyek, lalu jalankan:
```bash
# Install dependensi
npm install

# Jalankan server dengan Nodemon
npm run dev