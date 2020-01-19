const body = document.querySelector("body");
const weatherColor = document.querySelector(".js-weather");

const IMG_NUMBER = 4;

function generateRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);

    return number;
}

function weatherColorChange(bgNum) {
    console.log(bgNum);
    switch (bgNum) {
        case 1:
            weatherColor.style.color = "skyblue";
            break;
        case 2:
            weatherColor.style.color = "gold";
            break;
        case 3:
            weatherColor.style.color = "purple";
            break;
        case 4:
            weatherColor.style.color = "sandybrown";
            break;

    }
}

function paintImage(bg) {
    const image = new Image();
    image.src = `image/${bg}.png`;
    body.appendChild(image); //body에다가 img를 상속해줌
    weatherColorChange(bg);
    image.classList.add("bgImage"); // image의 클래스네임 지정
}

function init() {
    const randomNumber = generateRandom() + 1;
    paintImage(randomNumber);
}

init();