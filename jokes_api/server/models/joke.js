const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    // _id:{
    //     type:String,
    //     required:[true,"id is required!"]
    // },
    setup:{
        type:String,
        required:[true,"setup is required!"],
        minLength:[10,"Setup at least 10 chars!"]
    },
    punchline:{
        type:String,
        required:[true,"punchline is required!"],
        minLength:[3,"Setup at least 3 chars!"]
    }
},{timestamps:true})

module.exports =mongoose.model('Joke',JokeSchema);
