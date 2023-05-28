import { tripCollection } from 'dataSources/firebase';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { CreateTrip } from 'models/Trip';

const trips: CreateTrip[] = [
  {
    image: 'https://source.unsplash.com/3lxrM5yvkcI/w=300',
    title: 'European Quest',
    countryCount: 4,
    dayCount: 8,
    emission: 810,
    rating: 4.2,
  },
  {
    image: 'https://source.unsplash.com/yuiJO6bvHi4/w=300',
    title: 'Autumn Roadtrip',
    countryCount: 1,
    dayCount: 5,
    emission: 3568,
    rating: 3.8,
  },
  {
    image: 'https://source.unsplash.com/9y7y26C-l4Y/w=300',
    title: 'Diving Adventure in Egypt',
    countryCount: 1,
    dayCount: 10,
    emission: 950,
    rating: 4.2,
  },
  {
    image: 'https://source.unsplash.com/tcw3nwoAgvs/w=300',
    title: 'Viking Museum Tour',
    countryCount: 2,
    dayCount: 14,
    emission: 2386,
    rating: 5,
  },
  {
    image: 'https://source.unsplash.com/ezUDjYy17EA/w=300',
    title: 'Budapest City Tour',
    countryCount: 1,
    dayCount: 1,
    emission: 150,
    rating: 4.1,
  },
];

export async function addTrip() {
  const randomIndex = Math.floor(Math.random() * trips.length);
  const randomTrip = trips[randomIndex];

  await addDoc(tripCollection, { ...randomTrip, createdAt: serverTimestamp() });
}
