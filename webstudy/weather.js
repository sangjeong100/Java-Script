const weather = document.querySelector(".js-weather");


const API_KEY = "0afbca689c088c63fe8c5c5e4c84a08a";
const COORDS = "coords";



function getWeather(lat, lon) {


    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(function(response) { //json은 넘어온 데이터
            return response.json();
        })
        .then(function(json) {
            console.log(json);
            const Weather_ = json.weather[0].main;
            const place = json.name;
            const temperature = json.main.temp;
            const country = json.sys.country;
            weather.innerText = `${country}, ${place} ${temperature}˚C ${Weather_}`;

        });
    // then 메소드를 사용하지 않으면 fetch통신이 끝나는 것을 기다리지 않고 밑에 것을 실행한다. 
    // 그래서 fetch이상해질 수 있음
}

function saveCoords(obj) {
    const stringCoords = JSON.stringify(obj);
    localStorage.setItem(COORDS, stringCoords);
}

function SuccessGetPosition(Position) {
    const latitude = Position.coords.latitude;
    const longitude = Position.coords.longitude;

    const CoordsObj = {
        latitude,
        longitude
    };

    saveCoords(CoordsObj);
    getWeather(latitude, longitude);


}

function ErrorGetPosition() {
    console.log("we fail to get Position");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(SuccessGetPosition, ErrorGetPosition);

}


function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);

    if (loadedCoords === null) {
        askForCoords();

    } else {
        Coords = JSON.parse(loadedCoords);
        getWeather(Coords.latitude, Coords.longitude);

    }
}

function init() {

    loadCoords();
}

init();