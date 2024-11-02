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
        }
    } // methods
});
const vm = app.mount('#app'); 