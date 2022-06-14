// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoM7tNAVZDbnKMgQTPAQGGabDp1URePRU",
  authDomain: "practical-deskala.firebaseapp.com",
  projectId: "practical-deskala",
  storageBucket: "practical-deskala.appspot.com",
  messagingSenderId: "102238501338",
  appId: "1:102238501338:web:fd1cdff5152795d2bd28e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;