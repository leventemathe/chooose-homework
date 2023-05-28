import { Card } from 'components/widgets/Card';
import { Emission } from 'components/widgets/Emission';
import { Trip } from 'models/Trip';

import { Heading, Stack } from '@chakra-ui/react';

import { TripDetails } from './TripDetails';

type TripCardProps = {
  trip: Trip;
};

export function TripCard({ trip }: TripCardProps) {
  const { image, title, dayCount, countryCount, emission } = trip;

  return (
    <Card image={image}>
      <Stack spacing={3} w="100%" alignItems="center">
        <Stack spacing={0}>
          <Heading textAlign="center">{title}</Heading>
          <TripDetails dayCount={dayCount} countryCount={countryCount} />
        </Stack>
        <Emission emission={emission} w="80%" />
      </Stack>
    </Card>
  );
}
