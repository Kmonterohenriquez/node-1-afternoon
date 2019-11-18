const PORT = 4000;
const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

const app = express();

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);


app.listen(PORT, ()=> {
     console.log(`Server is running on ${PORT} port`)
    }
);

