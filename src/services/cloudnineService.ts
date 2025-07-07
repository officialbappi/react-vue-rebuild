
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

const COLLECTION_NAME = 'CloudNineExperienceExclusive';
const INQUIRIES_COLLECTION_NAME = 'CloudNineExperience_Inquiry';

export const createCloudNineExperience = async (experienceData: any) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...experienceData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating CloudNine experience:', error);
    throw error;
  }
};

export const getCloudNineExperiences = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching CloudNine experiences:', error);
    throw error;
  }
};

export const updateCloudNineExperience = async (experienceId: string, experienceData: any) => {
  try {
    const experienceRef = doc(db, COLLECTION_NAME, experienceId);
    await updateDoc(experienceRef, {
      ...experienceData,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error updating CloudNine experience:', error);
    throw error;
  }
};

export const deleteCloudNineExperience = async (experienceId: string) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, experienceId));
  } catch (error) {
    console.error('Error deleting CloudNine experience:', error);
    throw error;
  }
};

export const getCloudNineExperienceInquiries = async () => {
  try {
    const q = query(collection(db, INQUIRIES_COLLECTION_NAME), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching CloudNine experience inquiries:', error);
    throw error;
  }
};
