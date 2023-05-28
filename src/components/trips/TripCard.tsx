import { Card } from 'components/widgets/Card';
import { Emission } from 'components/widgets/Emission';
import { Trip } from 'models/Trip';

import { Heading, VStack } from '@chakra-ui/react';

import { TripDetails } from './TripDetails';
import { TripRating } from './TripRating';

type TripCardProps = {
  trip: Trip;
};

export function TripCard({ trip }: TripCardProps) {
  const { image, title, dayCount, countryCount, emission, rating } = trip;

  return (
    <Card image={image} position="relative">
      <VStack spacing={3} w="100%" alignItems="center">
        <VStack spacing={0}>
          <Heading textAlign="center">{title}</Heading>
          <TripDetails dayCount={dayCount} countryCount={countryCount} />
        </VStack>
        <Emission emission={emission} w="80%" />
      </VStack>
      <TripRating rating={rating} position="absolute" bottom={0} />
    </Card>
  );
}
