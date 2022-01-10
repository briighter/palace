var async = require('async');
var AWS = require("aws-sdk");
const { v4: uuidv4 } = require('uuid');

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
    console.log("Querying for all games for a given user.");

    const params = {
        TableName: table,
        FilterExpression: "#U.email = :useremail",
        ExpressionAttributeNames: {
            "#U": "user"
        },
        ExpressionAttributeValues: {
            ":useremail": req.query.email,
        }
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
//https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_PutItem.html#API_PutItem_RequestSyntax
exports.gameHistory_create_post = async function (req, res, next) {
    const key = uuidv4();
    let gnum;
    // GET NUM ITEMS IN TABLE
    const params0 = {
        TableName: table,
        FilterExpression: "#U.email = :useremail",
        ExpressionAttributeNames: {
            "#U": "user"
        },
        ExpressionAttributeValues: {
            ":useremail": req.body.user.email,
        }
    };

    await docClient.scan(params, function onScan(err, data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            // print all the movies
            console.log("Scan succeeded.");
            console.log(data.Count);
            this.gnum = data.Count
        }


    });

    // ADD ITEM
    const params1 = {
        TableName: table,
        Item: {
            "id": key,
            "gameNumber": 0,
            "game": req.body.game,
            "numberOfItems": parseInt(req.body.numberOfItems),
            "numberOfSeconds": parseInt(req.body.numberOfSeconds),
            "gameResult": req.body.gameResult,
            "user": {
                "username": req.body.user.username,
                "email": req.body.user.email
            }
        }
    }
    console.log("Adding a new item...");
    await docClient.put(params1, function (err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(params.Item, null, 2));
        }
    });
    // UPDATE GAME NUMBER
    const params2 = {
        TableName: table,
        Key: {
            "id": key
        },
        UpdateExpression: `set gameNumber = gameNumber + :num`,
        ExpressionAttributeValues: {
            ":num": 1
        }
    };

    console.log("Updating item values...");
    await docClient.update(params2, function (err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Updated item:", JSON.stringify(params.Item, null, 2));
        }
    });
};