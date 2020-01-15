
const clockContainer = document.querySelector(".js-clock"), //doucument객체의 자식 클래스 찾기
      clockTitle = clockContainer.querySelector("h1"); //clockContainer 객체의 자식 클래스 찾기

function getTime()
{
    
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours< 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;

    
    
}

function init()
{
    getTime();
    setInterval(getTime,1000);
}

init();

