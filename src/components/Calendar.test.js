import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Calendar from './Calendar';

configure({ adapter: new Adapter() });

const props = {
  month: 'June',
  year: 2018,
  selectAppointment: jest.fn()
};

describe('Calendar Component', () => {
  it('should render the correct amount of days', () => {
    let wrapper = shallow(<Calendar {...props} />);
    expect(wrapper.find('Day').length).toBe(35); // 5 full weeks including blanks

    wrapper = shallow(<Calendar {...props} month='February' />);
    expect(wrapper.find('Day').length).toBe(35); // 5 full weeks including blanks

    wrapper = shallow(<Calendar {...props} month='September' />);
    expect(wrapper.find('Day').length).toBe(42); // 6 full weeks including blanks
  });
});
