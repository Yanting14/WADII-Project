// Initialize Firebase

import {db,auth} from '../firebaseconfig.js'
import {
    signOut,
    getAuth
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"

import { collection, getDocs, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";
import { createApp } from 'https://cdn.jsdelivr.net/npm/vue@3/dist/vue.esm-browser.js';

const storage = getStorage()

// Vue component to fetch and display mentors
const MentorList = {
    data() {
        return {
            mentors: [],
            filteredMentors: [],  // Array for displaying filtered mentors
            industries: [],       // Unique industries extracted from mentors
            selectedIndustry: "", // Tracks the selected industry
            expandedMentor: null
        };
    },
    methods: {

        async logout() {
            try {
              await signOut(auth);
              window.location = "../homepage/home.html";
            } catch (error) {
              console.error("Error logging out:", error);
            }
          },


        async fetchMentors() {
            const querySnapshot = await getDocs(collection(db, 'Mentors'));
    
            // Use Promise.all to fetch image URLs asynchronously and retain the 'mentorIndustry' field
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
    
            // Extract unique industries based on 'mentorIndustry' field for dropdown options
            this.industries = [...new Set(this.mentors.map(mentor => mentor.mentorIndustry))];
            console.log(this.industries); // Check if industries are populated correctly
    
            // Initialize filteredMentors with all mentors
            this.filteredMentors = this.mentors;
        },

        filterByIndustry() {
            if (this.selectedIndustry) {
                this.filteredMentors = this.mentors.filter(
                    mentor => mentor.mentorIndustry === this.selectedIndustry
                );
            } else {
                this.filteredMentors = this.mentors;
            }
    
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
    <div>
        <div class="container mx-auto mt-6 mb-4 text-center">
            <label for="industry-select" class="text-lg font-medium mr-2">Filter by Industry:</label>
            <select id="industry-select" v-model="selectedIndustry" @change="filterByIndustry" class="p-2 border rounded">
                <option value="">All Industries</option>
                <option v-for="industry in industries" :key="industry" :value="industry">{{ industry }}</option>
            </select>
        </div>
        
        <!-- Adjust grid layout for responsiveness -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div v-for="mentor in filteredMentors"
                 :key="mentor.id"
                 class="bg-white rounded-lg shadow-md overflow-hidden card"
                 @click="expandCard(mentor)">
                <img :src="mentor.imageUrl" alt="Image here" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h5 class="text-l font-medium text-[#000080]">{{ mentor.name }}</h5>
                    <hr class="pt-2">
                    <p class="text-sm text-gray-500">{{ mentor.mentorIndustry }}</p>
                    <p class="mt-2 line-clamp-4 text-s">{{ mentor.about }}</p>
                </div>
            </div>

            <div v-if="expandedMentor" class="modal active" @click.self="closeModal">
                <div class="expanded bg-white shadow-lg rounded-lg" @click.stop>
                    <div class="flex items-center mb-4">
                        <img :src="expandedMentor.imageUrl" class="h-24 w-24 rounded-full mr-4">                                            
                        <h2 class="text-xl font-medium text-[#000080]">  {{ expandedMentor.name }}</h2>
                    </div>
                    <p class="text-gray-500 mb-3">{{ expandedMentor.mentorEducation }} at {{ expandedMentor.graduatingInstitute }}</p>
                    <hr>
                    <p class="mb-4 pt-2">{{ expandedMentor.about }}</p>
                    
                    <button @click.prevent="contactMentor(expandedMentor)" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Contact via email
                    </button>
                </div>
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
