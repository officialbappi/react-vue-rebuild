
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const COLLECTION_NAME = 'Place';

export const addPlace = async (placeData: any) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...placeData,
      description_points: placeData.description_points || [],
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log('Place added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding place: ', error);
    throw error;
  }
};

export const getPlaces = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    const places: any[] = [];
    querySnapshot.forEach((doc) => {
      places.push({ id: doc.id, ...doc.data() });
    });
    return places;
  } catch (error) {
    console.error('Error getting places: ', error);
    throw error;
  }
};

export const getPlacesByDestination = async (destinationId: string) => {
  try {
    const q = query(collection(db, COLLECTION_NAME), where('destinationId', '==', destinationId));
    const querySnapshot = await getDocs(q);
    const places: any[] = [];
    querySnapshot.forEach((doc) => {
      places.push({ id: doc.id, ...doc.data() });
    });
    return places;
  } catch (error) {
    console.error('Error getting places by destination: ', error);
    throw error;
  }
};

export const updatePlace = async (id: string, placeData: any) => {
  try {
    const placeRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(placeRef, {
      ...placeData,
      description_points: placeData.description_points || [],
      updatedAt: new Date()
    });
    console.log('Place updated successfully');
  } catch (error) {
    console.error('Error updating place: ', error);
    throw error;
  }
};

export const deletePlace = async (id: string) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
    console.log('Place deleted successfully');
  } catch (error) {
    console.error('Error deleting place: ', error);
    throw error;
  }
};

export const deletePlacesByDestination = async (destinationId: string) => {
  try {
    const q = query(collection(db, COLLECTION_NAME), where('destinationId', '==', destinationId));
    const querySnapshot = await getDocs(q);
    const deletePromises: Promise<void>[] = [];
    querySnapshot.forEach((doc) => {
      deletePromises.push(deleteDoc(doc.ref));
    });
    await Promise.all(deletePromises);
    console.log('Places deleted successfully for destination');
  } catch (error) {
    console.error('Error deleting places by destination: ', error);
    throw error;
  }
};
