import React from 'react';
import { Messages } from './Messages.js';
import { shallow } from 'enzyme';

test('should render error message', () => {
  const comp = shallow(
    <Messages usd={24} amount={55} errorMsg="test" loading={false} />
  );
  expect(comp.contains('test')).toBe(true);
});
