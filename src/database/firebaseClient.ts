// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { ImportsNotUsedAsValues } from "typescript";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyB4s9itKT0xp3Ny5z9_0BYicT8eq8httt0",
//   authDomain: "easynote-3d2e8.firebaseapp.com",
//   projectId: "easynote-3d2e8",
//   storageBucket: "easynote-3d2e8.appspot.com",
//   messagingSenderId: "130250272372",
//   appId: "1:130250272372:web:6196e91bf03a67daf3ab21",
//   measurementId: "G-LEL69MJXWQ",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseDb = getFirestore(app);
