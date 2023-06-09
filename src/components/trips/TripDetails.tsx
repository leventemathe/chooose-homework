import { formatTripDetails } from 'textFormatters/formatCounts';

import { Text } from '@chakra-ui/react';

type TripDetailsProps = {
  dayCount: number;
  countryCount: number;
};

export function TripDetails({ dayCount, countryCount }: TripDetailsProps) {
  const text = formatTripDetails(countryCount, dayCount);

  return (
    <Text fontSize={13} textAlign="center">
      {text}
    </Text>
  );
}
