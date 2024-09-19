const mongoose=require('mongoose');

const uri='mongodb://localhost:27017'
const ConnectedTODB= async ()=>{
   try {
    const result=await mongoose.connect(uri)
    if(result){
        console.log("Connected to Db"+result);
    }
   } catch (error) {
    console.log("Failed To connect"+error);
    
   }

}
module.exports=ConnectedTODB;