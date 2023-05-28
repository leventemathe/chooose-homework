import { formatTripDetails } from 'textFormatters/formatCounts';

import { render } from '@testing-library/react';

import { TripDetails } from './TripDetails';

jest.mock('textFormatters/formatCounts', () => ({
  formatTripDetails: jest.fn(),
}));

describe('TripDetails', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should format trip details', () => {
    render(<TripDetails dayCount={4} countryCount={2} />);

    expect(formatTripDetails).toHaveBeenCalledTimes(1);
    expect(formatTripDetails).toHaveBeenCalledWith(2, 4);
  });
});
