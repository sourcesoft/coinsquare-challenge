import React from 'react';
import CurrencyType from './CurrencyType.js';
import { shallow } from 'enzyme';

test('should render CurrencyType with children', () => {
  const comp = shallow(<CurrencyType>Test</CurrencyType>).html();
  expect(comp).toMatchSnapshot();
});
