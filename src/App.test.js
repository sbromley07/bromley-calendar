import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { App } from './App';

configure({ adapter: new Adapter() });

const props = {
  nextMonth: jest.fn(),
  previousMonth: jest.fn(),
  createAppointment: jest.fn(),
  selectAppointment: jest.fn(),
  updateAppointment: jest.fn(),
  deleteAppointment: jest.fn(),
  month: 'June',
  year: 2018,
  currentAppointments: {},
  appointments: {}
};

describe('App Component', () => {
  it('should render a Header and Calendar', () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.find('Calendar').exists()).toBeTruthy();
    expect(wrapper.find('Header').exists()).toBeTruthy();
    expect(wrapper.find('AppointmentForm').exists()).toBeFalsy();
  });

  it('should conditionally render an AppointmentForm', () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.find('AppointmentForm').exists()).toBeFalsy();
    wrapper.setState({ isFormVisible: true });
    expect(wrapper.find('AppointmentForm').exists()).toBeTruthy();
    wrapper.setState({ isFormVisible: false, selectedAppointment: {} });
    expect(wrapper.find('AppointmentForm').exists()).toBeTruthy();
  });
});
