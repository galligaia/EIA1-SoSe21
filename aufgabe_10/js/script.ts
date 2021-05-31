interface newtodo {
    tasks: string[];
    status: boolean[];
}
var todos: newtodo = {

    tasks: ["Lorem", "Ipsum", "Dolor"],
    status: [true, false, false]
};


var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;

var openDOMElement: HTMLElement;
var doneDOMElement: HTMLElement;
var listenDOMElement: HTMLElement;

window.addEventListener("load", function (): void {


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

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < todos.tasks.length; index++) {

        
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

       
        todo.innerHTML = "<span class='check " + todos.status[index] + "'><i class='fas fa-check'></i></span>"
            + todos.tasks[index] +
            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function (): void {
            
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function (): void {
            
            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
        todosDOMElement.insertBefore(todo, todosDOMElement.childNodes[0]);
    }

    updateCounter();
}

function updateCounter(): void {
    var open: number = 0;
    var done: number = 0;
    for (var i: number = 0; i < todos.status.length; i++) {
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


function addTodo(): void {
    
    if (inputDOMElement.value != "") {
        
        todos.tasks.push(inputDOMElement.value);
        todos.status.push(false);

        
        inputDOMElement.value = "";

        
        drawListToDOM();
    }
}


function toggleCheckState(index: number): void {

   
    todos.status[index] = !todos.status[index];

   
    drawListToDOM();
}


function deleteTodo(index: number): void {
 
    todos.tasks.splice(index, 1);
    todos.status.splice(index, 1);

    
    drawListToDOM();
}

function listen (): void {
    Artyom.initialize({
        lang: "de-DE",
        continuous: false,
        debug: true,
        listen: true
    }); }