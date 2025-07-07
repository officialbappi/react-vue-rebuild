
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const COLLECTION_NAME = 'Hotel';

export const addHotel = async (hotelData: any) => {
  try {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...hotelData,
      amenities: hotelData.amenities || [],
      images: hotelData.images || [],
      createdAt: new Date(),
      updatedAt: new Date()
    });
    console.log('Hotel added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding hotel: ', error);
    throw error;
  }
};

export const getHotels = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    const hotels: any[] = [];
    querySnapshot.forEach((doc) => {
      hotels.push({ id: doc.id, ...doc.data() });
    });
    return hotels;
  } catch (error) {
    console.error('Error getting hotels: ', error);
    throw error;
  }
};

export const getHotelsByDestination = async (destinationId: string) => {
  try {
    const q = query(collection(db, COLLECTION_NAME), where('destinationId', '==', destinationId));
    const querySnapshot = await getDocs(q);
    const hotels: any[] = [];
    querySnapshot.forEach((doc) => {
      hotels.push({ id: doc.id, ...doc.data() });
    });
    return hotels;
  } catch (error) {
    console.error('Error getting hotels by destination: ', error);
    throw error;
  }
};

export const updateHotel = async (id: string, hotelData: any) => {
  try {
    const hotelRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(hotelRef, {
      ...hotelData,
      amenities: hotelData.amenities || [],
      images: hotelData.images || [],
      updatedAt: new Date()
    });
    console.log('Hotel updated successfully');
  } catch (error) {
    console.error('Error updating hotel: ', error);
    throw error;
  }
};

export const deleteHotel = async (id: string) => {
  try {
    await deleteDoc(doc(db, COLLECTION_NAME, id));
    console.log('Hotel deleted successfully');
  } catch (error) {
    console.error('Error deleting hotel: ', error);
    throw error;
  }
};

export const addHotelInquiry = async (inquiryData: any) => {
  try {
    const docRef = await addDoc(collection(db, 'HotelInquiry'), {
      ...inquiryData,
      status: 'pending',
      createdAt: new Date()
    });
    console.log('Hotel inquiry added with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding hotel inquiry: ', error);
    throw error;
  }
};

export const getHotelInquiries = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'HotelInquiry'));
    const inquiries: any[] = [];
    querySnapshot.forEach((doc) => {
      inquiries.push({ id: doc.id, ...doc.data() });
    });
    return inquiries;
  } catch (error) {
    console.error('Error getting hotel inquiries: ', error);
    throw error;
  }
};
