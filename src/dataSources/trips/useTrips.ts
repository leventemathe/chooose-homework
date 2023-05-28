import { firebaseApp } from 'dataSources/firebase';
import { collection, getFirestore, orderBy, query } from 'firebase/firestore';
import { Trip } from 'models/Trip';
import { useCollection } from 'react-firebase-hooks/firestore';

const tripCollection = collection(getFirestore(firebaseApp), 'trips');
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
      createdAt: new Date(data.createdAt.seconds * 1000),
    };
  }) as Trip[] | null;

  const error = firebaseError ? new Error('Some error happened') : null;

  return {
    trips,
    isLoading,
    error,
  };
}
