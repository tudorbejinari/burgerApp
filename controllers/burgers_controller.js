var express = require('express');
var router = express.Router();
var burger = require('../models/burger');


// get all 
router.get('/', function(req, res){
    burger.all(function(data){
        var burgersObj = {
            burgers: data
        }
        res.render('index', burgersObj);
    });
});

// add one 
router.post('/api/burgers', function(req, res){
    burger.add(
        req.body.burger_name, 
        false,
        function(data){
            res.json({id: data.insertId});
        }
    );
});

// update 
router.put('/api/burgers/:id', function(req, res){
    burger.update(
        req.body.devoured,
        req.params.id, 
        function(data){
            if (data.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;