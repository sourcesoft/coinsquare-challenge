import reducer, { initialValue, setUSD } from './global';

test('usd balance should be 5', () => {
  expect(reducer(initialValue, setUSD(5))).toMatchObject({
    balance: { usd: 5 },
  });
});
