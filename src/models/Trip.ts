export type CreateTrip = {
  image: string;
  title: string;
  countryCount: number;
  dayCount: number;
  emission: number;
  rating: number;
};

export type Trip = CreateTrip & {
  id: string;
};
