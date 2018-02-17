import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Day from './Day';

configure({ adapter: new Adapter() });

const props = {
  date: 15,
  selectAppointment: jest.fn()
};

const appointment = {
  title: 'test',
  origin: '2018-02-17'
};

describe('Day Component', () => {
  it('should render date', () => {
    const wrapper = shallow(<Day {...props} />);
    expect(wrapper.find('h5').text()).toEqual('15');
  });

  it('should render title', () => {
    const wrapper = shallow(<Day {...props} appointment={appointment} />);
    expect(wrapper.find('p').text()).toEqual('test');
  });

  it('should call selectAppointment', () => {
    let wrapper = shallow(<Day {...props} />);
    wrapper.simulate('click');
    expect(props.selectAppointment).toHaveBeenCalledTimes(0);

    wrapper = shallow(<Day {...props} appointment={appointment} />);
    wrapper.simulate('click');
    expect(props.selectAppointment).toHaveBeenCalledTimes(1);
    expect(props.selectAppointment).toHaveBeenCalledWith(appointment.origin);
  });
});
