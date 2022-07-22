const sum = require('./sum')

describe('Function sum(a, b)', () => {

  it('must return 9 if sum(4, 5)', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('must return 0 if sum(0, 0)', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('must return an error if any parameter is a string', () => {
    expect(() => sum(4, '5')).toThrowError();
  });

  it('must return "parameters must be numbers" if any parameter is a string', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});