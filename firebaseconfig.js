import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import * as config from './firebaseconfig.js';  

const app = initializeApp(config);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, app };