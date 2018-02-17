import moment from 'moment';
import { types } from '../actions/month.actions';

const year = (state = moment().year(), action) => {
  const number = action.currentMonth && moment().month(action.currentMonth).format('M');
  switch (action.type) {
    case types.NEXT_MONTH:
      if (number === '12') {
        return state + 1;
      }
      return state;
    case types.PREVIOUS_MONTH:
      if (number === '1') {
        return state - 1;
      }
      return state;
    default:
      return state;
  }
};

export default year;
