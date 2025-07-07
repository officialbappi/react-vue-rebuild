
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy,
  serverTimestamp,
  getDoc,
  setDoc
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

const ABOUT_US_COLLECTION = 'aboutUs';
const TEAM_MEMBERS_COLLECTION = 'teamMembers';
const GALLERY_COLLECTION = 'imageGallery';

// About Us Data Management
export const getAboutUsData = async () => {
  try {
    const docRef = doc(db, ABOUT_US_COLLECTION, 'main');
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return {
        bannerImage: '',
        aboutText: ''
      };
    }
  } catch (error) {
    console.error('Error fetching about us data:', error);
    throw error;
  }
};

export const updateAboutUsData = async (aboutUsData: any) => {
  try {
    const docRef = doc(db, ABOUT_US_COLLECTION, 'main');
    await setDoc(docRef, {
      ...aboutUsData,
      updatedAt: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    console.error('Error updating about us data:', error);
    throw error;
  }
};

// Team Members Management
export const createTeamMember = async (memberData: any) => {
  try {
    const docRef = await addDoc(collection(db, TEAM_MEMBERS_COLLECTION), {
      ...memberData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating team member:', error);
    throw error;
  }
};

export const getTeamMembers = async () => {
  try {
    const q = query(collection(db, TEAM_MEMBERS_COLLECTION), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching team members:', error);
    throw error;
  }
};

export const updateTeamMember = async (memberId: string, memberData: any) => {
  try {
    const memberRef = doc(db, TEAM_MEMBERS_COLLECTION, memberId);
    await updateDoc(memberRef, {
      ...memberData,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Error updating team member:', error);
    throw error;
  }
};

export const deleteTeamMember = async (memberId: string) => {
  try {
    await deleteDoc(doc(db, TEAM_MEMBERS_COLLECTION, memberId));
  } catch (error) {
    console.error('Error deleting team member:', error);
    throw error;
  }
};

// Image Gallery Management
export const addGalleryImage = async (imageData: any) => {
  try {
    const docRef = await addDoc(collection(db, GALLERY_COLLECTION), {
      ...imageData,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding gallery image:', error);
    throw error;
  }
};

export const getImageGallery = async () => {
  try {
    const q = query(collection(db, GALLERY_COLLECTION), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    throw error;
  }
};

export const deleteGalleryImage = async (imageId: string) => {
  try {
    await deleteDoc(doc(db, GALLERY_COLLECTION, imageId));
  } catch (error) {
    console.error('Error deleting gallery image:', error);
    throw error;
  }
};
