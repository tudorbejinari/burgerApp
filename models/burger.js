var orm = require('../config/orm');

var burger = {
    all: function(cb){
        orm.selectAll('burgers', res => {
            cb(res);
        });
    },
    add: function(val1, val2, cb){
        orm.insertOne('burger_name', 'devoured', 'burgers', val1, val2, function(res){
            cb(res);
        });
    },
    update: function(val1, val2, cb){
        orm.updateOne('devoured', 'id', val1, val2, 'burgers', res => {
            cb(res);
        });
    }
}

module.exports = burger;