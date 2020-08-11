const twoSum = require('./twoSum');

test('target sum of 9 in given numbers [2, 7, 11, 15]', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
})
