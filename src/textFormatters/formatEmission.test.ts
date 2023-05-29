import { formatEmission } from './formatEmission';

describe('formatEmission', () => {
  it('should format emission in kg for small numbers', () => {
    const result = formatEmission(512);
    expect(result).toBe('512 kg');
  });

  it('should format emission in t for big numbers', () => {
    const result = formatEmission(1523);
    expect(result).toBe('1.52 t');
  });

  it('should format emission in kg for negative small numbers', () => {
    const result = formatEmission(-531);
    expect(result).toBe('-531 kg');
  });

  it('should format emission in t for negative big numbers', () => {
    const result = formatEmission(-1492);
    expect(result).toBe('-1.49 t');
  });
});
