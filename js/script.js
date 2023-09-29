const { createApp } = Vue;

createApp({

    data(){
        return{
            tasks:[
                {
                    taskDesc: 'Hittare lo smeraldo su LoL',
                    isDo: false
                },
                {
                    taskDesc: 'Studiare VueJs',
                    isDo: false
                },
                {
                    taskDesc: 'Giocare a Padel',
                    isDo: false
                },
            ],
            newTask:''
        }
    },

    methods:{
        addTask(){
            this.tasks.unshift({taskDesc: this.newTask, isDo: false});
            this.newTask = '';
        }
    },

    mounted(){
        console.log(this.tasks);
    }


}).mount('#app')