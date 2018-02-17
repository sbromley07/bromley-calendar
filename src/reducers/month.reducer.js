import moment from 'moment';
import { types } from '../actions/month.actions';

const month = (state = moment().format('MMMM'), action) => {
  switch (action.type) {
    case types.NEXT_MONTH:
      return moment().month(state).add('1', 'M').format('MMMM');
    case types.PREVIOUS_MONTH:
      return moment().month(state).subtract('1', 'M').format('MMMM');
    default:
      return state;
  }
};

export default month;
