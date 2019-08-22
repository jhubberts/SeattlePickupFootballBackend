import * as ResponseUtils from './utils/response-utils';
import * as UserUtils from './utils/user-utils';

const rsvpHandler = async (event, context) => {
    try {
        return ResponseUtils.buildResponse(200, await rsvp(event));
    } catch (e) {
        return ResponseUtils.buildResponse(500, "Something went horribly wrong with DDB...\n" + e);
    }
};

const rsvp = async (event) => {
    const userData = await UserUtils.userDataForEvent(event);
    console.log(userData);
};

export default rsvpHandler;