var todos = {
    tasks: ["Lorem", "Ipsum", "Dolor"],
    status: [true, false, false]
};
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var openDOMElement;
var doneDOMElement;
var listenDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    openDOMElement = document.querySelector("#open");
    doneDOMElement = document.querySelector("#done");
    listenDOMElement = document.querySelector("button");
    addButtonDOMElement.addEventListener("click", addTodo);
    listenDOMElement.addEventListener("click", listen);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index_1) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + todos.status[index_1] + "'><i class='fas fa-check'></i></span>"
            + todos.tasks[index_1] +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index_1);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index_1);
        });
        todosDOMElement.appendChild(todo);
        todosDOMElement.insertBefore(todo, todosDOMElement.childNodes[0]);
    };
    for (var index_1 = 0; index_1 < todos.tasks.length; index_1++) {
        _loop_1(index_1);
    }
    updateCounter();
}
function updateCounter() {
    var open = 0;
    var done = 0;
    for (var i = 0; i < todos.status.length; i++) {
        if (todos.status[i] == true) {
            done++;
        }
        else {
            todos.status[i] != true;
            open++;
        }
    }
    counterDOMElement.innerHTML = todos.tasks.length + " in total | " + open + " open | " + done + " done";
}
function addTodo() {
    if (inputDOMElement.value != "") {
        todos.tasks.push(inputDOMElement.value);
        todos.status.push(false);
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    todos.status[index] = !todos.status[index];
    drawListToDOM();
}
function deleteTodo(index) {
    todos.tasks.splice(index, 1);
    todos.status.splice(index, 1);
    drawListToDOM();
}
function listen() {
    Artyom.initialize({
        lang: "de-DE",
        continuous: false,
        debug: true,
        listen: true
    });
}
//# sourceMappingURL=script.js.map