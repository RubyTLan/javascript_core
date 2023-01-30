const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    title:{
        type:String,
        required:[true,"title is required!"],

    },
    price:{
        type:Number,
        required:[true,"price is required!"],

    },
    description:{
        type:String,
        required:[true,"description is required!"],

    }
},{timestamps:true})

module.exports =mongoose.model('Product',ProductSchema);
