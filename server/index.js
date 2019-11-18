const PORT = 4000;
const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

const app = express();



// app.use(express.json());


// app.get('/api/products/:id', (red, res) => {
//     console.log(res)
//     res.status(200).send(products)
// });

app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);


app.listen(PORT, ()=> {
     console.log(`Server is running on ${PORT} port`)
    }
);

