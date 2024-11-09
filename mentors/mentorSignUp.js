// Import Firestore and Auth from Firebase
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

document.addEventListener('DOMContentLoaded', function () {
    // Get form and input elements
    const form = document.querySelector('form');
    const fullNameInput = document.querySelector('input[aria-label="Full Name"]');
    const usernameInput = document.querySelector('input[aria-label="Username"]');
    const emailInput = document.querySelector('input[aria-label="Email"]');
    const phoneInput = document.querySelector('input[aria-label="Phone Number"]');
    const passwordInput = document.querySelector('input[aria-label="Password"]');
    const confirmPasswordInput = document.querySelector('input[aria-label="Confirm password"]');
    const termsCheckbox = document.querySelector('input#termsAndConditions');

    // Initialize Firestore and Auth
    const db = getFirestore();
    const auth = getAuth();

    // Form submission event listener
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        clearErrors();

        const loading = true
        const button  = document.getElementById('submitButton')
        const spinner = document.getElementById('spinner')

        button.classList.add('hidden')
        spinner.classList.remove('hidden')

        // Perform form validation
        const isValid = await validateForm();

        const fullName = fullNameInput.value;
        const username = usernameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        const password = passwordInput.value;
        
        if (isValid) {
            try {
                // Attempt to create the user in Firebase Authentication
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Store user data in Firestore
                await setDoc(doc(db, "Mentors", username), {
                    uid     : user.uid,
                    name    : fullName,
                    username: username,
                    email   : email,
                    phone   : phone,
                    imageURL: "https://firebasestorage.googleapis.com/v0/b/wadii-career-20ae3.firebasestorage.app/o/mentors%2Fdefault-profile-picture1.jpg?alt=media&token=74484aa9-4eee-4b2c-b9a4-2e1ec5fc7186",
                });

                // Store username in session
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('name', fullName)
                // next page
                window.location.href = "mentorCredentials.html";
            } catch (error) {
                if(error.code === 'auth/email-already-in-use'){
                    showError(emailInput, 'This email has already been registered')
                }
                console.error("Error adding document: ", error);

            }
        }
        else{
            button.classList.remove('hidden')
            spinner.classList.add('hidden')
        }
    });

    async function validateForm() {
        let valid = true;

        // Full Name Validation
        if (fullNameInput.value.trim() === '') {
            showError(fullNameInput, 'Full Name is required');
            valid = false;
        } else if (containsNumbers(fullNameInput.value)) {
            showError(fullNameInput, 'Full name cannot contain numbers');
            valid = false;
        }

        // Username Validation
        if (usernameInput.value.trim() === '') {
            showError(usernameInput, 'Username is required');
            valid = false;
        } else {
            const usernameExists = await checkUsernameExists(usernameInput.value);
            if (usernameExists) {
                showError(usernameInput, 'Username is already taken');
                valid = false;
            }
        }

        // Email Validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email');
            valid = false;
        } else {
            const emailExists = await checkEmailExists(emailInput.value);
            if (emailExists) {
                showError(emailInput, 'This email is already registered');
                valid = false;
            }
        }

        // Phone Number Validation
        const phonePattern = /^[0-9]+$/;
        if (!phonePattern.test(phoneInput.value) || phoneInput.value.trim() === '' || phoneInput.value.length < 8) {
            showError(phoneInput, 'Please enter a valid phone number (e.g., 93210001)');
            valid = false;
        }

        // Password and Confirm Password Validation
        if (passwordInput.value.trim() === '') {
            showError(passwordInput, 'Password is required');
            valid = false;
        }
        if (confirmPasswordInput.value.trim() === '') {
            showError(confirmPasswordInput, 'Confirm Password is required');
            valid = false;
        } else if (passwordInput.value !== confirmPasswordInput.value) {
            showError(confirmPasswordInput, 'Passwords do not match');
            valid = false;
        }

        // Terms and Conditions Checkbox Validation
        if (!termsCheckbox.checked) {
            showError(termsCheckbox, 'You must agree to the terms and conditions');
            valid = false;
        }

        return valid;
    }

    function showError(inputElement, message) {
        const errorElement = document.createElement('small');
        errorElement.classList.add('text-red-600');
        errorElement.textContent = message;

        if (inputElement.type === 'checkbox') {
            document.getElementById("tNcError").appendChild(errorElement);
        } else {
            inputElement.parentElement.appendChild(errorElement);
        }
        inputElement.classList.add('is-invalid');
    }

    function clearErrors() {
        document.querySelectorAll('.text-red-600').forEach(error => error.remove());
        document.querySelectorAll('.is-invalid').forEach(input => input.classList.remove('is-invalid'));
    }

    function containsNumbers(str) {
        return str.split('').some(char => !isNaN(char) && char !== ' ');
    }

    async function checkUsernameExists(username) {
        const docRef = doc(db, "Mentors", username);
        const docSnap = await getDoc(docRef);
        return docSnap.exists();
    }

    async function checkEmailExists(email) {
        const methods = await fetchSignInMethodsForEmail(auth, email);
        return methods.length > 0;
    }
});
