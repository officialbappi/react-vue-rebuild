
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

const REELS_COLLECTION = 'reels';

export const createReel = async (reelData: any) => {
  try {
    const docRef = await addDoc(collection(db, REELS_COLLECTION), {
      ...reelData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating reel:', error);
    throw error;
  }
};

export const getReels = async () => {
  try {
    const q = query(collection(db, REELS_COLLECTION), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching reels:', error);
    throw error;
  }
};

export const updateReel = async (reelId: string, reelData: any) => {
  try {
    const reelRef = doc(db, REELS_COLLECTION, reelId);
    await updateDoc(reelRef, {
      ...reelData,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error updating reel:', error);
    throw error;
  }
};

export const deleteReel = async (reelId: string) => {
  try {
    await deleteDoc(doc(db, REELS_COLLECTION, reelId));
  } catch (error) {
    console.error('Error deleting reel:', error);
    throw error;
  }
};
