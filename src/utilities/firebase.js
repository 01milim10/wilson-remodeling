import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBkjF_wEyEqthkNyl8V8AVppijKS9stCaA",
  authDomain: "wilson-remodeling-86038.firebaseapp.com",
  projectId: "wilson-remodeling-86038",
  storageBucket: "wilson-remodeling-86038.appspot.com",
  messagingSenderId: "177766032875",
  appId: "1:177766032875:web:42727eb52cfe7e4e7865ae",
  measurementId: "G-G3HW08YRR4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
