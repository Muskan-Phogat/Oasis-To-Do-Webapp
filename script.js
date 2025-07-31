function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = `
    ${taskText}
    <button onclick="markComplete(this)">Complete</button>
  `;
  document.getElementById("pendingList").appendChild(li);
  taskInput.value = "";
}
function markComplete(button) {
  const li = button.parentElement;
  button.remove();
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Delete";
  removeBtn.style.backgroundColor = "#dc3545";
  removeBtn.onclick = function () {
    li.remove();
  };
  li.appendChild(removeBtn);
  document.getElementById("completedList").appendChild(li);
}
