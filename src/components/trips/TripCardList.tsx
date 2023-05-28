import { useTrips } from 'dataSources/trips/useTrips';

import { Grid, Text } from '@chakra-ui/react';

import { TripCard } from './TripCard';
import { TripControls } from './TripControls';

export function TripCardList() {
  const { trips, isLoading, error } = useTrips();
  const lastTripId = trips?.at(-1)?.id;

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <Grid
      w="100%"
      p={[4, 8, 8, 12]}
      templateColumns={[
        'repeat(1, 1fr)',
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
        'repeat(4, 1fr)',
      ]}
      gap={[8, 12]}
    >
      {trips?.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
      <TripControls
        position="fixed"
        right={10}
        bottom={10}
        lastTripId={lastTripId}
      />
    </Grid>
  );
}
