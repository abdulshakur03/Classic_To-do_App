//add tasks
const list = document.querySelector(".task-section .task-list");
const form = document.forms["add-task"];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const input = form.querySelector('input[type="text"]');
  const value = input.value;
  if (input.value !== "") {
    //make elements
    const li = document.createElement("li");
    const taskName = document.createElement("p");
    const deleteBtn = document.createElement("button");

    //add class
    taskName.classList.add("task-name");
    deleteBtn.classList.add("delete-btn");

    //add content
    taskName.textContent = value;
    deleteBtn.textContent = "Delete";

    //add Elements
    list.appendChild(li);
    li.appendChild(taskName);
    li.appendChild(deleteBtn);

    //add class

    taskName.classList.add("task-name");
    input.value = "";
  }
});

//delete
list.addEventListener("click", function (e) {
  if (e.target.className === "delete-btn") {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

//Hide task

const hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", function (e) {
  if (hideBox.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});
