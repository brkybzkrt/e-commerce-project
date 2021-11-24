const httpStatus=require('http-status');
const { cryptedPassword, createAccessToken, createRefleshToken } = require("../helpers");
const { redis } = require('../loaders/redis');
const User =require("../models/User");



module.exports.register= async(req,res)=>{

req.body.password=cryptedPassword(req.body.password);

await User.create(req.body).then((response)=>{
    res.status(201).send(response)
}).catch(err=>{
    res.status(400).send(err)
})    
}


module.exports.login= async(req,res)=>{
    req.body.password=cryptedPassword(req.body.password);

    await User.findOne(req.body).then(user=>{

        if(!user){
            res.status(httpStatus.NOT_FOUND).send({message:"Böyle bir kullanıcı bulunmamaktadır"})
        }

         user={...user.toObject(),token:{access_token:createAccessToken(user),reflesh_token:createRefleshToken(user)}}
         
        redis.set(user._id,createRefleshToken(user),"EX", 200 * 24 * 60 * 60)

        res.status(httpStatus.OK).send(user)
    }).catch(err=>{

        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
    })

}