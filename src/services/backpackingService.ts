
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  query, 
  orderBy 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

const COLLECTION_NAME = 'BackpackingTrips';
const INQUIRIES_COLLECTION_NAME = 'BackpackingTrips_Inquiry';

export const createBackpackingTrip = async (tripData: any) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...tripData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating backpacking trip:', error);
    throw error;
  }
};

export const getBackpackingTrips = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching backpacking trips:', error);
    throw error;
  }
};

export const updateBackpackingTrip = async (tripId: string, tripData: any) => {
  try {
    const tripRef = doc(db, COLLECTION_NAME, tripId);
    await updateDoc(tripRef, {
      ...tripData,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error updating backpacking trip:', error);
    throw error;
  }
};

export const deleteBackpackingTrip = async (tripId: string) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, tripId));
  } catch (error) {
    console.error('Error deleting backpacking trip:', error);
    throw error;
  }
};

export const getBackpackingTripInquiries = async () => {
  try {
    const q = query(collection(db, INQUIRIES_COLLECTION_NAME), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching backpacking trip inquiries:', error);
    throw error;
  }
};
