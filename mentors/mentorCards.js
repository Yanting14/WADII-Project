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
    
            this.mentors = await Promise.all(querySnapshot.docs.map(async (doc) => {
                const mentorData = doc.data();
    
                if (mentorData.imagePath) {
                    try {
                        const imageRef = ref(storage, mentorData.imagePath);
                        mentorData.imageUrl = await getDownloadURL(imageRef);
                    } catch (error) {
                        console.error("Error fetching image URL:", error);
                        mentorData.imageUrl = ''; // Fallback in case of error
                    }
                }
    
                return { id: doc.id, ...mentorData };
            }));
    
            // Initialize filteredMentors with all mentors
            this.filteredMentors = this.mentors;
        },
                        // Get the download URL


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
    template: `<div class="container mx-auto mt-6 mb-4 text-center">
    <label for="industry-select" class="text-lg font-medium mr-2">Filter by Industries</label>
    <select id="industry-select" v-model="selectedIndustry" @change="filterByIndustry" class="p-2 border rounded">
        <option value="">All Industries</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Tech">Tech</option>
        <option value="Education and Training">Education and Training</option>
        <option value="Engineering">Engineering</option>
        <option value="Finance and Banking">Finance and Banking</option>
        <option value="Accountancy">Accountancy</option>
        <option value="Retail and Customer Service">Retail and Customer Service</option>
        <option value="Hospitality and Tourism">Hospitality and Tourism</option>
        <option value="Legal and Compliance">Legal and Compliance</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Science and Research">Science and Research</option>
        <option value="Environmental Science and Sustainability">Environmental Science and Sustainability</option>
    </select>
</div>


<div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justfify-items-center">
    <div v-for="mentor in filteredMentors"
         :key="mentor.id"
         class="bg-white rounded-lg shadow-md overflow-hidden card mx-auto"
         @click="expandCard(mentor)"
         style="width: 100%; max-width: 350px;">
        <img :src="mentor.imageURL" alt="Image here" class="w-full h-48 object-cover" style="height: 250px; object-fit: cover;">
        <div class="p-4" style="height: 200px;">
            <h5 class="text-l font-medium text-[#000080]">{{ mentor.name }}</h5>
            <hr class="pt-2">
            <p class="text-sm text-gray-500">{{ mentor.mentorIndustry }}</p>
            <p class="mt-2 line-clamp-4 text-s">{{ mentor.about }}</p>
        </div>
    </div>

    <div v-if="expandedMentor" class="modal active" @click.self="closeModal">
        <div class="expanded bg-white shadow-lg rounded-lg" @click.stop>
            <div class="flex items-center mb-4">
                <img :src="expandedMentor.imageURL" class="h-24 w-24 rounded-full mr-4">                                            
                <h2 class="text-xl font-medium text-[#000080]">{{ expandedMentor.name }}</h2>
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
        window.location.href = "../index.html";
    }).catch((error) => {
        console.error("Error logging out:", error);
    });
})
