//selectors
const todobtn = document.querySelector(".todo-btn");
const todoinput = document.querySelector(".todo-input");
const todolist=document.querySelector(".todo-list");

//eventlisner
 document.addEventListener("click",addtask);
 document.addEventListener("click",cheskordelet);
//functions
function addtask(e){
    e.preventDefault();
    const todoinput = document.querySelector(".todo-input");
    console.log(todoinput.value);
    const todoli=document.createElement("li");
    todoli.classList.add("todo");
    const tododiv=document.createElement("div");
    tododiv.classList.add("todo-item");
    tododiv.innerText=todoinput.value;
    const completbtn=document.createElement("button");
    completbtn.classList.add("complet-btn");
    completbtn.innerHTML='<i class="fa-solid fa-check"></i>';
    const trachbtn=document.createElement("button");
    trachbtn.classList.add("trash-btn");
    trachbtn.innerHTML='<i class="fa-solid fa-trash"></i>';
    todoli.appendChild(tododiv);
    todoli.appendChild(completbtn);
    todoli.appendChild(trachbtn);
    const todolist=document.querySelector(".todo-list");
    todolist.appendChild(todoli);
    todoinput.value="";
    
}
function cheskordelet(e){
  const item=e.target;
  if(item.classList[0]=='complet-btn'){
    
    const todo=item.parentElement;
    todo.classList.add("completed");
  }
  if(item.classList[0]=='trash-btn'){
    const todo=item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend",()=>{
    todo.remove();
    });
  }
}