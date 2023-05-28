import { formatCountries, formatDays, formatTripDetails } from './formatCounts';

describe('formatDays', () => {
  it('should return the singular form of "day" when count is 1', () => {
    const result = formatDays(1);
    expect(result).toBe('1 day');
  });

  it('should return the plural form of "days" when count is greater than 1', () => {
    const result = formatDays(3);
    expect(result).toBe('3 days');
  });

  it('should return an empty string when count is negative', () => {
    const result = formatDays(-1);
    expect(result).toBe('');
  });
});

describe('formatCountries', () => {
  it('should return the singular form of "country" when count is 1', () => {
    const result = formatCountries(1);
    expect(result).toBe('1 country');
  });

  it('should return the plural form of "countries" when count is greater than 1', () => {
    const result = formatCountries(5);
    expect(result).toBe('5 countries');
  });

  it('should return an empty string when count is negative', () => {
    const result = formatCountries(-1);
    expect(result).toBe('');
  });
});

describe('formatTripDetails', () => {
  it('should format the trip details correctly', () => {
    const result = formatTripDetails(2, 4);
    expect(result).toBe('2 countries, 4 days');
  });
});
