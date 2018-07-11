import React from 'react';
import SubmitButton from './SubmitButton.js';
import { shallow } from 'enzyme';

test('should simulate onClick', () => {
  const fn = jest.fn();
  const comp = shallow(<SubmitButton onClick={fn} />);
  comp.simulate('click');
  expect(fn).toBeCalled();
});
