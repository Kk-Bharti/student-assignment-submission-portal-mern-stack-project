const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    
  username: {
        type: String,
        //required: true,
       // unique: true,
       // trim: true,
        //lowercase: true,
      //  match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    lpassword: {
        type: String
        //required: true,
       // minlength: 3
    }
   
})
    
    

const User = mongoose.model('User', userSchema);

module.exports = User;


