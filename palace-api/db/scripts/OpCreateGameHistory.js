
var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-2",
  endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "GameHistory";

// var year = 2015;
// var title = "The Big New Movie";

var params = {
    TableName:table,
    Item:{
            "gameId": 100,
            "game": "letters",
            "numberOfItems": 9,
            "numberOfSeconds": 6,
            "gameResult": "l"
    }
};

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        // console.log("Added item:", JSON.stringify(data, null, 2));
        console.log("Added item:", JSON.stringify(params.Item, null, 2));
    }
});
