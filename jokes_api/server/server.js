const express = require("express");
const app=express();
const port=8000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./config/mongoose')
const Routes=require('./routes/routes')
Routes(app)


















app.listen(port,()=>console.log("welcome to port 8000!"))
