const productModel = require('../models/productModel');



exports.getProducts = async (req,res)=>{
const query = req.query.keyword?{name:{
    $regex: req.query.keyword,
    $options: 'i'
}}:{}

 const products = await productModel.find(query);


    res.json({
        success:true,
        products
    })
}

exports.getSingleProducts= async(req,res)=>{
    
try{
    const product = await productModel.findById(req.params.id)
    res.json({
        success:true,
        product  
     })

} catch(error){
    res.json({
        success:false,
      message:error.message 
    
    })
}

    
}