let task = document.querySelector(".input");
let button = document.querySelector(".button");
let tasks = document.querySelector(".task-list");

task.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        button.click();
    }
});

button.addEventListener("click", function() {
    if (task.value != "") {
        let newTask = document.createElement("li");
        newTask.classList.add("task");
        newTask.innerHTML = "<button class = 'complete'>  </button>" + task.value + "<button class = 'delete' style='font-size: 30px'>🗑</button>";
        tasks.appendChild(newTask);
        task.value = "";
    }
});

tasks.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete")) {
        if (e.target.parentElement.style.textDecoration !== "line-through") {
            e.target.parentElement.remove();
        }
    }
});



tasks.addEventListener("click", function(e) {
    if (e.target.classList.contains("complete")) {
        if (e.target.parentElement.style.textDecoration == "line-through") {
            e.target.parentElement.style.textDecoration = "none";
            e.target.style.backgroundColor = "#ffffff";
        } else {
            e.target.parentElement.style.textDecoration = "line-through";
            e.target.style.backgroundColor = "#4CAF50";
        }
    }
});

