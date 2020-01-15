const body = document.querySelector("body");

const IMG_NUMBER = 4;

function genRandom()
{
    const number = Math.floor(Math.random() * IMG_NUMBER);
    console.log(number);
    return number;
}

function paintImage(imgNumber)
{
    const image = new Image();
    image.src = `image/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image); 
}

function init()
{
    const randomNumber = genRandom(); 
    paintImage(randomNumber);
}
init();