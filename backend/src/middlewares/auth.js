const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");


const authenticateToken = (req, res, next) => {
  
const token= req.headers?.authorization?.split(" ")[1] || [];

if (!token) {
return res
.status(httpStatus.UNAUTHORIZED)
.send({ error: "Bu işlem için giriş yapmalısınız" });
}

jwt.verify(token,process.env.ACCESS_TOKEN_SECRET_KEY,(err,user)=>{

if(err) {
return res.status(httpStatus.FORBIDDEN).send({error:"token süresi geçmiş"})
}

req.user=user;
next();
})
};

module.exports = { authenticateToken };