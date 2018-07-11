import React from 'react';
import Balance from './Balance.js';
import { shallow } from 'enzyme';

test('should render Balance component with 23 usd and 40 btc', () => {
  const comp = shallow(<Balance usd={23} btc={40} />);
  expect(comp).toMatchSnapshot();
});
