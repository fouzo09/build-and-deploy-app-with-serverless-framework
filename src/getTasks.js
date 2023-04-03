'use-strict';
const AWS = require('aws-sdk');


module.exports.handler = async (event) => {

    const params = {
        TableName: process.env.TASKS_TABLE,
    };
    
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const result = await dynamodb.scan(params).promise();
    
    if (result.Count === 0) {
        return {
            statusCode: 404,
            body: JSON.stringify('Aucune donnee trouvee')
        };
    }
    
    return {
        statusCode: 200,
        body: JSON.stringify({
          total: result.Count,
          items: await result.Items.map((item) => {
            return {
              id: item.id,
              email: item.email,
              date: item.date,
              isValid: item.isValid,
              task: item.task,
            };
          }),
        }),
    };
};
  