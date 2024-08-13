const express =require('express');
const { createOrders,addCardItem,getAllCartItem,deleteItem} = require('../controllers/orderController');
const router = express.Router();


router.route('/order').post(createOrders)
router.post('/addCard',addCardItem)
router.get('/addCard',getAllCartItem)
router.delete('/addCard/:id',deleteItem)
module.exports=router;