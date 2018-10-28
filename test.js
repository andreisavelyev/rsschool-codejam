const assert = require('assert');
const {
  sumOfOther,
  make,
} = require('./index.js');

describe('codejam-3', () => {
  it('sum of positive digits', () => {
    const result = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(result, [8, 7, 6, 9]);
  });

  it('sum of negative digits', () => {
    const result = sumOfOther([-3, -2, -17, -1, -133, -15, -44, -10]);
    assert.deepEqual(result, [-222, -223, -208, -224, -92, -210, -181, -215]);
  });

 it('sum of digits as strings', () => {
    const result = sumOfOther(['13', '-6', '44', '-3', '-11']);
    assert.deepEqual(result, [24, 43, -7, 40, 48]);
  });

 it('make summation', () => {
    const sum = ((a, b) => a + b);
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.equal(result, 777);
  });

  it('make multiplication', () => {
     const multiply = ((a, b) => a * b);
     const result = make(13)(34, 21)(11, 12)(41)(multiply);
     assert.equal(result, 50234184);
   });
});
