const fizzbuzz = require('../src/fizzbuzz.js');

describe('function fizzbuzz(), returns the number or a string', () => {
  it('is a function', () => {
    expect(typeof fizzbuzz).toBe('function');
  });

  it('returns 1 when given 1', () => {
    expect(fizzbuzz(1)).toEqual(1);
  });

  it('returns Fizz instead of the number if the number is 3', () => {
    expect(fizzbuzz(3)).toEqual('Fizz');
  });

  it('returns Fizz instead of the number for multiple of 3s', () => {
    expect(fizzbuzz(9)).toEqual('Fizz');
  });
});
