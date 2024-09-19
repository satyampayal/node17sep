const express=require('express');
const ConnectedTODB = require('./config/DbConnection');
const   userRouter  = require('./routes/userRoutes');


const app=express();
const PORT=7003;

app.use(express.json());
app.use('/api/v1',userRouter);
app.listen(PORT,(err)=>{
    if(err){
        console.log("failed to run erver ")
        return;
    }
    else{
        console.log("Server run on Port"+PORT)
        ConnectedTODB();

    }

})