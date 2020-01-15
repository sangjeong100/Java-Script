const COORDS = "coords";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    console.log(position.coords.latitude);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude, // 그냥 latitude 해도 같음
        longitude: longitude // 그냥 longitude 해도 같음

    };
    saveCoords(coordsObj);
}

function handleGeoError()
{
    console.log('Cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
    //사용자의 위치정보를 읽는 것.
}

function loadCoords()
{
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords===null)
    {
        askForCoords();
    }
    else {
        //getWeather
    }
}


function init()
{
    loadCoords();
}

init();