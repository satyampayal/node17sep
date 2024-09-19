const User  = require("../models/UserModal")
const signUp= async(req,res) =>{
    
    const {name,email,password}=req.body;
    const userExist=await User.findOne({email});
    if(userExist){
        res.status(501).json({
            success:false,
            message:'This Email Already register'
        })
        return ;
    }
    const user=await  User.create({
        name,
        email,
        password
    });
    if(!user){
        res.status(500).json({
            success:false,
            message:'Not crate user'
        })
        return;
    }
    await user.save();
    user.password=undefined
    res.status(200).json({
        success:true,
        message:"user Create Susccessfully",
        user
    })


    
}

module.exports = {signUp}