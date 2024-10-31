// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { createApp } from 'https://cdn.jsdelivr.net/npm/vue@3/dist/vue.esm-browser.js';

const firebaseConfig = {
    apiKey: "AIzaSyCaCMLfzaAjedNd7ITsMmFwoskhIboREf0",
    authDomain: "wadii-career-20ae3.firebaseapp.com",
    projectId: "wadii-career-20ae3",
    storageBucket: "wadii-career-20ae3.appspot.com",
    messagingSenderId: "967171133152",
    appId: "1:967171133152:web:42cac325a66903712bca85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Vue component to fetch and display mentors
const MentorList = {
    data() {
        return {
            mentors: [],
            expandedMentor: null,
        };
    },
    methods: {
        async fetchMentors() {
            const querySnapshot = await getDocs(collection(db, 'Mentors'));
            this.mentors = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        },
        expandCard(mentor) {
            this.expandedMentor = mentor;
        },
        closeModal() {
            this.expandedMentor = null;
        },
    },
    created() {
        this.fetchMentors();
    },
    template: `
        <div class = "grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
                  v-for  = "mentor in mentors"
                :key     = "mentor.id"
                  class  = "bg-white rounded-lg shadow-md overflow-hidden card"
                  @click = "expandCard(mentor)"
            >
                <img :src  = "mentor.imageUrl" alt = "Card image" class = "w-full h-48 object-cover">
                <div class = "p-4">
                    <h5 class = "text-lg font-semibold text-gray-800">{{ mentor.name }}</h5>
                    <p  class = "mt-2 text-gray-600 line-clamp-4">{{ mentor.mentorLinkedIn }}</p>
                </div>
            </div>

            <!-- Expanded Card Modal -->
            <div v-if = "expandedMentor" class = "modal active" @click = "closeModal">
                <div class = "expanded bg-white shadow-lg rounded-lg">
                    <button class = "text-red-600 hover:text-red-800 absolute top-2 right-2 text-lg" @click = "closeModal"></button>
                    <h2     class = "text-3xl font-bold mb-4">{{ expandedMentor.name }}</h2>
                    <p      class = "mb-4">{{ expandedMentor.mentorLinkedIn }}</p>
                    <p      class = "text-gray-600">{{ expandedMentor.extraDetails }}</p>
                </div>
            </div>
            
        </div>
    `
};

// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const app1 = createApp(MentorList);
    app1.mount('#mentor-list');
});
