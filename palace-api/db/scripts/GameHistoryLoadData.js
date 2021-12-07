
var AWS = require("aws-sdk");
const { randomUUID } = require("crypto");
var fs = require('fs');

AWS.config.update({
    region: "us-east-2",
    endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing game history into DynamoDB. Please wait.");

var allGameHistory = JSON.parse(fs.readFileSync('../sample_data/gamedata.json', 'utf8'));
allGameHistory.forEach(function (data) {
    let uuid = self.crypto.randomUUID();

    var params = {
        TableName: "GameHistory",
        Item: {
            "gameId": data.gameId,
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
            console.error("Unable to add game", game.game, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded:", game);
        }
    });
});
