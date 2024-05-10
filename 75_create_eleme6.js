// document.createElement();
//append
//prepend
// remove

// const newTodoItem=document.createElement("li");
// const newTodoItemText=document.createTextNode("Teach Students");

// chota trika
// newTodoItem.textContent="Teach Studnts"


// const todoList=document.querySelector(".todo-list");

// todoList.appendChild(newTodoItem);
// todoList.prepend(newTodoItem)

// console.log(newTodoItem)


// remove method

// const todo1=document.querySelector(".todo-list li");
// todo1.remove();
// console.log(todo1);



// before
// after

const newTodoItem=document.createElement("li");
newTodoItem.textContent="teach students";
const todoList= document.querySelector(".todo-list");

todoList.before(newTodoItem);