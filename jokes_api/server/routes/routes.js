const JokeController =require("../controllers/controller");

module.exports =(app)=>{
    app.get("/api/jokes",JokeController.jokesApi);
    app.get("/api/jokes/:_id",JokeController.jokeApi);
    app.get("/api/jokes/random/one",JokeController.randomApi);
    app.post("/api/jokes/new",JokeController.create);
    app.put("/api/jokes/update/:_id",JokeController.update);
    app.delete("/api/jokes/delete/:_id",JokeController.delete);

}
