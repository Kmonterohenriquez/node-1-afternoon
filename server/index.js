const express = require('express');
const PORT = 4000;
const app = express();
const getProducts = require('./getProducts');


// app.use(express.json());


// app.get('/api/products', (red, res) => {
//     console.log(res)
//     res.status(200).send(products)
// });

app.get('/api/products', getProducts)

app.listen(PORT, ()=> {
     console.log(`Server is running on ${PORT} port`)
    }
);

