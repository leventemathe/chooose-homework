import { formatEmission } from './formatEmission';

describe('formatEmission', () => {
  it('should format emission in kg for small numbers', () => {
    const result = formatEmission(500);
    expect(result).toBe('500 kg');
  });

  it('should format emission in t for big numbers', () => {
    const result = formatEmission(1500);
    expect(result).toBe('1.5 t');
  });

  it('should format emission in kg for negative small numbers', () => {
    const result = formatEmission(-500);
    expect(result).toBe('-500 kg');
  });

  it('should format emission in t for negative big numbers', () => {
    const result = formatEmission(-1500);
    expect(result).toBe('-1.5 t');
  });
});
