const Product =require("../models/product");



//create

module.exports.create = (req,res)=>{
    const newProduct=req.body;
    Product.create(newProduct)
    .then(product=>res.json(product))
    .catch(error=>res.json(error))

}


//read all
module.exports.allApi = (req,res)=>{

    Product.find()
    .then(product=>res.json(product))
    .catch(error=>res.json(error))

}

//read one
module.exports.oneApi = (req,res)=>{
    const idFromParams =req.params._id
    Product.findOne({_id:idFromParams})
    .then(product=>res.json(product))
    .catch(error=>res.json(error))

}


//update one
module.exports.update = (req,res)=>{
    const idFromParams =req.params._id
    const updateValue=req.body
    Product.findOneAndUpdate({_id:idFromParams},updateValue,{new:true})
    .then(product=>res.json(product))
    .catch(error=>res.json(error))

}

//delete
module.exports.delete = (req,res)=>{
    const idFromParams =req.params._id
    Product.deleteOne({_id:idFromParams})
    .then(product=>res.json(product))
    .catch(error=>res.json(error))

}
