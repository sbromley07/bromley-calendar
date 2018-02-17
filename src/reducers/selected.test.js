import selected from './selected.reducer';

describe('Selected Reducer', () => {
  it('should handle select appointment action', () => {
    expect(selected({}, { type: 'SELECT_APPOINTMENT', id: '12345' })).toBe('12345');
  });
});
