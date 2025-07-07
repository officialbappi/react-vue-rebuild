
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const COLLECTION_NAME = 'Destination';

export const addDestination = async (destinationData: any) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...destinationData,
      description_points: destinationData.description_points || [],
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log('Destination added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding destination: ', error);
    throw error;
  }
};

export const getDestinations = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    const destinations: any[] = [];
    querySnapshot.forEach((doc) => {
      destinations.push({ id: doc.id, ...doc.data() });
    });
    return destinations;
  } catch (error) {
    console.error('Error getting destinations: ', error);
    throw error;
  }
};

export const updateDestination = async (id: string, destinationData: any) => {
  try {
    const destinationRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(destinationRef, {
      ...destinationData,
      description_points: destinationData.description_points || [],
      updatedAt: new Date()
    });
    console.log('Destination updated successfully');
  } catch (error) {
    console.error('Error updating destination: ', error);
    throw error;
  }
};

export const deleteDestination = async (id: string) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
    console.log('Destination deleted successfully');
  } catch (error) {
    console.error('Error deleting destination: ', error);
    throw error;
  }
};
