import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, doc, setDoc ,updateDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Initialize Firebase
const firebaseConfig = {
    // Your Firebase configuration here
    apiKey: "AIzaSyCaCMLfzaAjedNd7ITsMmFwoskhIboREf0",
    authDomain: "wadii-career-20ae3.firebaseapp.com",
    projectId: "wadii-career-20ae3",
    storageBucket: "wadii-career-20ae3.appspot.com",
    messagingSenderId: "967171133152",
    appId: "1:967171133152:web:42cac325a66903712bca85"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const app1 = Vue.createApp({
    data() {
        return {
            mentorTitle        : '',
            mentorExperience   : '',
            mentorCompany      : '',
            mentorIndustry     : '',
            mentorSkills       : '',
            mentorEducation    : '',
            mentorLinkedIn     : '',
            graduatingInstitute: '',
            about              : '',
            errors             : {}
        }
    },
    methods: {
        async submitForm() {
            // Clear previous errors
            this.errors = {};

            // get username 
            const username = sessionStorage.getItem('username')

            // Validate form fields
            const isValid = this.validateForm();

            // If valid, submit to Firestore
            if (isValid) {
                try {
                    const docRef = doc(db, "Mentors", username);
                    await updateDoc(docRef, {
                        mentorTitle        : this.mentorTitle,
                        mentorExperience   : this.mentorExperience,
                        mentorCompany      : this.mentorCompany,
                        mentorIndustry     : this.mentorIndustry,
                        mentorSkills       : this.mentorSkills,
                        mentorEducation    : this.mentorEducation,
                        mentorLinkedIn     : this.mentorLinkedIn,
                        graduatingInstitute: this.graduatingInstitute,
                        about              : this.about,
                    });
                    alert("Thank you for signing up!");

                    window.location.href="mentorCards.html"
                } catch (error) {
                    console.error("Error adding document:", error);
                }
            }
        },
        
        validateForm() {
            let isValid = true;
            if (!this.mentorTitle) {
                this.errors.mentorTitle = "Occupation/Title is required.";
                isValid = false;
            }
            if (!this.mentorExperience) {
                this.errors.mentorExperience = "Experience is required.";
                isValid = false;
            }
            if (!this.mentorCompany) {
                this.errors.mentorCompany = "Company is required.";
                isValid = false;
            }
            if (!this.mentorIndustry) {
                this.errors.mentorIndustry = "Industry is required.";
                isValid = false;
            }
            if (!this.mentorSkills) {
                this.errors.mentorSkills = "Skills are required.";
                isValid = false;
            }
            if (!this.mentorEducation) {
                this.errors.mentorEducation = "Education is required.";
                isValid = false;
            }
            if (!this.mentorLinkedIn) {
                this.errors.mentorLinkedIn = "Portfolio/LinkedIn URL is required.";
                isValid = false;
            }
            if (!this.graduatingInstitute) {
                this.errors.graduatingInstitute = "Graduating Institute is required.";
                isValid = false;
            }

            if (!this.about) {
                this.errors.about = "Let our students know more about you!";
                isValid = false;
            }

            return isValid
            
        }
    }
}).mount("#app1");


const app2 = Vue.createApp({
    data() {
        return {
            openFAQ: null, // Tracks the currently open FAQ
            faqs: [
                {
                    question: "What is the mentorship program about?",
                    answer: "Our mentorship program connects experienced professionals with those looking to advance their skills and knowledge in various fields."
                },
                {
                    question: "What are the requirements to become a mentor?",
                    answer: "Mentors should have at least 5 years of experience in their respective fields and a desire to help others grow."
                },
                {
                    question: "How much time is required to mentor?",
                    answer: "Mentors typically commit 1-2 hours per week, but schedules are flexible and can be tailored to fit your availability."
                },
                {
                    question: "Is there any compensation for mentors?",
                    answer: "This is a volunteer opportunity aimed at giving back, though some programs may offer a small amount."
                }
            ]
        }
    },
    methods: {
        toggleFAQ(index) {
            // Toggle the FAQ item open or close
            this.openFAQ = this.openFAQ === index ? null : index;
        }
    }

})

const vm = app2.mount('#app2')
