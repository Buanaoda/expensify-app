import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render expenses with 1 expense', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startlogin for button click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
  wrapper.find('button').simulate('click', {
    preventDefault: () => {}
  });
  expect(startLogin).toHaveBeenCalled();
});