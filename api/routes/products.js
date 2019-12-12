const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling request GET for /preoducs'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling request POST for /preoducs'
    });
});

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