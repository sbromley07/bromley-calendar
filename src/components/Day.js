import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Day.css';

const Day = (props) => {
  const handleClick = () => {
    if (props.appointment) {
      props.selectAppointment(props.appointment.origin);
    }
  };
  if (props.date < 0) {
    return <div className='col' />;
  }
  return (
    <div className={classnames({ 'bg-info': props.appointment, 'text-white': props.appointment }, 'card col')} onClick={handleClick}>
      <div className='card-body date'>
        <h5 className='card-title'>{props.date}</h5>
        {props.appointment && <p className='card-text'>{props.appointment.title}</p>}
      </div>
    </div>
  );
};
Day.defaultProps = {
  appointment: null
};
Day.propTypes = {
  date: PropTypes.number.isRequired,
  appointment: PropTypes.shape({
    title: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired
  }),
  selectAppointment: PropTypes.func.isRequired
};

export default Day;
