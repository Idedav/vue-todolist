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
            newTask:'',
            isErrorText: false,
            isErrorTask: false
        }
    },

    methods:{
        addTask(){
            if(this.newTask.length < 5){
                this.isErrorText = true;
            }else{
                const newTaskObject = {taskDesc: this.newTask, isDo: false}
                this.tasks.unshift(newTaskObject);
                this.newTask = '';
                this.isErrorText = false;
            }
        },

        removeTask(index){
            if(!this.tasks[index].isDo){
                this.isErrorTask = true;
            }else{
                this.tasks.splice(index, 1);
                this.isErrorTask = false;
            }
        }

    },

    mounted(){
        console.log(this.tasks);
    }


}).mount('#app')