export function formatDays(dayCount: number) {
  const dayString = dayCount === 1 ? 'day' : 'days';
  return `${dayCount} ${dayString}`;
}

export function formatCountries(countryCount: number) {
  const countryString = countryCount === 1 ? 'country' : 'countries';
  return `${countryCount} ${countryString}`;
}

export function formatTripDetails(countryCount: number, dayCount: number) {
  return `${formatCountries(countryCount)}, ${formatDays(dayCount)}`;
}
