const mongoose = require('mongoose');

 const orderSchema = new mongoose.Schema({

    // cartItems:Array,
    // amount: String,
    // status: String,

    order:[{
    name:String,
    price:String,
    description:String,
    ratings:String,
    images:[{
        image:String
    }],
    category:String,
    stock: String,
    seller:String}]
})



const orderModel = mongoose.model('order',orderSchema);

module.exports = orderModel;