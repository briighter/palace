
var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-east-2",
    endpoint: "http://localhost:8000"
});

// AWS.config.update({
//     region: process.env.AWS_REGION,
//     endpoint: process.env.AWS_ENDPOINT
// });

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName: "GameHistory",
    KeySchema: [
        { AttributeName: "id", KeyType: "HASH" },  //Partition key
        { AttributeName: "gameNumber", KeyType: "RANGE" }  //Partition key
    ],
    AttributeDefinitions: [
        { AttributeName: "id", AttributeType: "S" },
        { AttributeName: "gameNumber", AttributeType: "N" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    }
};

dynamodb.createTable(params, function (err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});
