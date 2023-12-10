import mongoose, { Schema } from "mongoose";

const userschema = new Schema({
   name:String,
   age:String,
   hobbies:String,
   number:String,
   gender:String,
   location:String,
   img:String,
   password:String
})

export const Usermodel = mongoose.model('users', userschema);



