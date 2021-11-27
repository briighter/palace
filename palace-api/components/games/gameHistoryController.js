var async = require('async');
var AWS = require("aws-sdk");

var docClient = new AWS.DynamoDB.DocumentClient();
const table = 'GameHistory';

exports.index = async function (req, res, next) {
    res.render('index', { title: 'Express' });
};

// Display list of all Books.
exports.gameHistory_list = async function (req, res, next) {
    const params = {
        TableName: table
    };

    await docClient.scan(params, function onScan(err, data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            // print all the games
            console.log("Scan succeeded.");
            data.Items.forEach(function (game) {
                console.log(game);
                res.json(game);
            });

            // continue scanning if we have more games, because
            // scan can retrieve a maximum of 1MB of data
            if (typeof data.LastEvaluatedKey != "undefined") {
                console.log("Scanning for more...");
                params.ExclusiveStartKey = data.LastEvaluatedKey;
                docClient.scan(params, onScan);
            }
        }
    });
};

// Display list of all Books.
exports.gameHistory_detail = async function (req, res, next) {
    const params = {
        TableName: table,
        Key: {
            'gameId': parseInt(req.params.id)
        }
    };

    /** Aync  */
    // docClient.get(params).promise().then(response => {
    //     res.json(response.Item);
    // }, error => {
    //     console.error("Unable to read item. Error JSON:", JSON.stringify(error, null, 2));
    // });

    await docClient.get(params, function (err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            // console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            res.json(data.Item);
        }
    });
};