const joi=require("joi");


const RegisterValidation=joi.object({

    user_name:joi.string().required(),
    email:joi.string().email().required(),
    password:joi.string().required().min(8),
    repeat_password:joi.any().valid(joi.ref('password')).required()
})

const LoginValidation=joi.object({
    email:joi.string().email().required(),
    password:joi.string().required().min(8)
    
})

module.exports ={RegisterValidation,LoginValidation};