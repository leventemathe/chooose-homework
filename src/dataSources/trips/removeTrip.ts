import { fireStore } from 'dataSources/firebase';
import { deleteDoc, doc } from 'firebase/firestore';

export async function removeTrip(id?: string) {
  if (!id) return;
  await deleteDoc(doc(fireStore, 'trips', id));
}
