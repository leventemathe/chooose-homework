import { tripCollection } from 'dataSources/firebase';
import { orderBy, query } from 'firebase/firestore';
import { Trip } from 'models/Trip';
import { useCollection } from 'react-firebase-hooks/firestore';

// we could add pagination here (limit & startAt)
const tripQuery = query(tripCollection, orderBy('createdAt'));

export function useTrips() {
  const [result, isLoading, firebaseError] = useCollection(tripQuery);

  const trips = result?.docs?.map((doc) => {
    const data = doc.data();

    // in a real app we should check each field here (or in the backend)
    // and provide defaults, as firestore doesn't have a schema
    // and there's no guarantee all properties are present
    return {
      id: doc.id,
      ...data,
    };
  }) as Trip[] | null;

  const error = firebaseError ? new Error('Some error happened') : null;

  return {
    trips,
    isLoading,
    error,
  };
}
