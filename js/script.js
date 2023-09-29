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
            const newTaskObject = {taskDesc: this.newTask, isDo: false}
            this.tasks.unshift(newTaskObject);
            this.newTask = '';
        },

        removeTask(index){
            return this.tasks.splice(index, 1);
        }

    },

    mounted(){
        console.log(this.tasks);
    }


}).mount('#app')