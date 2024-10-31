// Import Firestore from Firebase (ensure you have this line in your HTML)
// <script type="module" src="mentorSignUp.js" defer></script>

import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


document.addEventListener('DOMContentLoaded', function () {
    // Get the form elements
    const form = document.querySelector('form');
    const fullNameInput = document.querySelector('input[aria-label="Full Name"]');
    const usernameInput = document.querySelector('input[aria-label="Username"]');
    const emailInput = document.querySelector('input[aria-label="Email"]');
    const phoneInput = document.querySelector('input[aria-label="Phone Number"]');
    const passwordInput = document.querySelector('input[aria-label="Password"]');
    const confirmPasswordInput = document.querySelector('input[aria-label="Confirm password"]');
    const termsCheckbox = document.querySelector('input#termsAndConditions');

    // Initialize Firestore
    const db = getFirestore();

    // Add event listener on form submission
    form.addEventListener('submit', async function (event) {
        // Prevent default form submission
        event.preventDefault();
        clearErrors();

        // Perform validation
        const isValid = await validateForm();

        // If valid, send data to Firestore
        if (isValid) {
            try {
                // get data 
                let fullName = fullNameInput.value
                let username = usernameInput.value
                let email = emailInput.value
                let phone = phoneInput.value
                let password = passwordInput.value

                await setDoc(doc(db, "Mentors", username), {
                    name: fullName,
                    username: username,
                    email: email,
                    phone: phone,
                    password: password,
                });

                // comment this out for testing 
                localStorage.setItem('username', username) //store username 
                window.location.href = "mentorCredentials.html";
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        }
    });

    async function validateForm() {
        let valid = true;

        // Validate Full Name
        if (fullNameInput.value.trim() === '') {
            showError(fullNameInput, 'Full Name is required');
            valid = false;
        }
        else if (containsNumbers(fullNameInput.value)) {
            showError(fullNameInput, 'Full name cannot have numbers!')
            valid = false;
        }

        // Validate Username
        if (usernameInput.value.trim() === '') {
            showError(usernameInput, 'Username is required');
            valid = false;
        }
        else {
            const usernameExists = await checkUsernameExists(usernameInput.value)
            if (usernameExists) {
                showError(usernameInput, 'Username is already taken!')
                valid = false
            }
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email');
            valid = false;
        }

        // Validate Phone Number (Check if it's numeric)
        const phonePattern = /^[0-9]+$/;
        if (!phonePattern.test(phoneInput.value) || phoneInput.value.trim() === '' || phoneInput.value.length < 8) {
            showError(phoneInput, 'Please enter a valid phone number (ie. 93210001)');
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
        errorElement.classList.add('text-red-600');
        errorElement.textContent = message;

        // Add error message after the input field or checkbox
        if (inputElement.type === 'checkbox') {
            document.getElementById("tNcError").parentElement.appendChild(errorElement);
        } else {
            inputElement.parentElement.appendChild(errorElement);
        }
        inputElement.classList.add('is-invalid');
    }

    function clearErrors() {
        // Remove all existing error messages
        document.querySelectorAll('.text-red-600').forEach(error => error.remove());
        // Remove 'is-invalid' class from inputs
        document.querySelectorAll('.is-invalid').forEach(input => input.classList.remove('is-invalid'));
    }

    // check if a string contains numbers
    function containsNumbers(str) {
        return str.split('').some(char => !isNaN(char) && char !== ' ');
    }

    async function checkUsernameExists(username) {
        const docRef = doc(db, "Mentors", username);
        const docSnap = await getDoc(docRef);
        return docSnap.exists();
    }
});
