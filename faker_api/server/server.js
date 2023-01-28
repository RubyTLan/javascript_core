const express = require("express");
const app=express();
const port=8000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName:faker.name.lastName(),
        firstName:faker.name.firstName(),
        _id:faker.database.mongodbObjectId()
    };
    return newFake;
};

const newUser = createUser();

const createCompany = () => {
    const newFake = {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: faker.helpers.fake('{{address.street}} {{address.city}} {{address.state}} {{address.zipCode}} {{address.country}}')

    };
    return newFake;
};

const newCompany= createCompany();

app.get("/api/users/new", (req, res) => {
    res.json( newUser );
});

app.get("/api/companies/new", (req, res) => {
    res.json( newCompany);
});

app.get("/api/user/company", (req, res) => {
    res.json( [newUser, newCompany]);
});


app.listen(port,()=>console.log("welcome to port 8000!"))
