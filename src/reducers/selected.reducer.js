import { types } from '../actions/appointment.actions';

const selected = (state = null, action) => {
  switch (action.type) {
    case types.SELECT_APPOINTMENT:
      return action.id;
    default:
      return state;
  }
};

export default selected;
