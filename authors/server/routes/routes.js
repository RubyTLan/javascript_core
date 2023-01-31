const AuthorController =require("../controllers/controller");

module.exports =(app)=>{
    app.get("/api/authors",AuthorController.allApi);
    // app.get("/api/products/:_id",ProductController.oneApi);
    app.post("/api/authors/create",AuthorController.create);
    app.put("/api/authors/update/:_id",AuthorController.update);
    app.delete("/api/authors/delete/:_id",AuthorController.delete);

}
