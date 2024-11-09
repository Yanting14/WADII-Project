// Initialize Firebase
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { createApp } from 'https://cdn.jsdelivr.net/npm/vue@3/dist/vue.esm-browser.js';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    getAuth
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"

import { ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";


// Initialize Firebas
import {db,auth, getStorage} from '../firebaseconfig.js'

const storage = getStorage()

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
            
            // Use Promise.all to fetch image URLs asynchronously
            this.mentors = await Promise.all(querySnapshot.docs.map(async (doc) => {
                const mentorData = doc.data();
                if (mentorData.imagePath) {
                    try {
                        // Create a reference to the image in Firebase Storage
                        const imageRef = ref(storage, mentorData.imagePath);
                        // Get the download URL
                        mentorData.imageUrl = await getDownloadURL(imageRef);
                    } catch (error) {
                        console.error("Error fetching image URL:", error);
                        mentorData.imageUrl = ''; // Fallback in case of error
                    }
                }
                return { id: doc.id, ...mentorData };
            }));
        },
        expandCard(mentor) {
            this.expandedMentor = mentor;
        },
        closeModal() {
            this.expandedMentor = null;
        },
        contactMentor(mentor) {
            const subject = `Message for ${mentor.name}`;
            const body = `Hi ${mentor.name},\n\nI would like to connect with you for mentorship.`;
            const mailtoLink = `mailto:${mentor.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
        }


    },
    created() {
        this.fetchMentors();
    },
    
    template: `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="mentor in mentors"
                 :key="mentor.id"
                 class="bg-white rounded-lg shadow-md overflow-hidden card"
                 @click="expandCard(mentor)">
                <img :src="mentor.imageURL" alt="Image here" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h5 class="text-3xl font-semibold text-[#007bff]">{{ mentor.name }}</h5>
                    <p class="mt-2 text-gray-600 line-clamp-4 text-xl">{{ mentor.about }}</p>
                    
                </div>
            </div>

            <div v-if="expandedMentor" class="modal active" @click.self="closeModal">
                <div class="expanded bg-white shadow-lg rounded-lg" @click.stop>
                    <div class = 'flex items-center mb-4'>
                        <img :src="expandedMentor.imageURL" class="h-24 w-24 rounded-full mr-4">
                                                
                        <h2 class="text-3xl font-semibold mb-4 text-[#007bff]">  {{ expandedMentor.name }}</h2>

                    </div>
                    <p class = "text-gray-600 mb-3">{{ expandedMentor.mentorEducation }} at {{ expandedMentor.graduatingInstitute}}</p>
                    
                    <p class="mb-4">{{ expandedMentor.about }}</p>
                    
                    <button @click.prevent="contactMentor(expandedMentor)" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Contact via email
                    </button>
                </div>
            </div>
        </div>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    const app1 = createApp(MentorList);
    app1.mount('#mentor-list');
});


document.getElementById('logout-link').addEventListener('click', (event) => {
    event.preventDefault();
    const auth = getAuth();
    signOut(auth).then(() => {
        window.location.href = "../homepage/home.html";
    }).catch((error) => {
        console.error("Error logging out:", error);
    });
})
