'use-strict';
const AWS = require('aws-sdk');


module.exports.handler = async (event) => {
    const { id } = event.queryStringParameters;

    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    const params = {
        TableName: process.env.TASKS_TABLE,
        Key: {id}
    };

    const task = await dynamoDb.get(params).promise();
    
    return {
      statusCode: 200,
      body: JSON.stringify(task)
    };
};