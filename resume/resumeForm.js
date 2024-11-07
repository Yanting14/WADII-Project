
// to be exported and removed here
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
// to be edited
import {
    getFirestore, doc, setDoc, getDoc
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
// const firebaseConfig = {
//     apiKey: "AIzaSyCaCMLfzaAjedNd7ITsMmFwoskhIboREf0",
//     authDomain: "wadii-career-20ae3.firebaseapp.com",
//     projectId: "wadii-career-20ae3",
//     storageBucket: "wadii-career-20ae3.firebasestorage.app",
//     messagingSenderId: "967171133152",
//     appId: "1:967171133152:web:42cac325a66903712bca85"
// };
// const app = initializeApp(firebaseConfig);
// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

// const auth = getAuth(app);



const app1 = Vue.createApp({
    data() {
        return {
            name: '',
            profile: '',
            email: '',
            phone: '',
            website: '',
            location: '',

            // job experiences

            company1: '',
            company2: '',
            company3: '',

            job1: '',
            job2: '',
            job3: '',

            jobDate1: '',
            jobDate2: '',
            jobDate3: '',

            description1: '',
            description2: '',
            description3: '',

            // education

            school1: '',
            school2: '',
            school3: '',

            schoolDate1: '',
            schoolDate2: '',
            schoolDate3: '',

            degreeMajor1: '',
            degreeMajor2: '',
            degreeMajor3: '',

            gpa1: '',
            gpa2: '',
            gpa3: '',

            additionalInformation1: '',
            additionalInformation2: '',
            additionalInformation3: '',

            // skills
            skills: '',

            // language
            languages: '',

            // interests
            interests: '',

            // note change this to default set 
            title1: '#474747',
            background1: '#dea5aa4',
            background2: '#f1e6cf',
            text1: '#000000'

        }
    },
    methods: {
        // for RESUME export
        exportResume() {
            const newWindow = window.open('', '_blank');

            // Start writing the HTML structure in the new window
            const { title1, background1, background2, text1 } = this;
            newWindow.document.write(`
                <html>
                    <head>
                        <title>Exported Resume</title>
                        <style>
                            :root {
                            --header-color: ${title1};
                            --background-color1: ${background1};
                            --background-color2: ${background2};
                            --text-color: ${text1};
                            }

                            body {
                                background-size: cover;
                                background-position: center;
                            }

                            .paper {
                                background-color: var(--background-color2);
                                color: var(--text-color);
                                font-family: 'Georgia', serif;
                                font-size: 12px;
                                line-height: 1.3;
                                height: fit-content;
                                white-space: normal;
                                word-wrap: break-word;
                                
                            }
                                
                            @font-face {
                                font-family: "bannerName";
                                src: url("../fonts/Slabo_27px/Slabo27px-Regular.ttf");
                            }
                       
                            .title1 {
                                background-color: var(--header-color);
                                text-transform: uppercase;
                                color: rgb(251, 235, 217);
                                letter-spacing: 2px;
                                padding: 0px 8px;
                                margin: 0px;
                                text-align: center;
                                font-family: bannerName;
                                font-weight: bold;
                                font-size: small;
                                overflow-wrap: normal;
                            }

                            .title2 {
                                text-transform: uppercase;
                                color: #535353;
                                letter-spacing: 2px;
                                margin: 20px;
                                font-family: bannerName;
                                font-weight: bold;
                                font-size: small;
                            }

                            .icon {
                                height: 20px;
                                width: auto;
                                position: absolute;
                                left: 50%;
                                transform: translate(-50%)
                            }

                            .left {
                            background-color: var(--background-color1);
                            padding: 5px;
                            margin: 0;
                            }

                            @media print {
                                /* Set A4 paper size dimensions */
                                @page {
                                    size: A4;
                                    margin: none; 
                                }
                                .paper {
                                    width: 100%;
                                    max-width: 100%;
                                    margin: 0;
                                }
                                
                                .banner, .left {
                                    width: 100%; /* Full width for printing */
                                    margin: 0;
                                }

                            }

   
                        </style>
                    </head>
                    <body>
                    <script>alert("For best results, please set 'Margins' to 'Minimum' in the print dialog.");</script>
                    </body>
                </html>
            `);
            newWindow.document.close();

            // Dynamically load external scripts and styles
            const head = newWindow.document.head;

            // Add Bootstrap CSS
            const bootstrapLink = newWindow.document.createElement("link");
            bootstrapLink.rel = "stylesheet";
            bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css";
            bootstrapLink.integrity = "sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx";
            bootstrapLink.crossOrigin = "anonymous";
            head.appendChild(bootstrapLink);

            // Add Vue script
            const vueScript = newWindow.document.createElement("script");
            vueScript.src = "https://unpkg.com/vue@3/dist/vue.global.js";
            head.appendChild(vueScript);

            // Add Axios script
            const axiosScript = newWindow.document.createElement("script");
            axiosScript.src = "https://unpkg.com/axios/dist/axios.js";
            head.appendChild(axiosScript);


            const resumeContent = document.getElementById('resumeContent').cloneNode(true);
            newWindow.document.body.appendChild(resumeContent);

            newWindow.print();

        },


        changeTitleColour() {
            document.documentElement.style.setProperty('--header-color', this.title1);
            localStorage.setItem('headerColor', this.title1);
        },
        changeBackgroundColour1() {
            document.documentElement.style.setProperty('--background-color1', this.background1);
            localStorage.setItem('backgroundColor1', this.background1);
        },
        changeBackgroundColour2() {
            document.documentElement.style.setProperty('--background-color2', this.background2);
            localStorage.setItem('backgroundColor2', this.background2);
        },
        changeTextColour() {
            document.documentElement.style.setProperty('--text-color', this.text1);
            localStorage.setItem('textColor', this.text1);
        },


        //   firebase

        // info,onkeyup 
        async autoSave(field, value) {
            try {
                const user = auth.currentUser;
                // check if user is login first
                if (!user) {
                    alert("Please log in to save resume");
                    return;
                }
                // get ref to current user document in fiestore using the unique identifier uid
                const userDocRef = doc(db, 'resumes', user.uid);
                // no matter exists or not, will still require it to be set again after each input
                await setDoc(userDocRef, { [field]: value }, { merge: true });
                console.log(`Auto-saved ${field}`);

            } catch (error) {
                console.error("Error saving to Firestore:", error);
            }
        },
        async mounted() {
            auth.onAuthStateChanged(async user => {
                if (user) {
                    const userDocRef = doc(db, 'resumes', user.uid);
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        // reallocates the data property with the retrieved value if there is any existing, else no allocation occurs
                        Object.assign(this, userDoc.data());
                    }

                }
            })
        }


    },
    mounted() {
        const headerColor = localStorage.getItem('headerColor') || this.title1;
        const backgroundColor1 = localStorage.getItem('backgroundColor1') || this.background1;
        const backgroundColor2 = localStorage.getItem('backgroundColor2') || this.background2;
        const textColor = localStorage.getItem('textColor') || this.text1;

        document.documentElement.style.setProperty('--header-color', headerColor);
        document.documentElement.style.setProperty('--background-color1', backgroundColor1);
        document.documentElement.style.setProperty('--background-color2', backgroundColor2);
        document.documentElement.style.setProperty('--text-color', textColor);

        this.title1 = headerColor;
        this.background1 = backgroundColor1;
        this.background2 = backgroundColor2;
        this.text1 = textColor;
    }
}).mount('#app1');








// for IMG import

// Get the input and image elements
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');

// Add an event listener for when the file is selected
imageInput.addEventListener('change', function (event) {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
        const reader = new FileReader(); // Create a FileReader to read the file

        // Define the onload function to display the image
        reader.onload = function (e) {
            imagePreview.src = e.target.result; // Set the src of the image
            imagePreview.style.display = 'block'; // Make the image visible
        };

        // Read the file as a Data URL (base64 encoded string)
        reader.readAsDataURL(file);
    }
});





