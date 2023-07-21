const express = require('express');
const path = require('path');

const rootDir = require('../util/path')

const router = express.Router();

router.get('/products', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'products.html')); 
});

router.post('/add-product', (req, res, next) => {
    res.redirect('/');
});

module.exports = router;