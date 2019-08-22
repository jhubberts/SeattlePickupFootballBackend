import * as ResponseUtils from './utils/response-utils';
import * as UserUtils from './utils/user-utils';
import * as DateUtils from './utils/date-utils';
import * as DAL from './dal';
const rsvpHandler = async (event, context) => {
    try {
        return ResponseUtils.buildResponse(200, await rsvp(event));
    } catch (e) {
        return ResponseUtils.buildResponse(500, "Something went horribly wrong with DDB...\n" + e);
    }
};

const rsvp = async (event) => {
    const userData = await UserUtils.userDataForEvent(event);
    let game = await DAL.getOrInitializeGame(DateUtils.isoDate(DateUtils.nextGameDay()));

    const attendeeIndex = game.attendees.map(attendee => attendee.userPoolUserId).indexOf(userData.userPoolUserId);

    if (attendeeIndex === -1) {
        game.attendees.push({
            userPoolUserId: userData.userPoolUserId,
            identityId: userData.identityId,
            name: userData.name,
        });
    }

    await DAL.putGame(game);
};

export default rsvpHandler;