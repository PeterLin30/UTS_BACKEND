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

### 2. Mengunduh Source Code
Anda bisa mendapatkan kode sumber aplikasi ini melalui dua cara:

**Opsi A: Menggunakan Git Clone (Terminal/CMD)**
```bash
git clone [https://github.com/PeterLin30/UTS_BACKEND.git](https://github.com/PeterLin30/UTS_BACKEND.git)
cd UTS_BACKEND

**Opsi B: Mengunduh File ZIP**
1. Buka tautan repositori GitHub proyek ini: [https://github.com/PeterLin30/UTS_BACKEND](https://github.com/PeterLin30/UTS_BACKEND)
2. Klik tombol hijau **`<> Code`** di kanan atas, lalu pilih **`Download ZIP`**.
3. Ekstrak file ZIP tersebut di komputer Anda.
4. Buka folder hasil ekstraksi, lalu buka Terminal/CMD di dalam folder tersebut.

### 3. Persiapan Database
1. Buka **XAMPP Control Panel** dan aktifkan modul **MySQL**.
2. Buat database baru bernama `apxgp` melalui `phpMyAdmin` atau `MySQL Workbench`.
3. **Cara Impor File `apxgp.sql`:**

   **Opsi A: Menggunakan phpMyAdmin (Rekomendasi)**
   * Pilih database **`apxgp`** di kolom sebelah kiri.
   * Klik tab **Import** pada menu bagian atas.
   * Klik tombol **Choose File** dan pilih file `apxgp.sql` yang berada di folder root proyek Anda.
   * Gulir ke bawah dan klik tombol **Import** (atau **Go**).

   **Opsi B: Menggunakan MySQL Workbench**
   * Masuk ke koneksi database Anda.
   * Klik dua kali pada database **`apxgp`** agar menjadi aktif (*bold*).
   * Klik menu **File** > **Open SQL Script...** dan pilih file `apxgp.sql`.
   * Klik ikon **Petir (⚡)** di atas tab editor untuk mengeksekusi perintah SQL.

   > **Catatan**: Secara default aplikasi terhubung ke database bernama `apxgp` tanpa password. Jika port MySQL Anda bukan `3306`, atau Anda memiliki password, silakan sesuaikan pengaturannya di file `config/database.js`.

### 4. Menjalankan Server
Pastikan terminal/CMD Anda sudah berada di dalam folder proyek, lalu jalankan perintah berikut secara berurutan:

```bash
# Install seluruh library yang dibutuhkan
npm install

# Jalankan server aplikasi
npm run dev

### 5. Akses Aplikasi
* **Backend**: Server API berjalan di `http://localhost:3000`
* **Frontend**: Buka File Explorer Anda, cari file `index.html`, lalu klik dua kali untuk membukanya di browser. (Atau gunakan ekstensi **Live Server** jika Anda menggunakan VS Code).

---

## 💡 Panduan Penggunaan Singkat

1. **Buka Shift Kasir:** Ubah ke `Mode Kasir` di opsi kanan atas. Masukkan nama kasir dan modal awal, lalu klik **"Buka Shift"**.
2. **Transaksi:** Cari barang, klik "Tambah", tentukan metode pembayaran (Tunai/QRIS/Debit), masukkan nominal uang bayar, lalu klik **"Proses Transaksi & Cetak"**. 
3. **Tutup Shift:** Di akhir sesi, masukkan sisa uang fisik yang ada di laci kasir, lalu klik **"Tutup Shift"** untuk merekap perhitungan selisih kas.
4. **Laporan Admin:** Ubah ke `Mode Admin` untuk melihat Grafik Penjualan, riwayat transaksi, rekapan *shift* harian, serta fitur ekspor laporan ke format Excel (CSV).

---

## 👨‍💻 Tim Pengembang
* **APXGP**

---
*Proyek ini dibuat untuk memenuhi Tugas UTS Mata Kuliah Pengembangan Web Back-End.*