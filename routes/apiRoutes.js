const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/productCtrl');
const transactionCtrl = require('../controllers/transactionCtrl');
const shiftCtrl = require('../controllers/shiftCtrl');
const authCtrl = require('../controllers/authCtrl');

router.post('/login', authCtrl.login);

router.get('/products', productCtrl.getAllProducts);
router.post('/products', productCtrl.addProduct);
router.delete('/products/:id', productCtrl.deleteProduct);
router.put('/products/:id/stock', productCtrl.addStock);

router.post('/checkout', transactionCtrl.checkout);
router.get('/transactions', transactionCtrl.getHistory);

router.post('/shift/buka', shiftCtrl.bukaShift);
router.post('/shift/tutup', shiftCtrl.tutupShift);
router.get('/shifts', shiftCtrl.getHistory);

module.exports = router;