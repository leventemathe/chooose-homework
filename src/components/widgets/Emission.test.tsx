import { formatEmission } from 'textFormatters/formatEmission';

import { render } from '@testing-library/react';

import { Emission } from './Emission';

jest.mock('textFormatters/formatEmission', () => ({
  formatEmission: jest.fn(),
}));

describe('Emission', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should format emission', () => {
    render(<Emission emission={500} />);

    expect(formatEmission).toHaveBeenCalledTimes(1);
    expect(formatEmission).toHaveBeenCalledWith(500);
  });
});
