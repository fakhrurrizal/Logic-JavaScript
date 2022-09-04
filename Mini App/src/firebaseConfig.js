// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAby0q8AQFaCrItQDy4f-Jw9DK23iBy3ec",
  authDomain: "mini-app-d708f.firebaseapp.com",
  projectId: "mini-app-d708f",
  storageBucket: "mini-app-d708f.appspot.com",
  messagingSenderId: "870153974318",
  appId: "1:870153974318:web:a60dc557fd54e9070de5bf"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp