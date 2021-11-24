const crypto=require('crypto-js');
const JWT=require("jsonwebtoken");

const cryptedPassword=(password)=>{
    return crypto.HmacSHA512(password,crypto.HmacSHA1(password,process.env.SALT_KEY).toString()).toString();
     
}


const createAccessToken=(user)=>{

    const payload={...user};
    return JWT.sign(payload,process.env.ACCESS_TOKEN_SECRET_KEY,{expiresIn:"1w"})
}

const createRefleshToken=(user)=>{

    const payload={...user};
    return JWT.sign(payload,process.env.REFLESH_TOKEN_SECRET_KEY,{expiresIn:"200d"})
}

module.exports ={cryptedPassword,createAccessToken,createRefleshToken}