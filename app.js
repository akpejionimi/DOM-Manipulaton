 //Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventlisteners();

//Load all event listeners
function loadEventlisteners(){
    //Add task event
    form.addEventListener('submit', addtask);
    //Remove task
    taskList.addEventListener('click', removeTask);
}

// Add task
function addtask(e) {
    if (taskInput.value === '') {
        alert('Add a task');
    }

    //Create li elements
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //Create textNode and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element 
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    //Add icon  html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to li
    li.appendChild(link);
    console.log(link);
    

    //append the li to Ul
    taskList.appendChild(li);

    //clear input
    taskInput.value= " ";   
    e.preventDefault();

}

//Remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }
    console.log(e.target);
    
    
}