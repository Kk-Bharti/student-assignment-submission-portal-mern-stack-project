const mongoose =require("mongoose")
mongoose.connect("mongodb://localhost:27017/Userdata")
.then(()=>{
    console.log("connected")
})
.catch(err=>console.log("error"))

const userSchema= new mongoose.Schema({
    username:{
    type:"string",
    
   },
   email:{
    type:"string",
    
   },
   password:{
    type:"string",
    
   },
   confirmPassword:{
    type:"string",

   }

})



const User = mongoose.model('User', userSchema);
module.exports = User;


