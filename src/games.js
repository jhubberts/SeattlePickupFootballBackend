import * as ResponseUtils from './utils/response-utils';
import * as DateUtils from './utils/date-utils';
import * as DAL from './dal';

const gamesHandler = async (event, context) => {
    try {
        return ResponseUtils.buildResponse(200, await getOrInitializeGame());
    } catch (e) {
        return ResponseUtils.buildResponse(500, "Something went horribly wrong with DDB...\n" + e);
    }
};

const getOrInitializeGame = async () => {
    const nextGameDay = DateUtils.isoDate(DateUtils.nextGameDay());
    const game = await DAL.getOrInitializeGame(nextGameDay);

    console.log(game);
    const hasNumbers = game.attendees.length >= 6;
    const hasBag = game.attendees.some(x => x.hasBag === true);

    // Soon this will call ddb
    return {
        date: game.gameDay,
        hasNumbers: hasNumbers,
        hasBag: hasBag,
        attendees: game.attendees
    };
};

export default gamesHandler;