const mongoose = require('mongoose')

const cardSchema=  new mongoose.Schema({

  
    name:String,
    price:String,
    description:String,
    ratings:String,
    images:[{
        id:String,
        image:String
    }],
    category:String,
    stock: String,
    seller:String,
  


   

})



const cardModel= mongoose.model('cardItem', cardSchema);

module.exports = cardModel;