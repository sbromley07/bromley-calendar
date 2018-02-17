import year from './year.reducer';
import { types } from '../actions/month.actions';

describe('Year Reducer', () => {
  it('should handle the next month action', () => {
    expect(year(2018, { type: types.NEXT_MONTH, currentMonth: 'March' })).toBe(2018);
    expect(year(2012, { type: types.NEXT_MONTH, currentMonth: 'December' })).toBe(2013);
    expect(year(1987, { type: types.NEXT_MONTH, currentMonth: 'gibberish' })).toBe(1987);
  });

  it('should handle the previous month action', () => {
    expect(year(1999, { type: types.PREVIOUS_MONTH, currentMonth: 'June', })).toBe(1999);
    expect(year(2145, { type: types.PREVIOUS_MONTH, currentMonth: 'January' })).toBe(2144);
    expect(year(1776, { type: types.PREVIOUS_MONTH, currentMonth: 'invalid' })).toBe(1776);
  });
});
