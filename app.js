let long;
let lat;

let tempDegree = document.querySelector(".temp-degree");
let tempDescript = document.querySelector(".temp-description");
let locationTimezone = document.querySelector(".location-timezone");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
        console.log(pos);
        long = pos.coords.longitude;
        lat = pos.coords.latitude;

        const key = "0c60c39d5aa15ce7885152ec56a14009";
        const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;

        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
            });
    });



}
