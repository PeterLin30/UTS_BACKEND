# 🛒 Smart POS APXGP - Sistem Kasir UMKM Premium

![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![JavaScript](https://img.shields.io/badge/Frontend-Vanilla%20JS-yellow)
![MySQL](https://img.shields.io/badge/Database-MySQL-blue)

**Smart POS APXGP** adalah aplikasi manajemen penjualan dan inventaris yang dirancang khusus untuk membantu operasional UMKM secara digital. Aplikasi ini hadir dengan antarmuka **Glassmorphism** modern dan fitur **Hyper-Realistic Thermal Receipt**.

---

## 🚀 Fitur Unggulan (21 Fitur Komprehensif)

Aplikasi ini mencakup **21 fitur fungsional** yang terbagi ke dalam 4 modul utama untuk memastikan manajemen gudang, transaksi, dan laporan keuangan berjalan secara profesional:

### 🛒 Modul Transaksi Kasir (Point of Sale)
1. **Manajemen Keranjang Cerdas:** Fitur tambah/hapus barang dengan validasi stok *real-time* (mencegah penambahan jika stok gudang habis).
2. **Kalkulator Pajak & Biaya (Tax & Fee):** Otomatis menghitung PPN 11% dan Biaya Layanan MDR (contoh: QRIS dikenakan *fee* 0.7%) menggunakan arsitektur OOP (*Object-Oriented Programming*).
3. **Pembulatan Harga Otomatis:** Sistem secara pintar membulatkan total harga ke pecahan ratusan terdekat khusus untuk metode pembayaran Tunai.
4. **Kalkulator Kembalian & Validasi:** Menghitung uang kembalian secara presisi dan otomatis memblokir transaksi jika nominal uang yang diinput kurang dari total tagihan.
5. **Cetak Struk *Hyper-Realistic*:** Menghasilkan bon kasir digital yang didesain persis seperti kertas termal fisik, lengkap dengan efek sobekan zig-zag dan *Barcode* berbasis CSS murni.
6. **Quick Cash (Tombol Uang Cepat):** Tombol *shortcut* pintar (Uang Pas, 50rb, 100rb) untuk mempercepat input nominal pembayaran oleh kasir tanpa perlu mengetik manual.
7. **Peringatan Saldo Laci (Real-time Drawer Balance):** Sistem pelacakan uang fisik dinamis yang otomatis memblokir transaksi jika kembalian melebihi kas yang ada di laci.
8. **Otomatisasi Uang Pas (Cashless):** Menyembunyikan form input nominal dan kembalian secara otomatis saat metode QRIS/Debit dipilih.

### ⏱️ Modul Manajemen Shift (Keuangan)
1. **Buka Shift (Open Shift):** Memulai sesi kasir dengan mencatat Nama Kasir yang bertugas dan jumlah Modal Awal di laci kasir.
2. **Tutup Shift (End of Day):** Fitur akuntansi yang menghitung ekspektasi uang laci berdasarkan Modal Awal ditambah pendapatan tunai dan dikurangi kembalian.
3. **Deteksi Selisih Kas:** Sistem membandingkan uang fisik yang diinput kasir dengan data sistem, lalu menampilkan status selisih (Minus/Balance/Plus) dengan indikator warna.
4. **Log Riwayat Shift:** Tabel rekapitulasi komprehensif dari seluruh sesi *shift* yang pernah berjalan beserta status keuangannya.

### 📊 Modul Admin & Analitik (Dashboard)
1. **Manajemen Inventaris (CRUD):** Fitur lengkap untuk menambah produk baru, menyuntikkan tambahan stok barang, mengurangi stok barang dan menghapus barang dari database.
2. **Live Search Engine:** Fitur pencarian barang secara instan tanpa perlu memuat ulang (*refresh*) halaman web.
3. **Smart Sorting Produk:** *Dropdown* filter cerdas untuk mengurutkan daftar barang berdasarkan A-Z, Z-A, Harga Termurah, Harga Termahal, atau Stok Terbanyak.
4. **Grafik Penjualan Interaktif:** Visualisasi tren pendapatan menggunakan *library* **Chart.js** yang ter-*update* secara dinamis.
5. **Filter Laporan Lanjutan:** Fitur untuk menyaring riwayat transaksi secara spesifik berdasarkan Tanggal tertentu maupun kata kunci detail barang.
6. **Ekspor Laporan (CSV):** Fitur *one-click* untuk mengunduh seluruh data riwayat transaksi menjadi *spreadsheet* Excel (.csv).
7. **Cetak Laporan Otomatis (PDF):** Mode cetak khusus (*Print CSS*) yang menghilangkan elemen UI tidak penting dan memformat tabel serta grafik analisis menjadi dokumen PDF yang rapi.

### ⚙️ Modul Sistem & Keamanan (Arsitektur)
1. **Role-Based Access Control (RBAC):** Pemisahan antarmuka secara instan. Mode Kasir menyembunyikan laporan keuangan, sedangkan Mode Admin menyembunyikan panel mesin kasir.
2. **Mode Kiosk (Full-Screen):** Fitur penampil layar penuh yang mensimulasikan antarmuka mesin POS sungguhan di minimarket, memblokir gangguan elemen *browser* lain.
3. **Asynchronous API Integration:** Seluruh interaksi tombol ke *database* menggunakan konsep `async/await` dan `fetch API`, membuat web sangat responsif layaknya *Single Page Application* (SPA).
4. **Notifikasi Premium (SweetAlert2):** Kotak dialog (*pop-up*) peringatan bergaya *Glassmorphism* yang elegan dan beranimasi, menggantikan *alert* kaku bawaan *browser*.

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
