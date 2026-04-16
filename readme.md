🛒 Panduan Instalasi & Menjalankan Smart POS APXGP
Aplikasi ini adalah Sistem Kasir (Point of Sales) dan Manajemen Inventaris yang dibangun menggunakan arsitektur Node.js (Express) untuk Backend dan Vanilla HTML/CSS/JS untuk Frontend. Aplikasi ini menggunakan MySQL sebagai basis data.

🛠️ Persiapan Sistem (Prerequisites)
Pastikan komputer Anda sudah terinstal aplikasi berikut sebelum menjalankan program:

Node.js (Versi 16 atau lebih baru)

XAMPP (Untuk menjalankan MySQL Server)

Web Browser modern (Chrome / Edge / Firefox)

📥 Mengunduh Source Code
Anda bisa mendapatkan kode aplikasi ini melalui 2 cara. Pilih salah satu yang paling mudah bagi Anda:

Opsi A: Menggunakan Git (Bagi pengguna Git)
Buka Terminal atau Command Prompt, lalu jalankan perintah berikut:

Bash
git clone https://github.com/PeterLin30/UTS_BACKEND.git
cd UTS_BACKEND
Opsi B: Unduh File ZIP (Cara Manual)

Buka link repositori GitHub: https://github.com/PeterLin30/UTS_BACKEND

Klik tombol hijau <> Code, lalu pilih Download ZIP.

Ekstrak file ZIP tersebut di komputer Anda.

Buka folder hasil ekstrak (UTS_BACKEND-main).

🗄️ Langkah 1: Persiapan Database (MySQL)
Buka aplikasi XAMPP Control Panel.

Klik tombol Start pada modul MySQL.

Buka phpMyAdmin (di browser: http://localhost/phpmyadmin) atau MySQL Workbench.

Buat database baru dengan nama: apxgp

Import Data: Buka file apxgp.sql yang ada di dalam folder proyek, lalu copy seluruh isinya dan paste ke tab SQL / Query di phpMyAdmin/Workbench Anda. Klik Run/Kirim untuk mengeksekusi.

💡 Kustomisasi Database (Opsional):
Secara default, aplikasi terhubung ke port 3307 tanpa password. Jika Anda ingin mengubah Port, Password, atau Nama Database agar sesuai dengan komputer Anda, silakan buka folder config dan edit file database.js.

⚙️ Langkah 2: Persiapan Backend (Node.js)
Buka Terminal atau Command Prompt (CMD).

Arahkan terminal ke dalam folder proyek yang sudah Anda unduh (Contoh: cd C:\Users\NamaAnda\Downloads\UTS_BACKEND).

Instal semua pustaka (library) yang dibutuhkan dengan mengetikkan perintah berikut lalu tekan Enter:

Bash
npm install
(Perintah ini akan mengunduh otomatis library seperti express, mysql2, cors, dll ke dalam folder node_modules).

🚀 Langkah 3: Menjalankan Server Backend
Di terminal yang sama (di dalam folder proyek), jalankan perintah berikut untuk menghidupkan server:

Bash
npm run dev
Pastikan muncul tulisan dari nodemon dan pesan sukses seperti ini:
✅ Server berjalan di port 3000
✅ Koneksi ke database berhasil

Biarkan terminal ini tetap terbuka selama Anda menggunakan aplikasi.

🖥️ Langkah 4: Menjalankan Frontend (Aplikasi Kasir)
Karena bagian frontend menggunakan HTML statis, Anda memiliki dua cara untuk membukanya:

Cara 1 (Paling Mudah): Buka folder proyek Anda di File Explorer, cari file index.html, lalu klik dua kali. Aplikasi akan langsung terbuka di browser Anda.

Cara 2 (Saran Developer): Buka folder proyek menggunakan Visual Studio Code, klik kanan pada file index.html, lalu pilih "Open with Live Server".

💡 Panduan Penggunaan (Singkat)
Buka Shift Kasir: Ubah ke Mode Kasir di opsi kanan atas. Masukkan nama kasir dan modal awal, lalu klik "Buka Shift".

Transaksi: Cari barang, klik "Tambah", tentukan metode pembayaran (Tunai/QRIS/Debit), masukkan nominal uang yang dibayar pelanggan, lalu klik "Proses Transaksi & Cetak". (Struk termal akan otomatis muncul untuk dicetak).

Tutup Shift: Setelah selesai berjualan, masukkan sisa uang fisik yang ada di laci kasir, lalu klik "Tutup Shift" untuk merekap perhitungan selisih kas.

Lihat Laporan Admin: Ubah dropdown ke Mode Admin untuk melihat Grafik Penjualan (Chart.js), tabel riwayat transaksi, rekapan shift harian, serta fitur untuk mengekspor laporan ke Excel (CSV).