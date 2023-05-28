import { Text } from '@chakra-ui/react';

type TripDetailsProps = {
  dayCount: number;
  countryCount: number;
};

export function TripDetails({ dayCount, countryCount }: TripDetailsProps) {
  const dayString = dayCount === 1 ? 'day' : 'days';
  const countryString = countryCount === 1 ? 'country' : 'countries';
  const text = `${countryCount} ${countryString}, ${dayCount} ${dayString}`;

  return <Text textAlign="center">{text}</Text>;
}
