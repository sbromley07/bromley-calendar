import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Day from './Day';

const Calendar = (props) => {
  const date = moment().year(props.year).month(props.month).date(1);
  const offset = date.day();

  const days = [];
  for (let i = 0; i < offset; i++) {
    days.push(-1);
  }
  for (let i = 1; i <= date.daysInMonth(); i++) {
    days.push(i);
  }
  while (days.length % 7 !== 0) {
    days.push(-1);
  }
  const rows = [];
  for (let i = 0; i < days.length; i += 7) {
    rows.push(days.slice(i, i + 7));
  }
  return (
    <div>
      <div className='row'>
        <h4 className='col'>Sunday</h4>
        <h4 className='col'>Monday</h4>
        <h4 className='col'>Tuesday</h4>
        <h4 className='col'>Wednesday</h4>
        <h4 className='col'>Thursday</h4>
        <h4 className='col'>Friday</h4>
        <h4 className='col'>Saturday</h4>
      </div>
      <div>
        {rows.map((r, i) => (
          <div className='row card-group' key={i}>
            {r.map((c, j) => (
              <Day
                key={`${j}-${c}`}
                date={c}
                selectAppointment={props.selectAppointment}
                appointment={
                  Object.keys(props.appointments).includes(c.toString())
                  ? props.appointments[c] : null
                }
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
Calendar.defaultProps = {
  appointments: {}
};
Calendar.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  appointments: PropTypes.objectOf(PropTypes.object),
  selectAppointment: PropTypes.func.isRequired
};

export default Calendar;
