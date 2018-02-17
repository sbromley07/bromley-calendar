import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AppointmentForm.css';

class AppointmentForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.state = {
      title: props.appointment.title,
      date: props.appointment.origin
    };
  }

  onSubmit(e) {
    if (e) {
      e.preventDefault();
    }
    if (this.props.appointments
      && Object.keys(this.props.appointments).includes(this.state.date) && !this.props.isEdit) {
      this.setState({ inError: true });
      return;
    }
    if (this.props.isEdit) {
      this.props.update(
        this.props.appointment.origin,
        { title: this.state.title, date: this.state.date }
      );
    } else {
      this.props.create({ title: this.state.title, date: this.state.date });
    }
    this.props.close();
  }

  onDelete(e) {
    if (e) {
      e.preventDefault();
    }
    this.props.delete(this.props.appointment.origin);
    this.props.close();
  }

  handleChange(key, e) {
    this.setState({ [key]: e.target.value });
  }

  render() {
    return (
      <div className='inline-form'>
        <div className='container'>
          <div className='row justify-content-end'>
            <button className='close' onClick={this.props.close}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className='row'>
            <h3>{this.props.isEdit ? 'Update Appointment' : 'Create Appointment'}</h3>
          </div>
          {this.state.inError &&
            <div className='alert alert-danger'>
              An appointment already exists for {this.state.date}
            </div>
          }
          <form className='clearfix'>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input type='text' className='form-control' name='title' value={this.state.title} onChange={e => this.handleChange('title', e)} />
              <label htmlFor='date'>Date</label>
              <input type='date' className='form-control' name='date' value={this.state.date} onChange={e => this.handleChange('date', e)} />
            </div>
            <button className='btn btn-success' onClick={this.onSubmit} >{this.props.isEdit ? 'Update' : 'Create'}</button>
            {this.props.isEdit &&
              <button
                className='btn btn-danger btn-left-margin'
                onClick={this.onDelete}
              >
                Delete
              </button>
            }
          </form>
        </div>
      </div>
    );
  }
}
AppointmentForm.defaultProps = {
  appointment: {
    title: '',
    origin: ''
  },
  isEdit: false
};
AppointmentForm.propTypes = {
  close: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  appointments: PropTypes.objectOf(PropTypes.object).isRequired,
  appointment: PropTypes.shape({
    title: PropTypes.string,
    origin: PropTypes.string
  }),
  isEdit: PropTypes.bool
};

export default AppointmentForm;
