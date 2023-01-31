const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"name is required!"],
        minlength:[3,"name must be at least 3 characters!"]

    },
    // price:{
    //     type:Number,
    //     required:[true,"price is required!"],

    // },
    // description:{
    //     type:String,
    //     required:[true,"description is required!"],

    // }
    // top100:{
    //     type:Boolean,
    //     required:[false],
    // }
},{timestamps:true})

module.exports =mongoose.model('Author',AuthorSchema);
