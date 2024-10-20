document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    // Add event listener to validate the form on submission
    form.addEventListener('submit', function (event) {
        event.preventDefault();// Prevent form from submitting
        validateForm();
    });

    function validateForm() {
        // Clear any existing error messages
        clearErrors();

        let isValid = true;

        // Get all input fields
        const title        = document.getElementById('mentorTitle');
        const experience   = document.getElementById('mentorExperience');
        const company      = document.getElementById('mentorCompany');
        const industry     = document.getElementById('mentorIndustry');
        const skills       = document.getElementById('mentorSkills');
        const education    = document.getElementById('mentorEducation');
        const portfolio    = document.getElementById('mentorPortfolio');
        const availability = document.getElementById('mentorAvailability');

        // Validate each field
        if (title.value.trim() === '') {
            showError(title, 'Occupation/Title is required.');
            isValid = false;
        }

        if (experience.value.trim() === '' || isNaN(experience.value) || experience.value <= 0) {
            showError(experience, 'Please enter valid years of experience.');
            isValid = false;
        }

        if (company.value.trim() === '') {
            showError(company, 'Current Company/Organization is required.');
            isValid = false;
        }

        if (industry.value === 'Select your field') {
            showError(industry, 'Please select an industry/field of expertise.');
            isValid = false;
        }

        if (skills.value.trim() === '') {
            showError(skills, 'Please enter your skills.');
            isValid = false;
        }

        if (education.value.trim() === '') {
            showError(education, 'Highest Level of Education is required.');
            isValid = false;
        }

        if (portfolio.value.trim() === '') {
            showError(portfolio, 'Portfolio/LinkedIn URL is required.');
            isValid = false;
        }

        if (availability.value.trim() === '' || isNaN(availability.value) || availability.value <= 0) {
            showError(availability, 'Please enter valid weekly availability.');
            isValid = false;
        }

        // If form is valid, submit it
        if (isValid) {
            alert('Form submitted successfully!');
            form.submit();// Submit the form
        }
    }

    function showError(input, message) {
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('text-danger', 'mt-1');// Use Bootstrap classes for styling
        errorDiv.innerText = message;
        input.classList.add          ('is-invalid');// Add Bootstrap invalid class to the input
        input.parentNode.appendChild(errorDiv);// Insert the error message below the input field
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.text-danger');
        errorMessages.forEach(function (error) {
            error.remove();// Remove all error messages
        });

        const invalidInputs = document.querySelectorAll('.is-invalid');
        invalidInputs.forEach(function (input) {
            input.classList.remove('is-invalid');// Remove invalid class from inputs
        });
    }
});