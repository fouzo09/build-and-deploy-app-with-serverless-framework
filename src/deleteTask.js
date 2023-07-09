'use-strict';
const AWS = require('aws-sdk');


module.exports.handler = async (event) => {
    const { id } = event.pathParameters;

    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    const params = {
        TableName: process.env.TASKS_TABLE,
        Key: {id}
    };

    await dynamoDb.delete(params).promise();
    
    return {
      statusCode: 200,
      body: JSON.stringify('Task supprime avec succes')
    };
};
  