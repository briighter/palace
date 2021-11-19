
var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
    region: "us-east-2",
    endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing game history into DynamoDB. Please wait.");

var allGameHistory = JSON.parse(fs.readFileSync('palace-api/db/sample_data/gamedata.json', 'utf8'));
allGameHistory.forEach(function (game) {
    var params = {
        TableName: "GameHistory",
        Item: {
            "gameId": game.gameId,
            "game": game.game,
            "numberOfItems": game.numberOfItems,
            "numberOfSeconds": game.numberOfSeconds,
            "result": game.result
        }
    };

    docClient.put(params, function (err, data) {
        if (err) {
            console.error("Unable to add game", game.game, ". Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded:", game.game);
        }
    });
});
