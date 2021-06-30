const products = require('../src/products.json');
const categories = require('../src/categories.json');

// Require packages and set the port
const express = require('express');
const app = express();
const port = 3001;

// Use Node.js body parsing middleware
app.use((request, response, next) => {
    console.log(request.headers);
    next();
});

app.use((request, response, next) => {
    request.chance = Math.random();
    next();
});

app.get('/categories', (request, response) => {
    response.set("Content-type", "application/json");
    response.set("Access-Control-Allow-Origin", "*");
    response.json(categories);
});

app.get('/products', (request, response) => {
    response.set("Content-type", "application/json");
    response.set("Access-Control-Allow-Origin", "*");
    response.json(products);
});

// Start the server
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`server is listening on ${port}`);
})