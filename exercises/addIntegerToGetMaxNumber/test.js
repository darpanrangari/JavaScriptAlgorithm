const getMaximum = require('./index.js');

test('getMaximum function exists', () => {
  expect(typeof getMaximum).toEqual('function');
});

test('8951 will be max with insert 5 to 891 ', () => {
  expect(getMaximum(891,5)).toEqual(8951);
});

test('51234 will be max with insert 5 to 1234 ', () => {
  expect(getMaximum(1234,5)).toEqual(51234);
});

test('5100 will be max with insert 5 to 100 ', () => {
  expect(getMaximum(100,5)).toEqual(5100);
});
