// Get references to the task input field and task list elements
let taskInput=document.getElementById("taskInput")
let taskList = document.getElementById("taskList")

function addTask(){
  // Check if the task input field is not empty
  if(taskInput.value.length>0){
    let li = document.createElement('li');  // Create a new list item (li) element
    li.innerHTML=taskInput.value; // Set the inner HTML of the list item to the task input value
    taskList.appendChild(li); // Add the list item to the task list
    let span =document.createElement('span'); // Create a new span element to serve as a delete button
    span.innerHTML="X"; // Set the inner HTML of the span to "X"
    li.appendChild(span); // Add the span to the list item
    taskInput.value=""; // Clear the task input field
    saveTask();  // Save the updated task list to local storage
  }
  else{
    alert('Please enter a task'); // Alert the user to enter a task if the input field is empty
  }
}

taskList.addEventListener("click", (e)=>{
  // Check if the clicked element is a span (delete button)
  if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove(); // Remove the parent element (list item) of the span
    saveTask(); // Save the updated task list to local storage
  } 
})

function saveTask(){
  localStorage.setItem("Task", taskList.innerHTML); // Set the "Task" item in local storage to the current task list inner HTML
}
function showTask(){
  taskList.innerHTML = localStorage.getItem("Task"); // Set the task list inner HTML to the saved task list from local storage
}
showTask();  // Displays the task list stored in local storage