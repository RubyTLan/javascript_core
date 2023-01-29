const mongoose = require("mongoose");

const database="jokesdb";
mongoose.connect(`mongodb://localhost/${database}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(()=>console.log(`DB connection done to ${database}`))
    .catch((error)=>console.log("something wrong",error))
