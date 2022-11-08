const { createApp } = Vue

const app = createApp({
    data(){
        return {
            emailList: [],
        }

    },

    created(){
        for(let i = 0; i<10; i++){
            this.callApi();
        }
    },

    methods: {
        callApi(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response)=>{
                console.log(response.data.response);
                this.emailList.push(response.data.response);
            })
        }
    },

    computed: {

    },

    mounted(){
    
    },
});
app.mount('#app');