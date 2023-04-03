'use-strict';
const AWS = require('aws-sdk');


module.exports.handler = async (event) => {

    const body = JSON.parse(event.body);

    const { id } = event.queryStringParameters;
    const {task, isValid, email} = body;
    
    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    const params = {
        TableName: process.env.TASKS_TABLE,
        Key: {id},
        UpdateExpression: 'set task = :newTask, #d = :theDate, isValid = :isValid, email = :email',
        ExpressionAttributeValues: { 
            ':newTask': task, 
            ':theDate': body.date, 
            ':isValid': isValid, 
            ':email': email
        },
        ExpressionAttributeNames:{
            '#d': 'date'
        }
    };

    await dynamoDb.update(params).promise();
    
    return {
      statusCode: 200,
      body: JSON.stringify('Tache modifiee avec succes')
    };
};
  