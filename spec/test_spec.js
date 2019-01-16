const fizzbuzz = require('../src/fizzbuzz.js');

describe('function fizzbuzz(), returns the number or a string', () => {
  it('is a function', () => {
    expect(typeof fizzbuzz).toBe('function');
  });

  it('throws an error for invalid input "something"', () => {
  expect(function() { fizzbuzz("something") }).toThrow(new Error("Invalid input"));
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

  it('returns Buzz instead of the number if the number is 5', () => {
    expect(fizzbuzz(5)).toEqual('Buzz');
  });

  it('returns Buzz instead of the number for multiple of 5s', () => {
    expect(fizzbuzz(10)).toEqual('Buzz');
  });

  it('returns FizzBuzz instead of the number if the number is 15', () => {
    expect(fizzbuzz(15)).toEqual('FizzBuzz');
  });

  it('returns FizzBuzz instead of the number for multiple of 15', () => {
    expect(fizzbuzz(75)).toEqual('FizzBuzz');
  });

});
