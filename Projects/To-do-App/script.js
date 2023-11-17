const inputEl = document.getElementById("input-box");
const button = document.getElementById("btn");
const ulEl = document.getElementById("list-container");
// const listEl = document.querySelector('checked')

function addTask() {
  if (inputEl.value === "") {
    alert("You must write a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputEl.value;
    ulEl.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputEl.value = "";
  saveData();
}

ulEl.addEventListener("click", function (e) {
  console.log(e);
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", ulEl.innerHTML);
}

function getData() {
  ulEl.innerHTML = localStorage.getItem("data");
}

getData();
