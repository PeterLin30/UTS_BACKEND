const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Parsing body berformat JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Melayani file HTML/CSS statis untuk UI (Indikator 9)

// Memanggil module routing (Indikator 4 & 6)
app.use('/api', apiRoutes);

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server POS Smart Economy berjalan di http://localhost:${PORT}`);
});