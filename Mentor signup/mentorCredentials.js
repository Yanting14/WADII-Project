new Vue({
    el: '#app',
    data: {
        mentorTitle: '',
        mentorExperience: '',
        mentorCompany: '',
        mentorIndustry: '',
        mentorSkills: '',
        mentorEducation: '',
        mentorPortfolio: '',
        mentorAvailability: '',
        errors: {}
    },
    methods: {
        validateForm() {
            this.errors = {};

            if (!this.mentorTitle) {
                this.errors.mentorTitle = 'Occupation/Title is required.';
            }
            if (!this.mentorExperience) {
                this.errors.mentorExperience = 'Years of Experience is required.';
            }
            if (!this.mentorCompany) {
                this.errors.mentorCompany = 'Current Company/Organization is required.';
            }
            if (!this.mentorIndustry) {
                this.errors.mentorIndustry = 'Industry/Field of Expertise is required.';
            }
            if (!this.mentorSkills) {
                this.errors.mentorSkills = 'Skills are required.';
            }
            if (!this.mentorEducation) {
                this.errors.mentorEducation = 'Highest Level of Education is required.';
            }
            if (!this.mentorPortfolio) {
                this.errors.mentorPortfolio = 'Portfolio/LinkedIn URL is required.';
            }
            if (!this.mentorAvailability) {
                this.errors.mentorAvailability = 'Weekly Availability is required.';
            }

            if (Object.keys(this.errors).length === 0) {
                // Submit the form
                alert('Form submitted successfully!');
            }
        }
    }
});