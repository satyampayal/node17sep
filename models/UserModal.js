const {Schema, model} =require('mongoose');
const bcrypt=require('bcryptjs');
const userSchema=new Schema({
    name:{
        type:'String',
        require:true,
    },
    email:{
        type:'String',
        require:true,
    },
    password:{
        type:'String',
        require:true,
    },
})
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password=await bcrypt.hash(this.password,10);
})

const User= model('Node17Sep',userSchema);
module.exports= User;