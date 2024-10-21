new Vue({
    el: '#app',
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
});