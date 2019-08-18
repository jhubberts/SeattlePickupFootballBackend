import uuid from "uuid"
import AWS from "aws-sdk"

const ddb = new AWS.DynamoDB.DocumentClient();

export function main(event, context, callback) {
    const data = JSON.parse(event.body);
    const params = {
        TableName: "SeattlePickupFootball.Test",
        Item: {
            id: uuid.v1(),
            content: data.content
        }
    };

    ddb.put(params, (error, data) => {
        callback(null, {
            statusCode: 200,
            body: JSON.stringify(params.Item)
        });
    });
}
