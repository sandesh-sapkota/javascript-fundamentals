//Deleteing

// const todolist= document.querySelector('#todo-list')
// todolist.addEventListener('click',(e)=>{
  
//     if(e.target.classList.contains('delete')){
//         e.target.parentElement.remove()
//     }
// })

//Editing

// const todoList= document.querySelector('#todoList')
// todoList.addEventListener('click',(e)=>{
//     if(e.target.classList.contains('edit')){
//         const newTask= prompt("Edit your task:", e.target.parentElement.firstChild.textContent.trim())

//         if(newTask){
//             e.target.parentElement.firstChild.textContent=newTask;
//         }
//     }
// })


const todoList= document.querySelector("#todoList")
todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
    else if(e.target.classList.contains('edit')){
        let newTask= prompt("Enter a new task:",e.target.parentElement.firstChild.textContent)

        if(newTask){
            e.target.parentElement.firstChild.textContent=newTask;
        }
    }
})