const orderModel = require('../models/orderModel');
const cardModel = require('../models/cardModel')


 exports.createOrders = async (req, res) => {

   const cartItems = req.body;

    const amount = Number(cartItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)
     );



    const order = await orderModel.create({ cartItems, amount })


   res.json({
        success: true,
       order
     })
 }


exports.addCardItem = async (req, res) => {

    const cartItems = req.body;

    console.log(cartItems);
    

    // const amount = Number(cartItems.reduce((acc, item) => (acc + item.product.price * item.qty), 0)
    // );



    const order = await cardModel.create( cartItems )



    res.json({
        success: true,
        
    })
}


exports.getAllCartItem=async(req,res)=>{

    await cardModel.find().then(data=>{
        res.send({
            data
        })
    }).catch(err=>{
        res.send(err)
    })


}

exports.deleteItem=async(req,res)=>{

    try {
        const item = await cardModel.findByIdAndDelete(req.params.id);
        if (!item) {
          return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
      } catch (error) {
        res.status(500).json({ message: 'Server error', error });
      }
   
}
