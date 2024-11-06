// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCaCMLfzaAjedNd7ITsMmFwoskhIboREf0",
   authDomain: "wadii-career-20ae3.firebaseapp.com",
   projectId: "wadii-career-20ae3",
   storageBucket: "wadii-career-20ae3.appspot.com",
   messagingSenderId: "967171133152",
   appId: "1:967171133152:web:42cac325a66903712bca85"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
``
export { db, auth, app };