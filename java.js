/* Assign form
- This will allow us to add a listen to the submit button*/
var form_EventListener = document.querySelector("#task-form");

var taskFormHandler = function (event) {
  // Prevents filled in data from being removed
  event.preventDefault();

  // Store what's currently in the text input field
  var taskNameInput = document.querySelector("input[name='task-name']").value;

  // If taskNameInput is log and error and exit function.
  if (taskNameInput === "") {
    alert("Fill in the task name!");
    return 0;
  }

  form_EventListener.reset();

  document.querySelector("input[name='task-name']").value = "";

  CreateTask(taskNameInput);
};

var CreateTask = function (m_taskName) {
  // create list element
  var listElement = document.createElement("LI");

  // Create List Header
  var listHeader = document.createElement("H4");
  listHeader.textContent = m_taskName;

  // Move header into list
  listElement.appendChild(listHeader);

  // append <LI> into the <UL>
  document.getElementById("task-list").appendChild(listElement);
};

// When the button labeled submit inside of the form is pressed
// The function "taskFormHandler" is called
form_EventListener.addEventListener("submit", taskFormHandler);
