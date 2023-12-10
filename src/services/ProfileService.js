
import axios from "axios";
import { getToken } from "../utils/TokenUtil";

export async function fetchallUsersfromserver(){
        return axios.get("http://localhost:6600/allprofilelist",{headers:{'Authorization':`Bearer ${getToken()}`}});
}

export async function saveUsers(profiledata){
    try{
        const response=await axios.post("http://localhost:6600/addprofilelist",profiledata);
        return response.data;
    }catch(error){
        console.log(error);
    }
}

export async function deleteUsers(name){
    try{
        const response=await axios.delete(`http://localhost:6600/profile/${name}`);
        return response.data;
    }catch(error){
        console.log(error);
    }
}