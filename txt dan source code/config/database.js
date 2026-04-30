const mysql = require('mysql2/promise');

const dbPool = mysql.createPool({
    host: 'localhost',
    port: 3306,          
    user: 'root',
    password: 'Lhokseumawe123', //Ganti sesuai password MySQL punyamu
    database: 'apxgp', //Buat nama schema di MySQL sesuai nama ini "apxgp"
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = dbPool;