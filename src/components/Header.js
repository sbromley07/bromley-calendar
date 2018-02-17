import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Header = props => (
  <div>
    <h1 className='text-center'>
      <button
        id='previous'
        className='btn btn-light'
        onClick={() => props.previous(props.month)}
      >
          &lt;
      </button>
      <div className='fixed-display-width'>{props.month}</div>
      <button
        id='next'
        className='btn btn-light'
        onClick={() => props.next(props.month)}
      >
        &gt;
      </button>
      {props.year}
      <button className={classnames({ 'd-none': props.hideCreate }, 'btn btn-success float-right header-btn')} onClick={props.create}>+ Create Appointment</button>
    </h1>
  </div>
);
Header.defaultProps = {
  hideCreate: false
};
Header.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  hideCreate: PropTypes.bool
};

export default Header;
