const express=require("express");
const { register, login } = require("../controllers/authController");
const validate = require("../middlewares/validate");
const { RegisterValidation, LoginValidation } = require("../validations/UserValidations");



const router= express.Router();



router.route("/register").post(validate(RegisterValidation),register);

router.route("/login").post(validate(LoginValidation),login)


module.exports =router;