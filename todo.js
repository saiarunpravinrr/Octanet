$(document).ready(function() {
  // Initialize Bootstrap DateTimePicker
  $('#datetimeInput').daterangepicker({
    singleDatePicker: true,
    timePicker: true,
    timePicker24Hour: true,
    locale: {
      format: 'YYYY-MM-DD HH:mm'
    }
  });
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const datetimeInput = document.getElementById("datetimeInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "" || datetimeInput.value.trim() === "") {
    return;
  }

  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item", "card", "p-2");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("mr-2");
  taskItem.appendChild(checkbox);

  const taskText = document.createElement("span");
  taskText.classList.add("task-text");
  taskText.textContent = taskInput.value.trim();
  taskItem.appendChild(taskText);

  const taskDate = document.createElement("span");
  taskDate.classList.add("task-date");
  taskDate.textContent = moment(datetimeInput.value.trim(), 'YYYY-MM-DD HH:mm').format('MMM D, YYYY - h:mm A');
  taskItem.appendChild(taskDate);

  taskList.appendChild(taskItem);
  taskInput.value = "";
  datetimeInput.value = "";
}

document.getElementById("taskInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});
  