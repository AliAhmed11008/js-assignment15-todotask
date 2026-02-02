window.onload = function () {
  var saved = localStorage.getItem("todos");
  if (saved) {
    document.getElementById("list").innerHTML = saved;
    addEvents();
    updateCounter();
  }
};

function addTask() {
  var input = document.getElementById("task");
  var text = input.value.trim();

  if (text === "") {
    alert("Enter a task");
    return;
  }

  var li = document.createElement("li");
  li.innerHTML = `<span>${text}</span>`;

  var delBtn = document.createElement("button");
  delBtn.innerHTML = "X";
  delBtn.className = "del";

  delBtn.onclick = function () {
    li.remove();
    saveTasks();
  };

  li.onclick = function (e) {
    if (e.target.tagName !== "BUTTON") {
      li.classList.toggle("completed");
      saveTasks();
    }
  };

  li.appendChild(delBtn);
  document.getElementById("list").appendChild(li);

  input.value = "";
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("todos", document.getElementById("list").innerHTML);
  updateCounter();
}

function clearAll() {
  document.getElementById("list").innerHTML = "";
  saveTasks();
}



document.getElementById("task").addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});
