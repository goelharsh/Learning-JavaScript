// some old methods methods to support internet explorer
// appendChild;
// insertBefore;
// replaceChild;
// removeChild;
//__________________________________


// appendChild
// const ul=document.querySelector(".todo-list");
// const li=document.createElement("li")
// li.textContent="new node";
// ul.appendChild(li);

//_____________________________________


// insertBefore
// const ul=document.querySelector(".todo-list");
// const li=document.createElement("li")
// const referenceNode=document.querySelector(".first-todo");
// li.textContent="new todo";
// ul.insertBefore(li,referenceNode);  // hmne li insert krna hai or hmne vo refereceNode se pehle insert krna hai
//_________________________________________________


// replaceChild
const ul=document.querySelector(".todo-list");

//new element
const li=document.createElement("li");
li.textContent="New Todo";
const referenceNode=document.querySelector(".first-todo");

ul.replaceChild(li,referenceNode );
