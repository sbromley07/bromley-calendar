import appointment from './appointment.reducer';
import { types } from '../actions/appointment.actions';

const testState = {
  '2018-02-17': {
    title: 'test',
    year: 2018,
    month: 'February',
    date: 17,
    origin: '2018-02-17'
  }
};

describe('Appointment Reducer', () => {
  it('should handle the create appointment action', () => {
    expect(appointment({}, {
      type: types.CREATE_APPOINTMENT,
      appointment: {
        date: '2018-02-17',
        title: 'test'
      }
    })).toEqual(testState);
  });

  it('should handle the update appointment action', () => {
    expect(appointment(testState, {
      type: types.UPDATE_APPOINTMENT,
      id: '2018-02-17',
      appointment: {
        date: '2018-02-18',
        title: 'test_update'
      }
    })).toEqual({
      '2018-02-18': {
        title: 'test_update',
        year: 2018,
        month: 'February',
        date: 18,
        origin: '2018-02-18'
      }
    });
  });

  it('should handle the delete appointment action', () => {
    expect(appointment(testState, { type: types.DELETE_APPOINTMENT, id: '2018-02-17' }))
      .toEqual({});
  });
});
