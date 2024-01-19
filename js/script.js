console.log("Vue ok", Vue);

const {createApp} = Vue;

const app = createApp ({
    data () {
        return {
            message: "Questo messaggio è stato scritto su Javascript",
            vueImg: "https://cdn.sanity.io/images/8edntncj/production/7cb22a8a9885468d96662f6ece61ceb2bc95666d-500x300.png",
            imgInfo: "Logo VueJS",
            greetings: "Si ringrazia: ",
            isActive: true,
            
        }
    },
    methods: {
        confetti
    }
})

app.mount("#root");

