const Joke =require("../models/joke");



//create

module.exports.create = (req,res)=>{
    const newJoke=req.body;
    Joke.create(newJoke)
    .then(joke=>res.json(joke))
    .catch(error=>res.json(error))

}


//read all
module.exports.jokesApi = (req,res)=>{

    Joke.find()
    .then(joke=>res.json(joke))
    .catch(error=>res.json(error))

}

//read one
module.exports.jokeApi = (req,res)=>{
    const idFromParams =req.params._id
    Joke.findOne({_id:idFromParams})
    .then(joke=>res.json(joke))
    .catch(error=>res.json(error))

}

//read one by random
module.exports.randomApi = (req, res) => {
    Joke.find()
    .then((allJokes) => {
        const randomId= Math.floor(Math.random() * allJokes.length);
        res.json( {joke: allJokes[randomId]} )
    })
    .catch(error=>res.json(error))
}

//update one
module.exports.update = (req,res)=>{
    const idFromParams =req.params._id
    const updateValue=req.body
    Joke.findOneAndUpdate({_id:idFromParams},updateValue,{new:true})
    .then(joke=>res.json(joke))
    .catch(error=>res.json(error))

}

//delete
module.exports.delete = (req,res)=>{
    const idFromParams =req.params._id
    Joke.deleteOne({_id:idFromParams})
    .then(joke=>res.json(joke))
    .catch(error=>res.json(error))

}
