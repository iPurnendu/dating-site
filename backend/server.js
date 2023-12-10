import express from "express";
import mongoose from "mongoose";
import { Usermodel } from "./ListModel.js";
import {StatusCodes} from 'http-status-codes';
import { DELETE_SUCCESS, ERROR_MESSAGE, INSERT_SUCCESS, STUDENT_NOT_FOUND, UPDATE_SUCCESS } from './const.js';
import cors from 'cors';
import bcrypt from "bcrypt";
import { adminmodel } from "./AdminModel.js";
import  jwt from "jsonwebtoken";
const app=express();
app.use(cors());
app.use(express.json());

var mongooseURL ="mongodb://localhost:27017/dating-data";

function verifyToken(request,response,next){
    const header=request.get("Authorization");
    if(header){
        const token=header.split(" ")[1];
        jwt.verify(token,"secretadmin",(error,payload)=>{
            if(error){
                response.status(StatusCodes.UNAUTHORIZED).send({message:"Invalid"});
            }
            else{
                next();
            }
        });
    }
    else{
        response.status(StatusCodes.UNAUTHORIZED).send({message:"Plese Login First"});
    }
    
}
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/dating-data");  
        console.log("Database connected Sucessfully.........")

    } catch (error) {
        console.log(error);
    }
}
//normal home 
app.get("/", (request, response) => {
    response.send("Welcome to the Dating Website");
});

//Admin Sign up
app.post("/admin",async(request,response)=>{
    try{
        const reqdata=request.body;
        reqdata.password=bcrypt.hashSync(reqdata.password,10);
        const admin=new adminmodel(reqdata);
        await admin.save();
        response.send({message:"Admin Profile inserted"});
    }catch(error){
        response.send({message:"Something Went wrong"});
    }
})
//Admin Login
app.post("/admin/login",async(request,response)=>{
    try{
        const admin= await adminmodel.findOne({number:request.body.number});
        if(admin){
            if(bcrypt.compareSync(request.body.password,admin.password)){
                const token=jwt.sign({adminPhone:admin.number},"secretadmin");
                response.status(StatusCodes.OK).send({message:"Login Successful",tokenvalue:token});
            }
            else{
                response.status(StatusCodes.BAD_REQUEST).send({message:"Invalid Number or Password"});
            }
        }
    }catch(error){
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
})

//adding profile
app.post("/addprofilelist",async(request,response)=>{
    try{
        const reqdata=request.body;
        const user=new Usermodel(reqdata);
        await user.save();
        response.send({message:"profile inserted"});
    }catch(error){
        response.send({message:"Something Went wrong"});
    }
})

//fetching all  profile
app.get("/allprofilelist", async (request, response) => {
    try {
        const user = await Usermodel.find();
        response.send({profile_Details:user});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: ERROR_MESSAGE});
    }
})

app.get("/profile/:name",async(request, response)=>{
    try{
        //we can use .find() and fetch the roll no but it will return a array so for that we need use {[roll:]} thats why we are using .finOne 
        const user= await Usermodel.findOne({name:request.params.name});
        if(user==null){
            response.status(StatusCodes.NOT_FOUND).send({message:USER_NOT_FOUND});
        }
        else{
            response.status(200).send({Profile_Details:user});
        }
    }catch(error){
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});
app.delete("/profile/:name",async(request,response)=>{
    try {
        await Usermodel.deleteOne({name:request.params.name});
        response.send({message:DELETE_SUCCESS});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});

app.put("/profile/:name",async(request,response)=>{
    try {
        await Usermodel.updateOne({name:request.params.name},request.name);
        response.send({message:UPDATE_SUCCESS});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSAGE});
    }
});
app.listen(6600,()=>{
    console.log("Server is stared");
    connectDB();
})