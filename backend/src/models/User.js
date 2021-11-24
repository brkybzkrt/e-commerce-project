const mongoose = require('mongoose');


const UserSchema= new mongoose.Schema({

user_name:{type:String,required:"true"},
email: {type: String,required: true,unique: true},
password: {type: String,required: true},


},{timestamps:true,versionKey:false})



module.exports =mongoose.model("User",UserSchema);