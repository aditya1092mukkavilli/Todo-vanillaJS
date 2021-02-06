const todo_button = document.querySelector("#btn-todo-add");
const todo_ul = document.querySelector(".lower-block ul");
const checkbox = document.querySelector(".lower-block");
let todo_list = [];
todo_button.addEventListener("click",addTodoListToArray);
checkbox.addEventListener("click",updateState);

//Adding values to the Array
function addTodoListToArray(){
    const userInput = document.querySelector("input[name='todoinput']");
    todo_list.push({id:todo_list.length, item:userInput.value, state:"in Progress"});
    appendItemsToList(userInput.value, todo_list.length);
    userInput.value ='';
}

function appendItemsToList(userInput, currentId)
{
    let li = document.createElement("li");
    li.innerHTML =`<div>${userInput}</div>
    <div><input type="checkbox" id = ${currentId} class="change-state" value="completed"/>` ;
    todo_ul.appendChild(li);   
}

function updateState(event)
{
  if( event.target && event.target.className == "change-state")
  {
        if(event.target.checked == true)
        {
           const index = todo_list.findIndex(x=>x.id = parseInt(event.target.id));
           todo_list[index]["state"] = "Completed";
           event.target.parentNode.parentNode.firstChild.style.textDecoration = "line-through";
        }
        else 
        {
            const index = todo_list.findIndex(x=>x.id = parseInt(event.target.id));
            todo_list[index]["state"] = "In Progress";
            event.target.parentNode.parentNode.firstChild.style.textDecoration = "none"; 
        }
  }
}