// cloning the nodes

// const ul=document.querySelector(".todo-list");
// const li=document.createElement("li");
// li.textContent="new todo";
// ul.append(li);
// ul.prepend(li);

//_______________________________________

// hum chahte hai ki new todo todo1 ke pehle bhi ana chahiey or baad me bhi ana chahiye to uske liye hum nodes ko clone kr lenge
const ul=document.querySelector(".todo-list");
const li=document.createElement("li");
li.textContent="new todo";
const li2=li.cloneNode(true);   // for having the child we have to write true keyword
ul.append(li);
ul.prepend(li2);