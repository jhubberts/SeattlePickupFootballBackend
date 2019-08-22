import * as ResponseUtils from './utils/response-utils';
import * as DateUtils from './utils/date-utils';

const gamesHandler = async (event, context) => {
    return ResponseUtils.buildResponse(200, getOrInitializeGame());
};

const getOrInitializeGame = () => {
    const nextGameDay = DateUtils.isoDate(DateUtils.nextGameDay());

    // Soon this will call ddb
    return {
        date: nextGameDay,
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
    };
};

export default gamesHandler;