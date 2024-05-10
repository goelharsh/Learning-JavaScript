//add new HTML element to page



// innerHTML to add html element

const todolist=document.querySelector(".todo-list");
// console.log(todolist)
// todolist.innerHTML=<li>New TOdo list</li>
todolist.innerHTML=todolist.innerHTML+ "<li>New TODO</li>"
todolist.innerHTML+= "<li>TeachStudent</li>"


// when you should use it, when you should not

// pura html change krna hai to use kr skte hain
