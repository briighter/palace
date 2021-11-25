var GameHistory = require('./gameHistory');

const table = 'GameHistory';

exports.index = function (req, res) {
    async.parallel({
    }, function (err, results) {
        res.json({ status: 'IT WORKED'});
    });
};

// Display list of all Books.
exports.gameHistory_detail = async function (req, res, next) {
    var params = {
        TableName: table,
        Key:{
            "gameId": req.params.id
        }
    };

    docClient.get(params).promise().then( response => {
        res.json(response.item);
    }, error => {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    });
    
    // docClient.get(params, function(err, data) {
    //     if (err) {
    //         console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    //     } else {
    //         console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    //     }
    // });
};