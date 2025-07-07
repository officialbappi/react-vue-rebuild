
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const COLLECTION_NAME = 'testimonials';

export const addTestimonial = async (testimonialData: any) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...testimonialData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log('Testimonial added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding testimonial: ', error);
    throw error;
  }
};

export const getTestimonials = async () => {
  try {
    const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    const testimonials: any[] = [];
    querySnapshot.forEach((doc) => {
      testimonials.push({ id: doc.id, ...doc.data() });
    });
    return testimonials;
  } catch (error) {
    console.error('Error getting testimonials: ', error);
    throw error;
  }
};

export const updateTestimonial = async (id: string, testimonialData: any) => {
  try {
    const testimonialRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(testimonialRef, {
      ...testimonialData,
      updatedAt: new Date()
    });
    console.log('Testimonial updated successfully');
  } catch (error) {
    console.error('Error updating testimonial: ', error);
    throw error;
  }
};

export const deleteTestimonial = async (id: string) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
    console.log('Testimonial deleted successfully');
  } catch (error) {
    console.error('Error deleting testimonial: ', error);
    throw error;
  }
};
