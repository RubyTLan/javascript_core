const Author =require("../models/author");



//create

module.exports.create = (req,res)=>{
    const newAuthor=req.body;
    Author.create(newAuthor)
    .then(author=>res.json(author))
    .catch(err=>res.status(400).json(err))

}


//read all
module.exports.allApi = (req,res)=>{

    Author.find()
    .then(author=>res.json(author))
    .catch(error=>res.json(error))

}

//read one
// module.exports.oneApi = (req,res)=>{
//     const idFromParams =req.params._id
//     Product.findOne({_id:idFromParams})
//     .then(product=>res.json(product))
//     .catch(error=>res.json(error))

// }


//update one
module.exports.update = (req,res)=>{
    const idFromParams =req.params._id
    const updateValue=req.body
    Author.findOneAndUpdate({_id:idFromParams},updateValue,{new:true,runValidators:true})
    .then(author=>res.json(author))
    .catch(err=>res.status(400).json(err))

}

//delete
module.exports.delete = (req,res)=>{
    const idFromParams =req.params._id
    Author.deleteOne({_id:idFromParams})
    .then(author=>res.json(author))
    .catch(error=>res.json(error))

}
