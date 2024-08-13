const mongoose = require('mongoose')

const productSchema=  new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    ratings:String,
    images:[{
        image:String
    }],
    category:String,
    stock: String,
    seller:String

});

const productModel= mongoose.model('product', productSchema);

module.exports = productModel;