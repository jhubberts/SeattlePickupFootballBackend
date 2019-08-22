import * as ResponseUtils from './utils/response-utils';

const rsvpHandler = async (event, context) => {
    try {
        return ResponseUtils.buildResponse(200, await rsvp(event));
    } catch (e) {
        return ResponseUtils.buildResponse(500, "Something went horribly wrong with DDB...\n" + e);
    }
};

const rsvp = async (event) => {
    console.log(event);
};

export default rsvpHandler;