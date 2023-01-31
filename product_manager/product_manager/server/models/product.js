const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    title:{
        type:String,
        required:[true,"title is required!"],
        minlength:[3,"title must be at least 3 characters!"]

    },
    price:{
        type:Number,
        required:[true,"price is required!"],

    },
    description:{
        type:String,
        required:[true,"description is required!"],

    }
    // top100:{
    //     type:Boolean,
    //     required:[false],
    // }
},{timestamps:true})

module.exports =mongoose.model('Product',ProductSchema);
