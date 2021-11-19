var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-2",
    endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient()

var table = "GameHistory";

// var year = 2015;
// var title = "The Big New Movie";

// Update the item, unconditionally,

var params = {
    TableName: table,
    Key: {
        "gameId": 100
    },
    UpdateExpression: "set game=:g, numberOfItems=:ni, numberOfSeconds=:ns, gameResult=:r",
    ExpressionAttributeValues: {
        ":g": "letters",
        ":ni": 100,
        ":ns": 120,
        ":r": "l"
    },
    ReturnValues: "UPDATED_NEW"
};

console.log("Updating the item...");
docClient.update(params, function (err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    }
});
