const API_KEY ="07e0e3407d72fd4668645eedaa4ba133";

function onGeo0k(position){
    const lat =position.coords.latitude;
    const lon =position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        if (city.innerText = "Yach’on") {
            city.innerText = "GwangJu";
        }
        else {
            city.innerText = data.name;
        }
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeo0k, onGeoError);
