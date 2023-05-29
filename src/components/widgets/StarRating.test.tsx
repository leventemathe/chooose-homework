import { render } from '@testing-library/react';

import { StarIcon } from './StarIcon';
import { StarRating } from './StarRating';

jest.mock('./StarIcon', () => ({
  StarIcon: jest.fn(),
}));

describe('StarRating', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the correct number of StarIcons and formattedRating if rating is fractional', () => {
    const max = 5;
    const rating = 3.5;

    const { getByText } = render(<StarRating max={max} rating={rating} />);

    expect(StarIcon).toHaveBeenCalledTimes(5);
    expect(StarIcon).toHaveBeenCalledWith({ star: 1 }, {});
    expect(StarIcon).toHaveBeenCalledWith({ star: 1 }, {});
    expect(StarIcon).toHaveBeenCalledWith({ star: 1 }, {});
    expect(StarIcon).toHaveBeenCalledWith({ star: 0.5 }, {});
    expect(StarIcon).toHaveBeenCalledWith({ star: 0 }, {});

    expect(getByText('3.5')).toBeInTheDocument();
  });

  it('should render the correct number of StarIcons and formattedRating if rating is whole', () => {
    const max = 5;
    const rating = 3;

    const { getByText } = render(<StarRating max={max} rating={rating} />);

    expect(StarIcon).toHaveBeenCalledTimes(5);
    expect(StarIcon).toHaveBeenCalledWith({ star: 1 }, {});
    expect(StarIcon).toHaveBeenCalledWith({ star: 1 }, {});
    expect(StarIcon).toHaveBeenCalledWith({ star: 1 }, {});
    expect(StarIcon).toHaveBeenCalledWith({ star: 0 }, {});
    expect(StarIcon).toHaveBeenCalledWith({ star: 0 }, {});

    expect(getByText('3.0')).toBeInTheDocument();
  });

  it('should return null if rating is greater than max or negative', () => {
    const { container } = render(<StarRating max={5} rating={6} />);
    expect(container.firstChild).toBeNull();

    const { container: container2 } = render(
      <StarRating max={5} rating={-1} />
    );
    expect(container2.firstChild).toBeNull();
  });
});
