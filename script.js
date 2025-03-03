let tasks = [];

const addTask = ()=>{
   const taskInput =  document.getElementById('taskInput')
   const text = taskInput.value.trim();

   if (text) {
    tasks.push({text: text, completed: false});

    updateTaskList();
   }

};

const updateTaskList ()=> {
    const taskList = document.getElementById('task-list')
    taskList.innerHTML =''

    tasks.forEach(task =>{
        const listItem = document.createElement('li')

        //listItem
    })
}

document.getElementById('newTask').addEventListener('click',function(e){
    e.preventDefault()

    addTask();
})