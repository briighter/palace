var AWS = require("aws-sdk");
var fs = require('fs');

AWS.config.update({
    region: "us-east-2",
    endpoint: "http://localhost:8000"
});

var db = new AWS.DynamoDB.DocumentClient();

module.exports = db;