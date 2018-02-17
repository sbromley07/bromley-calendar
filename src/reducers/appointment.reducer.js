import moment from 'moment';
import { types } from '../actions/appointment.actions';

const remove = (id, obj) => (
  Object.keys(obj).reduce((acc, key) => {
    if (key !== id) {
      acc[key] = obj[key];
    }
    return acc;
  }, {})
);

const create = (action) => {
  const newAppDate = moment(action.appointment.date);
  return {
    [action.appointment.date]: {
      title: action.appointment.title,
      year: newAppDate.year(),
      month: newAppDate.format('MMMM'),
      date: newAppDate.date(),
      origin: action.appointment.date
    }
  };
};

const appointments = (state = {}, action) => {
  switch (action.type) {
    case types.CREATE_APPOINTMENT:
      return Object.assign({}, state, create(action));
    case types.UPDATE_APPOINTMENT:
      const omitted = remove(action.id, state);
      return Object.assign({}, omitted, create(action));
    case types.DELETE_APPOINTMENT:
      return remove(action.id, state);
    default:
      return state;
  }
};

export default appointments;
