import month from './month.reducer';
import { types } from '../actions/month.actions';

describe('Month Reducer', () => {
  it('should handle the next month action', () => {
    expect(month('March', { type: types.NEXT_MONTH })).toBe('April');
    expect(month('December', { type: types.NEXT_MONTH })).toBe('January');
  });

  it('should hanlde the previous month action', () => {
    expect(month('June', { type: types.PREVIOUS_MONTH })).toBe('May');
    expect(month('January', { type: types.PREVIOUS_MONTH })).toBe('December');
  });
});
