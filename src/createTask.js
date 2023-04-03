'use-strict';
const AWS = require('aws-sdk');


module.exports.handler = async (event) => {

    const body = JSON.parse(event.body);
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    const params = {
        TableName: process.env.TASKS_TABLE,
        Item: {
            id: body.id,
            task: body.task,
            date: body.date,
            isValide: body.isValide,
            email: body.email
        },
    };

    await dynamoDb.put(params).promise();
    
    return {
      statusCode: 200,
      body: JSON.stringify('Task cree avec succes')
    };
};
  