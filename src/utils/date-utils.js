import moment from 'moment';

const SATURDAY = 6;

/**
 * Returns the next Saturday relative to today. See nextGameDayRelative.
 * @returns {undefined}
 */
function nextGameDay() {
    return nextGameDayRelative(moment());
}

/**
 * Returns the next Saturday relative to a specified day. If the specified day is a saturday
 */
function nextGameDayRelative(date) {
    return date.isoWeekday(SATURDAY);
};

/**
 * Formats a moment.js moment into an ISO8601 YYYY-MM-DD date
 */
function isoDate(date) {
    return date.format("YYYY-MM-DD");
}

export {isoDate, nextGameDay, nextGameDayRelative};