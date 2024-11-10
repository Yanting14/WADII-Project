import { db, auth, app } from '../firebaseconfig.js';
import { collection, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {

    signOut
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"


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
                shortinfo:'',
                education: [
                    {
                        school:"",
                        degree:"",
                        startDate:"",
                        endDate:""

                    }
                ],
                socialLinks: {
                    linkedin: '',
                    github: ''
                },
                about: 'Recent computer science graduate passionate about web development and AI. Looking for opportunities to grow in the tech industry.',
                industries: [ "Healthcare",
                "Tech",
                "Education and Training",
                "Engineering",
                "Finance and Banking",
                "Accountancy",
                "Retail and Customer Service",
                "Hospitality and Tourism",
                "Legal and Compliance",
                "Human Resources",
                "Science and Research",
                "Environmental Science and Sustainability"],
                
             selectedIndustries: [],
                resume: false,
                assessmentCompleted: false,
                skills: []
            },
            percentage : 0,
            newSkill :"",
            maxSelections: 3,
            uid: "DYLUE1cZeESWzlQnGfVAAW4iZUI2"

        }
    },
    methods: {
        async logout() {
            try {
              await signOut(auth);
              window.location = "../homepage/home.html";
            } catch (error) {
              console.error("Error logging out:", error);
            }
          },
        calculateProgressBar(){
            this.$nextTick(() => {
                try {
                    const total = document.getElementsByClassName("criterial").length;
                    const success = document.getElementsByClassName("text-success").length;
                    this.percentage = (success / total) * 100;
                } catch (error) {
                    console.error("Error calculating progress: ", error);
                }
            });
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
                const user = auth.currentUser;
                if (!user) {
                    alert("Please log in to save your profile.");
                    return;
                }
        
                // Save to Firestore using user email as the document ID
                const userDocRef = doc(db, "users", user.email);
        
                // Check if the document already exists
                const userDoc = await getDoc(userDocRef);
        
                if (userDoc.exists()) {
                    // Document exists, so update it (merge fields)
                    await setDoc(userDocRef, this.profile, { merge: true });
                    console.log("Profile updated successfully!");
                } else {
                    // Document does not exist, create a new one
                    await setDoc(userDocRef, this.profile);
                    console.log("New profile created successfully!");
                }
        
                alert('Profile Saved!');
        
        
                // Hide the modal
                const modalElement = document.getElementById('editProfileModal');
                const modalInstance = bootstrap.Modal.getInstance(modalElement);
                if (modalInstance) {
                    modalInstance.hide();
                }
            } catch (error) {
                console.error("Error writing profile:", error);
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
                const user = auth.currentUser;
                if (user) {
                    const docRef = doc(db, "users", user.email);
                    const docSnap = await getDoc(docRef);
    
                    if (docSnap.exists()) {
                        const fetchedData = docSnap.data();
                        this.profile = { ...this.profile, ...fetchedData };
                        this.profile.email = fetchedData.email;
                        console.log("Profile data:", this.profile);
                    } else {
                        console.log("No such document!");
                    }
                } else {
                    console.log("User is not logged in.");
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        },
        isMaxSelected(industry) {
            return this.profile.selectedIndustries.length >= this.maxSelections &&
                   !this.profile.selectedIndustries.includes(industry);
        },
        isBasicInfoComplete() {
            return this.profile.firstName && this.profile.lastName && this.profile.email && this.profile.phone && this.profile.address;
        },
        isSkillsAdded() {
            return this.profile.skills.length > 0;
        },
        isCareerInterestsComplete() {
            return this.profile.selectedIndustries.length > 0;
        },
        isResumeUploaded() {
            return this.profile.resume;
        },
        isAssessmentCompleted() {
            return this.profile.assessmentCompleted;
        }
    },
    mounted(){
        this.calculateProgressBar();
        this.fetchProfile();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.fetchProfile(user.email);
            } else {
                console.log("User is not logged in.");
            }
        });
    },
    watch: {
        profile: {
            handler() {
                this.calculateProgressBar();
            },
            deep: true
        },
        skills() {
            this.calculateProgressBar();
        }
    }

}).mount("#app");

