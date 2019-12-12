const express = require('express');
const router = express.Router();

//GETing from a server
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling request GET for /products'
    });
});

//POSTing into the server
router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: 'Handling request POST for /products',
        createdProduct: product
    });
});

//Defining non-static ID
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: 'Special id found!',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an id',
            id: id
        });
    }
});

module.exports = router;