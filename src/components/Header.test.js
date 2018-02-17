import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Header from './Header';

configure({ adapter: new Adapter() });

const props = {
  month: 'June',
  year: 2018,
  previous: jest.fn(),
  next: jest.fn(),
  create: jest.fn()
};

describe('Header Component', () => {
  it('should render the month', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('div.fixed-display-width').text()).toEqual('June');
  });

  it('should render the year', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('h1').text()).toContain(2018);
  });

  it('should render create button', () => {
    let wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('button.btn-success').exists()).toBeTruthy();
    expect(wrapper.find('button.btn-success').hasClass('d-none')).toBeFalsy();

    wrapper = shallow(<Header {...props} hideCreate />);
    expect(wrapper.find('button.btn-success').exists()).toBeTruthy();
    expect(wrapper.find('button.btn-success').hasClass('d-none')).toBeTruthy();
  });

  it('should call create', () => {
    const wrapper = shallow(<Header {...props} />);
    wrapper.find('button.btn-success').simulate('click');
    expect(props.create).toHaveBeenCalledTimes(1);
  });

  it('should call previous', () => {
    const wrapper = shallow(<Header {...props} />);
    wrapper.find('#previous').simulate('click');
    expect(props.previous).toHaveBeenCalledTimes(1);
  });

  it('should call next', () => {
    const wrapper = shallow(<Header {...props} />);
    wrapper.find('#next').simulate('click');
    expect(props.next).toHaveBeenCalledTimes(1);
  });
});
