// <div id='app'></div>
const app = Vue.createApp({ 
    data() { 
        return { 
              // key: value
        };
    }, // data
    // computed: { 
    //     derivedProperty() {
    //         return false;
    //     }  
    // }, // computed
    // created() { 
    // },
    // mounted() { 
    // },
    methods: {
        goToMentors() {
            window.location.href = "mentorCards.html"
        },

        goToProfile(){
            window.location.href = ""
        }
    } // methods
});
const vm = app.mount('#app'); 