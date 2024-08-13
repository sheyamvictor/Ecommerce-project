const userModel = require("../models/userModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.send("User already exists");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).send("Something went wrong...");
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, "qwertyuiopasdfghjkl", {
    expiresIn: '30d',
  });
};

exports.login = async(req, res) => {
  try {
    console.log(123,req.body);
    
    const { email, password } = req.body;

    // Find the user by email
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).send("User not found");
    }

    const data={
      _id:user._id,
      name:user.name,
      email:user.email
    }
    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {

      const token= generateToken(data)
      return res.json({
       message:"success",
       data:{...data,token:token}
      });
    
    } else{
      return res.status(400).send("Invalid credentials");
    }
    


  

  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Something went wrong...");
  }
} 