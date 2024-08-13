const express = require('express');
const cors = require('cors')
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/connectDatabase')
dotenv.config({path:path.join(__dirname, 'config', 'config.env')})
const jwt = require('jsonwebtoken')

const products = require('./routes/product');

const orders = require('./routes/order');
const auth = require("./routes/auth.js")

const verify = (req, res, next) => {
    const { token } = req.body;
    console.log(token);
    
  
    if (!token) {
      return res.status(400).json({ status: "error", message: "Token is required" });
    }else{
        jwt.verify(token,"qwertyuiopasdfghjkl",(err,encoded)=>{
            if(err){
                return res.json({ status: "error", message: "token not match" });

            }else{
                req.name=encoded.id.name
                next()
            }
        })
    }
  

  };

connectDatabase();
app.use(express.json());
app.use(cors());

app.use('/api/v1/',products);
app.use('/api/v1/',orders);

app.use('/',auth);


app.post('/verify',verify, (req, res) => {

    
    
    return res.json({ status: "success", name: req.name });
  });


app.listen(process.env.PORT,()=>{
    console.log(`server connecting ${process.env.PORT} `)
})