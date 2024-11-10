// Import Firestore and Auth from Firebase

import { db, auth } from '../firebaseconfig.js';
import { signOut, getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";


// <div id='app'></div>
const app = Vue.createApp({ 
    data() { 
        return { 
              // key: value
        };
    }, // data
    // computed: { 
    //     derivedProperty() {
    //         return false;
    //     }  
    // }, // computed
    // created() { 
    // },
    // mounted() { 
    // },
    methods: {
        goToMentors() {
            window.location.href = "mentorCards.html"
        },

        goToProfile(){
            window.location.href = "../profile/Profile.html"
        }
    } // methods
});
const vm = app.mount('#app'); 


document.getElementById('logout-link').addEventListener('click', (event) => {
    event.preventDefault();
    const auth = getAuth();
    signOut(auth).then(() => {
        window.location.href = "../index.html";
    }).catch((error) => {
        console.error("Error logging out:", error);
    });
})