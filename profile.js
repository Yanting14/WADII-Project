import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaCMLfzaAjedNd7ITsMmFwoskhIboREf0",
    authDomain: "wadii-career-20ae3.firebaseapp.com",
    projectId: "wadii-career-20ae3",
    storageBucket: "wadii-career-20ae3.appspot.com",
    messagingSenderId: "967171133152",
    appId: "1:967171133152:web:42cac325a66903712bca85"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


const vueApp = Vue.createApp({
    data() {
        return {
            profile: {
                picture:"https://via.placeholder.com/150",
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                summary: '',
                education: [
                    {
                        school:"",
                        degree:"",
                        startDate:"",
                        endDate:""

                    }
                ],
                skills: [],
                careerInterests: [],
                socialLinks: {
                    linkedin: '',
                    github: ''
                },
                about: 'Recent computer science graduate passionate about web development and AI. Looking for opportunities to grow in the tech industry.'
            },
            percentage : 0,
            newSkill :"",
            uid: "DYLUE1cZeESWzlQnGfVAAW4iZUI2"

        }
    },
    methods: {
        calculateProgressBar(){
            try {
                const total = document.getElementsByClassName("criterial").length;
                const success = document.getElementsByClassName("text-success").length;
                this.percentage = (success / total) * 100;
            } catch (error) {
                console.error("Error calculating progress: ", error);
            }
        },
        addEducation(){
            this.profile.education.push({
                school:"",
                degree:"",
                startDate:"",
                endDate:""
            })
        },
        removeEducation(index) {
            this.profile.education.splice(index, 1)
        },
        addSkill() {
            if (this.newSkill.trim() && !this.profile.skills.includes(this.newSkill.trim())) {
              this.profile.skills.push(this.newSkill.trim())
              this.newSkill = ''
            }
        },
        removeSkill(index) {
            this.profile.skills.splice(index, 1)
        },
        async saveProfile() {
            try {
                const formData = new FormData(document.getElementById('editProfileForm'));
                const profileData = Object.fromEntries(formData.entries());

                // Update profile data
                this.profile = { ...this.profile, ...profileData };

                // Save to Firestore
                await setDoc(doc(collection(db, "users"), this.uid), this.profile);

                console.log("Profile successfully written!");

                // Hide modal
                const modal = bootstrap.Modal.getInstance(document.getElementById('editProfileModal'));
                modal.hide();

                alert('Profile Updated!');
            } catch (error) {
                console.error("Error writing profile: ", error);
            }
        },
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.profile.picture = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        async fetchProfile() {
            try {
                const docRef = doc(db, "users", this.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    this.profile = docSnap.data();
                    console.log("Profile data:", this.profile);
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        }
    },
    mounted(){
        this.calculateProgressBar();
        this.fetchProfile();
    }



}).mount("#app");
