import { combineReducers } from 'redux';
import month from './month.reducer';
import year from './year.reducer';
import appointments from './appointment.reducer';
import selected from './selected.reducer';

const rootReducer = combineReducers({
  month,
  year,
  appointments,
  selected
});

export default rootReducer;
