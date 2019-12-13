const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Product = require('../models/product');

//GETing from a server
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling request GET for /products'
    });
});

//POSTing into the server
router.post('/', (req, res, next) => {  
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });

    product.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Handling request POST for /products',
            createdProduct: result
        });
    })
    .catch(err => console.log(err));

    
});

//Defining non-static ID
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
    
});

module.exports = router;