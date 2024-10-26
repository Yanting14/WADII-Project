
const app1 = Vue.createApp({
    data() {
        return {
            mentorTitle: '',
            mentorExperience: '',
            mentorCompany: '',
            mentorIndustry: '',
            mentorSkills: '',
            mentorEducation: '',
            mentorLinkedIn: '',
            mentorAvailability: '',
            errors: {}
        }
    },
    methods: {
        validateForm() {
            this.errors = {};
            if (!this.mentorTitle) {
                this.errors.mentorTitle = "Occupation/Title is required.";
            }
            if (!this.mentorExperience) {
                this.errors.mentorExperience = "Experience is required.";
            }
            if (!this.mentorCompany) {
                this.errors.mentorCompany = "Company is required.";
            }
            if (!this.mentorIndustry) {
                this.errors.mentorIndustry = "Industry is required.";
            }
            if (!this.mentorSkills) {
                this.errors.mentorSkills = "Skills are required.";
            }
            if (!this.mentorEducation) {
                this.errors.mentorEducation = "Education is required.";
            }
            if (!this.mentorLinkedIn) {
                this.errors.mentorLinkedIn = "Portfolio/LinkedIn URL is required.";
            }
            if (!this.mentorAvailability) {
                this.errors.mentorAvailability = "Availability is required.";
            }
            if (Object.keys(this.errors).length === 0) {
                alert("Form submitted successfully!");
            }
        }
    }

})
const vm2 = app1.mount("#app")

const app2 = Vue.createApp({
    data(){
        return{
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
