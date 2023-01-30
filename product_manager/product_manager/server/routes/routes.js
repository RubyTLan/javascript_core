const ProductController =require("../controllers/controller");

module.exports =(app)=>{
    app.get("/api/products",ProductController.allApi);
    app.get("/api/products/:_id",ProductController.oneApi);
    app.post("/api/products/create",ProductController.create);
    app.put("/api/products/update/:_id",ProductController.update);
    app.delete("/api/products/delete/:_id",ProductController.delete);

}
