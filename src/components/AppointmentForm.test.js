import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import AppointmentForm from './AppointmentForm';

configure({ adapter: new Adapter() });

const props = {
  appointments: {},
  close: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  delete: jest.fn()
};

const appointment = {
  title: 'test',
  origin: '2018-02-17'
};

const appointments = {
  '2018-02-17': {}
};

describe('AppointmentForm Component', () => {
  it('should render a create form', () => {
    const wrapper = shallow(<AppointmentForm {...props} />);
    expect(wrapper.find('h3').text()).toBe('Create Appointment');
    expect(wrapper.find('button.btn-success').text()).toBe('Create');
  });

  it('should render an edit form', () => {
    const wrapper = shallow(<AppointmentForm {...props} isEdit />);
    expect(wrapper.find('h3').text()).toBe('Update Appointment');
    expect(wrapper.find('button.btn-success').text()).toBe('Update');
    expect(wrapper.find('button.btn-danger').text()).toBe('Delete');
  });

  it('should call close', () => {
    const wrapper = shallow(<AppointmentForm {...props} />);
    wrapper.find('button.close').simulate('click');
    expect(props.close).toHaveBeenCalledTimes(1);
  });

  it('should call create', () => {
    const wrapper = shallow(<AppointmentForm {...props} />);
    wrapper.find('button.btn-success').simulate('click');
    expect(props.create).toHaveBeenCalledTimes(1);
  });

  it('should call delete', () => {
    const wrapper = shallow(<AppointmentForm {...props} isEdit appointment={appointment} />);
    wrapper.find('button.btn-danger').simulate('click');
    expect(props.delete).toHaveBeenCalledTimes(1);
    expect(props.delete).toHaveBeenCalledWith(appointment.origin);
  });

  it('should call update', () => {
    const wrapper = shallow(<AppointmentForm {...props} isEdit appointment={appointment} />);
    wrapper.setState({ title: 'update', date: '2018-02-18' });
    wrapper.find('button.btn-success').simulate('click');
    expect(props.update).toHaveBeenCalledTimes(1);
    expect(props.update).toHaveBeenCalledWith(appointment.origin, { title: 'update', date: '2018-02-18' });
  });

  it('should warn if creating duplicate', () => {
    const wrapper = shallow(<AppointmentForm {...props} appointments={appointments} />);
    wrapper.setState({ title: 'new', date: '2018-02-17' });
    wrapper.find('button.btn-success').simulate('click');
    expect(wrapper.find('div.alert').text()).toBe('An appointment already exists for 2018-02-17');
  });
});
