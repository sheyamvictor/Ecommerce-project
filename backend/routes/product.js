const express = require('express');
const { getProducts, getSingleProducts } = require('../controllers/productControllers');
const router = express.Router();

router.get('/product/:id',getSingleProducts)
router.get("/products",getProducts)

module.exports=router;