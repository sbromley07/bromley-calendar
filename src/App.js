import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import { nextMonth, previousMonth } from './actions/month.actions';
import { createAppointment, selectAppointment, updateAppointment, deleteAppointment } from './actions/appointment.actions';
import Header from './components/Header';
import Calendar from './components/Calendar';
import AppointmentForm from './components/AppointmentForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.formVisible = this.formVisible.bind(this);
    this.formNotVisible = this.formNotVisible.bind(this);
    this.state = {
      isFormVisible: false,
      selectedAppointment: props.selectedAppointment
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedAppointment: nextProps.selectedAppointment });
  }

  formVisible() {
    this.setState({ isFormVisible: true });
  }

  formNotVisible() {
    this.setState({ isFormVisible: false });
    this.props.selectAppointment(null);
  }

  render() {
    return (
      <div className='container'>
        {(this.state.selectedAppointment || this.state.isFormVisible) &&
          <AppointmentForm
            close={this.formNotVisible}
            create={this.props.createAppointment}
            update={this.props.updateAppointment}
            delete={this.props.deleteAppointment}
            appointments={this.props.appointments}
            appointment={this.props.appointments[this.state.selectedAppointment]}
            isEdit={!!this.state.selectedAppointment}
          />
        }
        <Header
          month={this.props.month}
          year={this.props.year}
          next={this.props.nextMonth}
          previous={this.props.previousMonth}
          create={this.formVisible}
          hideCreate={this.state.isFormVisible || !!this.state.selectedAppointment}
        />
        <Calendar
          month={this.props.month}
          year={this.props.year}
          appointments={this.props.currentAppointments}
          selectAppointment={this.props.selectAppointment}
        />
      </div>
    );
  }
}
App.defaultProps = {
  selectedAppointment: null
};
App.propTypes = {
  nextMonth: PropTypes.func.isRequired,
  previousMonth: PropTypes.func.isRequired,
  createAppointment: PropTypes.func.isRequired,
  selectAppointment: PropTypes.func.isRequired,
  updateAppointment: PropTypes.func.isRequired,
  deleteAppointment: PropTypes.func.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  selectedAppointment: PropTypes.string,
  currentAppointments: PropTypes.objectOf(PropTypes.object).isRequired,
  appointments: PropTypes.objectOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  month: state.month,
  year: state.year,
  currentAppointments: Object.values(state.appointments)
    .filter(e => (e.year === state.year && e.month === state.month))
    .reduce((acc, curr) => { acc[curr.date] = curr; return acc; }, {}),
  appointments: state.appointments,
  selectedAppointment: state.selected
});

const mapDispatchToProps = dispatch => ({
  nextMonth: month => dispatch(nextMonth(month)),
  previousMonth: month => dispatch(previousMonth(month)),
  createAppointment: appointment => dispatch(createAppointment(appointment)),
  updateAppointment: (id, appointment) => dispatch(updateAppointment(id, appointment)),
  selectAppointment: id => dispatch(selectAppointment(id)),
  deleteAppointment: id => dispatch(deleteAppointment(id))
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export { AppContainer as default, App };

