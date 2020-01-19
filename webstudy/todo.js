const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input");
toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDoList";

var toDos = [];

function saveToDo() {
    const stringtoDos = JSON.stringify(toDos);
    localStorage.setItem(TODO_LS, stringtoDos);
}


function DelToDo(btnNode) {
    toDos = toDos.filter(function(toDo) {
        return toDo.id !== JSON.parse(btnNode.parentNode.id); //객체인지 string인지 파악 잘 하기
    });

    console.log(toDos);
    toDoList.removeChild(btnNode.parentNode);
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));


}

function handleClick(event) {
    console.log(event.target);
    DelToDo(event.target);
}

function paintToDo(text) {
    const btn = document.createElement("button");
    const li = document.createElement("li");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    btn.innerText = "X";
    btn.style.color = "red";
    btn.addEventListener("click", handleClick);
    span.innerText = text;
    li.appendChild(span); // span은 div와 다르게 개행안됨
    li.appendChild(btn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDosObj = {
        text: text,
        id: newId
    }
    toDos.push(toDosObj);
    saveToDo();

}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadtoDo() {
    const loadedList = localStorage.getItem(TODO_LS);
    console.log(loadedList);
    if (loadedList !== null) {
        const parseList = JSON.parse(loadedList);
        console.log(parseList);
        parseList.forEach(function(toDo) {
            paintToDo(toDo.text);
        })
    }
}


function init() {
    loadtoDo();
    toDoForm.addEventListener("submit", handleSubmit);

}

init();