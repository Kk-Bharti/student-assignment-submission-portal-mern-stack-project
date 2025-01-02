

const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require('bcryptjs');
const mongoose = require("mongoose"); 
const bodyParser = require('body-parser');
const User = require("./config");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




// app.post("/api/login", async(req,res)=>{
//   const { username, lpassword} = req .body;


//   const user = await User.findOne(User.email === username);
  

//    if(user){
//     res.status(200).json({message:user.email})
//    }
//   // else{
//   //  res.status(401).json({message:"login failed"})
//   //  }
//   //user =>user.username === username && user.lpassword === lpassword


// })


app.post('/api/login', async (req, res) => {
  const { email , password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Login failed: Invalid credentials' });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Login failed: Invalid credentials' });
    }

    // Success
    res.status(200).json({ message: `Welcome, ${user.fullName}` });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

app.get("/api/getAllProduct", async (req, res) => {
  try {
    const data = await User.findOne();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



app.post("/register", async (req, res) => {
  const response = new User({
    username: req.body.formData.username,
    email: req.body.formData.email,
    password: req.body.formData.password,
    confirmPassword : req.body.formData.confirmPassword
  });
  const result = await response.save();
 try{
  res.status(200).json("data is register success",)
 }
 catch(err){
  res.status(400).json({message:err.message})
 }
});

  

app.listen(5000, () => {
    console.log("Server is running on port 5000");
    
});
