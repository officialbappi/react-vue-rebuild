
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

const GEAR_COLLECTION = 'travelGear';
const INQUIRIES_COLLECTION = 'travelGearInquiries';

// Gear Management
export const createGear = async (gearData: any) => {
  try {
    const docRef = await addDoc(collection(db, GEAR_COLLECTION), {
      ...gearData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating gear:', error);
    throw error;
  }
};

export const getGear = async () => {
  try {
    const q = query(collection(db, GEAR_COLLECTION), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching gear:', error);
    throw error;
  }
};

export const updateGear = async (gearId: string, gearData: any) => {
  try {
    const gearRef = doc(db, GEAR_COLLECTION, gearId);
    await updateDoc(gearRef, {
      ...gearData,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error updating gear:', error);
    throw error;
  }
};

export const deleteGear = async (gearId: string) => {
  try {
    await deleteDoc(doc(db, GEAR_COLLECTION, gearId));
  } catch (error) {
    console.error('Error deleting gear:', error);
    throw error;
  }
};

// Inquiry Management
export const getGearInquiries = async () => {
  try {
    const q = query(collection(db, INQUIRIES_COLLECTION), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching gear inquiries:', error);
    throw error;
  }
};
