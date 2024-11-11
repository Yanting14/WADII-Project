import {doc, getDoc ,updateDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

import {db,auth} from '../firebaseconfig.js'
import {
    signOut,
    getAuth
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"

const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYTU0NjM2NmQtZDI0OC00NTE5LWI5MjMtNTVkZjQxOWQwZGI4IiwidHlwZSI6ImFwaV90b2tlbiJ9.FO6LLfcb6v-L_HtOE9mPyYSGpTlNunYkmZhVCQkyLHs";

// Create Vue app for the form

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
            errors             : {},
            loading            : false,
            imageURL:''
        }
    },
    methods: {


        async showModal(message) {
            document.getElementById('customModalMessage').textContent = message;
            const customModal = new bootstrap.Modal(document.getElementById('customModal'));
            customModal.show();
        },
        
        async submitForm() {
            // ... existing code
            try {
                // Perform form submission logic
                this.showModal("Thank you for signing up!");  // Use modal here instead of alert()
                window.location.href = "registeredLandingPage.html";
            } catch (error) {
                console.error("Error adding document:", error);
                this.showModal("There was an error signing up. Please try again later.");
            } finally {
                this.loading = false;
            }
        },

        async logout() {
            try {
              await signOut(auth);
              window.location = "../homepage/home.html";
            } catch (error) {
              console.error("Error logging out:", error);
            }
          },
          async submitForm() {
            this.errors  = {}; // Clear previous errors
            this.loading = true;

            const username = sessionStorage.getItem('username');

            // Validate form fields
            const isValid = this.validateForm();

            if (!isValid) {
                this.loading = false;
                return;
            }

            try {
                const docRef = doc(db, "Mentors", username);
                const docSnapshot = await getDoc(docRef);

                if (docSnapshot.exists()) {
                    const summary = await this.generateSummary();

                    await updateDoc(docRef, {
                        mentorTitle        : this.mentorTitle,
                        mentorExperience   : this.mentorExperience,
                        mentorCompany      : this.mentorCompany,
                        mentorIndustry     : this.mentorIndustry,
                        mentorSkills       : this.mentorSkills,
                        mentorEducation    : this.mentorEducation,
                        mentorLinkedIn     : this.mentorLinkedIn,
                        graduatingInstitute: this.graduatingInstitute,
                        about              : summary,
                        imageURL : this.imageURL, // Save the Base64 image here
                    });
                } 
                this.showModal("Thank you for signing up!");
                window.location.href = "registeredLandingPage.html";
            } catch (error) {
                console.error("Error adding document:", error);
                this.showModal("There was an error signing up. Please try again later.");
            } finally {
                this.loading = false;
            }
        },
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.imageURL = e.target.result; // Set the Base64 URL of the image
                };
                reader.readAsDataURL(file); // Convert the image to Base64
            }
        },

        validateForm() {
            let isValid = true;
            if (!this.mentorTitle) { this.errors.mentorTitle = "Occupation/Title is required."; isValid = false; }
            if (!this.mentorExperience) { this.errors.mentorExperience = "Experience is required."; isValid = false; }
            if (!this.mentorCompany) { this.errors.mentorCompany = "Company is required."; isValid = false; }
            if (!this.mentorIndustry) { this.errors.mentorIndustry = "Industry is required."; isValid = false; }
            if (!this.mentorSkills) { this.errors.mentorSkills = "Skills are required."; isValid = false; }
            if (!this.mentorEducation) { this.errors.mentorEducation = "Education is required."; isValid = false; }
            if (!this.mentorLinkedIn) { this.errors.mentorLinkedIn = "Portfolio/LinkedIn URL is required."; isValid = false; }
            if (!this.graduatingInstitute) { this.errors.graduatingInstitute = "Graduating Institute is required."; isValid = false; }
            if (!this.about) { this.errors.about = "Let our students know more about you!"; isValid = false; }

            return isValid;
        },

        async generateSummary() {
            const payloadText = `
            Generate a summary of this person in 3-4 sentences. the person described below is signing up to be a mentor for students. this summary will be the first thing that students see about this person in the website. the above is not to be included in the summary, it is purely for your informtion for you to write a better summary.
        
            this person's name is ${sessionStorage.getItem('name')}.
        
            this is a brief summary of this person: ${this.about}
            
            The person graduated from ${this.graduatingInstitute} with a degree in ${this.mentorEducation}
            
            Person is currently working at ${this.mentorCompany} as a ${this.mentorTitle} with ${this.mentorExperience} years of experience.
            
            LinkedIn: ${this.mentorLinkedIn} (if linkedin is not available, do not include this section in the summarised text)
            
            Person has these skills: ${this.mentorSkills} (do not simply list these skills out, paraphrase and compile it to make it sound professional)
            `;
            
            try {
                const executionId = await createExecution(payloadText);
                if (executionId) {
                    return await pollForResult(executionId);
                }
            } catch (error) {
                console.error("Error generating summary:", error);
                return null;
            }
        }
    }

}).mount('#app1')


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



// EdenAI API Integration
async function createExecution(text) {
    const url     = "https://api.edenai.run/v2/workflow/32a81229-8846-4ec4-b639-597f3f6cb6d4/execution/";
    const payload = { text };

    const response = await fetch(url, {
        method : "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization": API_KEY
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const result = await response.json();
    return result.id;
}

async function pollForResult(executionId, interval = 3000, maxAttempts = 3) {
    const url = `https://api.edenai.run/v2/workflow/32a81229-8846-4ec4-b639-597f3f6cb6d4/execution/${executionId}/`;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": API_KEY
            }
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const result = await response.json();
        if (result.content.status === "success") {
            return result.content.results.text__summarize.results[0].result;
        }

        await new Promise(resolve => setTimeout(resolve, interval));
    }

    throw new Error("Max attempts reached. Execution did not complete in time.");
}



document.getElementById('logout-link').addEventListener('click', (event) => {
    event.preventDefault();
    const auth = getAuth();
    signOut(auth).then(() => {
        window.location.href = "../index.html";
    }).catch((error) => {
        console.error("Error logging out:", error);
    });
})
