import axios from "axios";

export async function login(credentials){
    const response=await axios.post("http://localhost:6600/admin/login",credentials);
    console.log(response.data);
    return response.data;
}