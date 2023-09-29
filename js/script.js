const { createApp } = Vue;

createApp({

    data(){
        return{
            tasks:[
                {
                    taskDesc: 'Fare la spesa',
                    isDo: false
                },
                {
                    taskDesc: 'Studiare',
                    isDo: false
                },
                {
                    taskDesc: 'Cucinare',
                    isDo: false
                },
            ]
        }
    },

    methods:{

    },

    mounted(){
        console.log(this.tasks);
    }


}).mount('#app')