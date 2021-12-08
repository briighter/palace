var async = require('async');
var AWS = require("aws-sdk");

var docClient = new AWS.DynamoDB.DocumentClient();
const table = 'GameHistory';

exports.index = async function (req, res, next) {
    res.render('index', { title: 'Express' });
};

// Display list of all Game History.
exports.gameHistory_list = async function (req, res, next) {
    const params = {
        TableName: table
    };

    await docClient.scan(params, function onScan(err, data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            var result = []
            // print all the games
            console.log("Scan succeeded.");
            data.Items.forEach(function (gameData) {
                result.push(gameData);
            });

            // continue scanning if we have more games, because
            // scan can retrieve a maximum of 1MB of data
            if (typeof data.LastEvaluatedKey != "undefined") {
                console.log("Scanning for more...");
                params.ExclusiveStartKey = data.LastEvaluatedKey;
                docClient.scan(params, onScan);
            }

            res.json(result);
        }
    });
};

// Display list of all Game History for a particular user.
exports.gameHistory_user_list = async function (req, res, next) {
    const params = {
        TableName: table
    };

    await docClient.scan(params, function onScan(err, data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            var result = []
            // print all the games
            console.log("Scan succeeded.");
            data.Items.forEach(function (gameData) {
                result.push(gameData);
            });

            // continue scanning if we have more games, because
            // scan can retrieve a maximum of 1MB of data
            if (typeof data.LastEvaluatedKey != "undefined") {
                console.log("Scanning for more...");
                params.ExclusiveStartKey = data.LastEvaluatedKey;
                docClient.scan(params, onScan);
            }

            res.json(result);
        }
    });
};

// Display details of one Game History.
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

// Handle Game History create on POST.
exports.gameHistory_create_post = async function (req, res, next) {
    const params = {
        TableName: table,
        Item: {
            "id": req.body.id,
            "gameNumber": req.body.gameNumber,
            "game": req.body.game,
            "numberOfItems": parseInt(req.body.numberOfItems),
            "numberOfSeconds": parseInt(req.body.numberOfSeconds),
            "gameResult": req.body.gameResult,
            "user": {
                "username": req.body.user.username,
                "email": req.body.user.email
            }
        }
    };

    console.log("Adding a new item...");
    await docClient.put(params, function (err, data) {
        if (err) { 
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(params.Item, null, 2));
        }
    });
};