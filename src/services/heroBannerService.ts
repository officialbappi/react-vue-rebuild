
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const COLLECTION_NAME = 'HeroBanner';

export const addHeroBanner = async (bannerData: any) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...bannerData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log('Hero banner added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding hero banner: ', error);
    throw error;
  }
};

export const getHeroBanners = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    const banners: any[] = [];
    querySnapshot.forEach((doc) => {
      banners.push({ id: doc.id, ...doc.data() });
    });
    return banners;
  } catch (error) {
    console.error('Error getting hero banners: ', error);
    throw error;
  }
};

export const updateHeroBanner = async (id: string, bannerData: any) => {
  try {
    const bannerRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(bannerRef, {
      ...bannerData,
      updatedAt: new Date()
    });
    console.log('Hero banner updated successfully');
  } catch (error) {
    console.error('Error updating hero banner: ', error);
    throw error;
  }
};

export const deleteHeroBanner = async (id: string) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
    console.log('Hero banner deleted successfully');
  } catch (error) {
    console.error('Error deleting hero banner: ', error);
    throw error;
  }
};

export const toggleHeroBannerStatus = async (id: string, isActive: boolean) => {
  try {
    const bannerRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(bannerRef, {
      isActive,
      updatedAt: new Date()
    });
    console.log('Hero banner status updated successfully');
  } catch (error) {
    console.error('Error updating hero banner status: ', error);
    throw error;
  }
};
