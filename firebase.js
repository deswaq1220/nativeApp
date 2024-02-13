// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXR4ECFdFwSYJsdAn62T4fURpB8TahxGw",
  authDomain: "rn-todo-app-a5188.firebaseapp.com",
  projectId: "rn-todo-app-a5188",
  storageBucket: "rn-todo-app-a5188.appspot.com",
  messagingSenderId: "84017004067",
  appId: "1:84017004067:web:6c9e9ae0ecd7f528733b96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;