// Initialize Firebase
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { createApp } from 'https://cdn.jsdelivr.net/npm/vue@3/dist/vue.esm-browser.js';

// Initialize Firebase
import {db} from './firebaseconfig.js'

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
            <div v-for  = "mentor in mentors"
                :key     = "mentor.id"
                  class  = "bg-white rounded-lg shadow-md overflow-hidden card"
                  @click = "expandCard(mentor)">
                <img :src  = "mentor.imageUrl" alt = "Image here" class = "w-full h-48 object-cover">
                <div class = "p-4">
                    <h5 class = "text-3xl font-semibold text-[#007bff]">{{ mentor.name }}</h5>
                    <p  class = "mt-2 text-gray-600 line-clamp-4 text-xl">{{ mentor.about }}</p>
                </div>
            </div>

            <!-- Expanded Card Modal -->
            <div v-if = "expandedMentor" class = "modal active" @click.self = "closeModal">
                <div class = "expanded bg-white shadow-lg rounded-lg" @click.stop>
                    <button class = "text-red-600 hover:text-red-800 absolute top-2 right-2 text-lg" @click = "closeModal"></button>
                    <h2     class = "text-3xl font-semibold mb-4 text-[#007bff]">{{ expandedMentor.name }}</h2>
                    <p      class = "mb-4">{{ expandedMentor.about }}</p>
                    <p      class = "text-gray-600">{{ expandedMentor.extraDetails }}</p>

                    <p class = "text-gray-600 mb-1">{{ expandedMentor.mentorEducation }} at {{ expandedMentor.graduatingInstitute}}</p>

                    <p class = "text-gray-600">You can contact {{expandedMentor.name}} at {{expandedMentor.email}}<p>
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
