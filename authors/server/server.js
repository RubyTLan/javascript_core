const express = require("express");
const cors = require("cors");
const app=express();
const port=8000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());




require('./config/mongoose')
const Routes=require('./routes/routes')
Routes(app)


app.listen(port,()=>console.log("welcome to port 8000!"))
