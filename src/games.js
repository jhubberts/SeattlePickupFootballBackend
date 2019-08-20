const gamesHandler = async (event, context) => {
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify({
                date: "2019-08-15",
                hasNumbers: true,
                hasBag: true,
                attendees: [{
                    name: "Person 1",
                    hasBag: true
                }, {
                    name: "Person 2",
                    hasBag: true
                }, {
                    name: "Person 3",
                    hasBag: false
                }, {
                    name: "Person 4",
                    hasBag: false
                }, {
                    name: "Person 5",
                    hasBag: false
                }, {
                    name: "Person 6",
                    hasBag: false
                }, {
                    name: "Person 7",
                    hasBag: false
                }]
        })
    };
};

export default gamesHandler;