// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import {getStorage, ref, getMetadata} from 'firebase/storage';




const firebaseConfig = {
  apiKey: "AIzaSyDft2Ct4Ru63mbep6xhY5No2ZmoiRtH-Kk",
  authDomain: "drornails-2b66c.firebaseapp.com",
  projectId: "drornails-2b66c",
  storageBucket: "drornails-2b66c.appspot.com",
  messagingSenderId: "238010881187",
  appId: "1:238010881187:web:384831912b11bd4c631b16",
  measurementId: "G-3ZG4FNM1LZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
//, 'gs://drornails-2b66c.appspot.com/'
export const storage = getStorage(app);
// export const storageRef = ref(storage);
// export const metaData = getMetadata(storageRef);


