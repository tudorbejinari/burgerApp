var connection = require('./connection');

var orm = {
    // Display all burgers on the page
    selectAll: function(table, cb){
        connection.query(
            'SELECT * FROM ??',
            [table],
            function(error, result){
                if (error) throw error;
                cb(result);
            }
        );
    },
    // Add a burger
    insertOne: function(col1, col2, table, val1, val2, cb){
        connection.query(
            'INSERT INTO ?? (??, ??) VALUES (?, ?)',
            [table, col1, col2, val1, val2],
            function(error, result){
                if (error) throw error;
                cb(result);
            }
        );
    },
    // Update burger
    updateOne: function(col1, col2, val1, val2, table, cb){
        connection.query(
            'UPDATE ?? SET ?? = ? WHERE ?? = ?',
            [table, col1, val1, col2, val2],
            function(error, result){
                if (error) throw error;
                cb(result);
            }
        )
    }
}

module.exports = orm;