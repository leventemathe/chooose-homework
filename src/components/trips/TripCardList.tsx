import { useTrips } from 'dataSources/trips/useTrips';

import { Grid, Text } from '@chakra-ui/react';

import { TripCard } from './TripCard';

export function TripCardList() {
  const { trips, isLoading, error } = useTrips();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <Grid>
      {trips?.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </Grid>
  );
}
