const express = require('express')
const app = express()
const path = require('path');
const bodyParser=require('body-parser');
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({Status:true,message:'Update Successfully'})
})
app.use(bodyParser.urlencoded({extended: true,limit:'50mb'}));
bodyParser.json()
app.use('/website',require("./webhook/router"));
const port = process.env.PORT||3000
app.listen(port,()=>{
    console.log(`server listing port ${port}`);
})