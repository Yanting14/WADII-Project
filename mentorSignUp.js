document.addEventListener('DOMContentLoaded', function () {
    // Get the form elements
    const form                 = document.querySelector('form');
    const fullNameInput        = document.querySelector('input[aria-label="Full Name"]');
    const usernameInput        = document.querySelector('input[aria-label="Username"]');
    const emailInput           = document.querySelector('input[aria-label="Email"]')
    const phoneInput           = document.querySelector('input[aria-label="Phone Number"]');
    const passwordInput        = document.querySelector('input[aria-label="Password"]');
    const confirmPasswordInput = document.querySelector('input[aria-label="Confirm password"]');
    const termsCheckbox        = document.querySelector('input#termsAndConditions');
    const submitButton         = document.querySelector('a.btn-primary');

    // Add event listener on submit button
    submitButton.addEventListener('click', function (event) {
        // Prevent default link navigation
        event.preventDefault();

        // Clear any previous error messages
        clearErrors();

        // Perform validation
        let isValid = validateForm();

        // If valid, navigate to the next page
        if (isValid) {
            window.location.href = 'mentorCredentials.html';
        }
    });

    function validateForm() {
        let valid = true;

        // Validate Full Name
        if (fullNameInput.value.trim() === '') {
            showError(fullNameInput, 'Full Name is required');
            valid = false;
        }

        // Validate Username
        if (usernameInput.value.trim() === '') {
            showError(usernameInput, 'Username is required');
            valid = false;
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email');
            valid = false;
        }

        // Validate Phone Number (Check if it's numeric)
        const phonePattern = /^[0-9]+$/;
        if (!phonePattern.test(phoneInput.value) || phoneInput.value.trim() === '') {
            showError(phoneInput, 'Please enter a valid phone number');
            valid = false;
        }

        // Validate Password
        if (passwordInput.value.trim() === '') {
            showError(passwordInput, 'Password is required');
            valid = false;
        }

        // Validate Confirm Password
        if (confirmPasswordInput.value.trim() === '') {
            showError(confirmPasswordInput, 'Confirm Password is required');
            valid = false;
        } else if (passwordInput.value !== confirmPasswordInput.value) {
            showError(confirmPasswordInput, 'Passwords do not match');
            valid = false;
        }

        // Validate Terms and Conditions Checkbox
        if (!termsCheckbox.checked) {
            showError(termsCheckbox, 'You must agree to the terms and conditions');
            valid = false;
        }

        return valid;
    }

    function showError(inputElement, message) {
        // Create a small element to display error
        const errorElement = document.createElement('small');
        errorElement.classList.add('text-danger');
        errorElement.textContent = message;

        // Add error message after the input field or checkbox
        if (inputElement.type === 'checkbox') {
            inputElement.parentElement.appendChild(errorElement);
        } else {
            inputElement.parentElement.appendChild(errorElement);
        }
        inputElement.classList.add('is-invalid');
    }

    function clearErrors() {
        // Remove all existing error messages
        document.querySelectorAll('.text-danger').forEach(error => error.remove());
        // Remove 'is-invalid' class from inputs
        document.querySelectorAll('.is-invalid').forEach(input => input.classList.remove('is-invalid'));
    }
});