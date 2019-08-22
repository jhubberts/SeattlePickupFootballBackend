import AWS from 'aws-sdk';

const GAMES_TABLE = "Games";

async function call(action, params) {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    return dynamoDb[action](params).promise();
}

const putGame = async (game) => {
    const params = {
        TableName: GAMES_TABLE,
        Item: game
    };
    return await call("put", params);
};

const getGame = async (date) => {
    const params = {
        TableName: GAMES_TABLE,
        Key: {
            gameDay: date
        }
    };

    return await call("get", params);
};

const getOrInitializeGame = async (date) => {
    let game = await getGame(date);
    if (game.Item) {
        return game.Item;
    }

    const newGame = {
        gameDay: date,
        attendees: []
    };

    await putGame(newGame);
    return newGame;
};

export {getOrInitializeGame, getGame, putGame};