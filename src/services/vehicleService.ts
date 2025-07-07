
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

const COLLECTION_NAME = 'VehicleRental';
const INQUIRIES_COLLECTION_NAME = 'VehicleRental_Inquiry';

export const createVehicle = async (vehicleData: any) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...vehicleData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating vehicle:', error);
    throw error;
  }
};

export const getVehicles = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    throw error;
  }
};

export const updateVehicle = async (vehicleId: string, vehicleData: any) => {
  try {
    const vehicleRef = doc(db, COLLECTION_NAME, vehicleId);
    await updateDoc(vehicleRef, {
      ...vehicleData,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error updating vehicle:', error);
    throw error;
  }
};

export const deleteVehicle = async (vehicleId: string) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, vehicleId));
  } catch (error) {
    console.error('Error deleting vehicle:', error);
    throw error;
  }
};

export const getVehicleInquiries = async () => {
  try {
    const q = query(collection(db, INQUIRIES_COLLECTION_NAME), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching vehicle inquiries:', error);
    throw error;
  }
};
