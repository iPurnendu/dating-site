import mongoose, { Schema } from "mongoose";

const adminschema = new Schema({
   name:String,
   age:Number,
   hobbies:String,
   number:Number,
   gender:String,
   location:String,
   img:String,
   password:String,
})

export const adminmodel = mongoose.model('admin', adminschema);



