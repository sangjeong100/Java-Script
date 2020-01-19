const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
const clockyear = clockContainer.querySelector("h2");

function getDay_(day)
{
    if(day === 0) return "sunday";
    if(day === 1) return "monday";
    if(day === 2) return "Tuesday";
    if(day === 3) return "Wendnesday";
    if(day === 4) return "Thursday";
    if(day === 5) return "Friday";
    if(day === 6) return "Saturday";
}

function getTime()
{
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const years = date.getFullYear();
    const month = date.getMonth(); 
    const Dates = date.getDate();
    const day = date.getDay();

    const days = getDay_(day);

    clockyear.innerText = `${years}.${month<10 ? `0${month+1}`: month+1 }.${Dates < 10 ? `0${Dates}`:Dates} ${days}`;
    clockTitle.innerText = `${hours<10 ? `0${hours}` : hours}:${minutes<10 ? `0${minutes}` : minutes}:${seconds<10 ? `0${seconds}` : seconds}`;
}

function init()
{
    getTime();
    setInterval(getTime,1000);
}
init();