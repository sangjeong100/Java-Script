const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function handleSubmit(event)
{
    event.preventDefault();
    localStorage.setItem(USER_LS,input.value);
    paintGreeting(input.value);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
    
}

function askForName()
{
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function loadName()
{
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null)
    {
        askForName();
        
    }
    else{
        paintGreeting(currentUser);
    } 
}

function init()
{
    
    console.log(input);
    loadName();
}

init();