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
            tasksComplete:[],
            newTask:'',
            isErrorText: false,
            isErrorTask: false,
            viewTaskComplete: false
        }
    },

    methods:{
        addTask(){
            if(this.newTask.length < 5){
                this.isErrorText = true;
                this.resetFlag()
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
                this.resetFlag()
            }else{
                this.tasksComplete.unshift(this.tasks[index]);
                this.tasks.splice(index, 1);
                this.isErrorTask = false;
            }
        },

        returnTask(index){
            this.tasksComplete[index].isDo = false;
            this.tasks.unshift(this.tasksComplete[index]);
            this.tasksComplete.splice(index, 1);
        },

        resetFlag(){
            setTimeout(()=>{
                this.isErrorTask = false;
                this.isErrorText = false;
            },3000)
        }

    },

    mounted(){
        // console.log(this.tasks);
    }


}).mount('#app')