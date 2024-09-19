const express= require('express');
const { signUp } = require('../controllers/UserController');
const userRouter=express.Router();


userRouter.post('/signup',signUp)

module.exports= userRouter