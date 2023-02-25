
var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
    region: "us-east-2",
    endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing game history into DynamoDB. Please wait.");

var allGameHistory = JSON.parse(fs.readFileSync('./../sample_data/gamedata2.json', 'utf8'));
allGameHistory.forEach(function (data) {

    var params = {
        TableName: "GameHistory",
        Item: {
            "id": data.id,
            "gameNumber": data.gameNumber,
            "game": data.game,
            "numberOfItems": data.numberOfItems,
            "numberOfSeconds": data.numberOfSeconds,
            "gameResult": data.gameResult,
            "user": {
                "username": data.user.username,
                "email": data.user.email
            }
        }
    };

    docClient.put(params, function (err, data) {
        if (err) {
            console.error("Unable to add game", data, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded:", data);
        }
    });
});
