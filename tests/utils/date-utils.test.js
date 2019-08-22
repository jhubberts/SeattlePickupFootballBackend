import * as DateUtils from '../../src/utils/date-utils';
import moment from 'moment';

test('it gives the next Saturday if you give a regular weekday', () => {
    // Wednesday 2019-08-21, when I wrote this test
    const today = moment('2019-08-21');
    const next = DateUtils.nextGameDayRelative(today);
    expect(DateUtils.isoDate(next)).toEqual('2019-08-24');
});

test('it gives today if today is a Saturday', () => {
    // Saturday 2019-08-24, the nearest game day after when I wrote this test
    const today = moment('2019-08-24');
    const next = DateUtils.nextGameDayRelative(today);
    expect(DateUtils.isoDate(next)).toEqual('2019-08-24');
});