import { Trip } from 'models/Trip';

import { Box } from '@chakra-ui/react';

type CardProps = {
  trip: Trip;
};

export function TripCard({ trip }: CardProps) {
  return <Box>{trip.title}</Box>;
}
