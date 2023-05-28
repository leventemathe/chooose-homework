import { Grid } from '@chakra-ui/react';

import { TripCard } from './TripCard';

export function TripCardList() {
  const trips = [
    {
      id: 'asd',
      title: 'European trip',
      dayCount: 12,
      countryCount: 5,
      emission: 850,
      rating: 4.8,
      image: 'https://source.unsplash.com/3lxrM5yvkcI/w=600',
    },
  ];

  return (
    <Grid>
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </Grid>
  );
}
