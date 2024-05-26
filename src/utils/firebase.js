// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrndFeJjpZm5HVqKLMX2aDbA1U_rHPujI",
  authDomain: "netflixgpt-c6262.firebaseapp.com",
  projectId: "netflixgpt-c6262",
  storageBucket: "netflixgpt-c6262.appspot.com",
  messagingSenderId: "351840963771",
  appId: "1:351840963771:web:41cf946a751b444bbfad9e",
  measurementId: "G-GZTMJF615B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();