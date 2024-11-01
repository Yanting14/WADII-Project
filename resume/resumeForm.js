
const app = Vue.createApp({
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

            // NOTE: deploy when using vue - completed

            confirm: false

        }
    },
    methods: {
        // for RESUME export
        exportResume() {
            const newWindow = window.open('', '_blank');

            // Start writing the HTML structure in the new window

            newWindow.document.write(`
                <html>
                    <head>
                        <title>Exported Resume</title>
                        <style>
                            body {
                                background-size: cover;
                                background-position: center;
                                }

                            .paper {
                                background-color: #fdfcf4;
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
                                background-color: #535353;
                                text-transform: uppercase;
                                color: rgb(251, 235, 217);
                                letter-spacing: 2px;
                                padding: 0px 8px;
                                margin: 7px;
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

                            .pink {
                            background-color: rgb(251, 235, 217);
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
                                
                                .banner, .pink {
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

        }
    }
}).mount('#app');








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


