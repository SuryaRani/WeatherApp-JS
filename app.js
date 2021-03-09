let long;
let lat;

let tempDegree = document.querySelector(".temp-degree");
let tempDescript = document.querySelector(".temp-description");
let locationTimezone = document.querySelector(".location-timezone");
let tempArea = document.querySelector(".temperature");
let ForC = document.querySelector(".temperature span");

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
                setContent(data);

            });
    });
}

function setContent(data) {
    tempDegree.textContent = Math.round((data.main.temp - 273) * (9 / 5) + 32);
    tempDescript.textContent = toTitleCase(data.weather[0].description);
    locationTimezone.textContent = data.name;
    setIcon(tempDescript.textContent);

}

function setIcon(descript) {

}


function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

tempArea.addEventListener("click", function () {
    if (ForC.textContent === "F") {
        ForC.textContent = "C";
        tempDegree.textContent = Math.round((tempDegree.textContent - 32) * (5 / 9));
    }
    else {
        ForC.textContent = "F";
        tempDegree.textContent = Math.round((tempDegree.textContent * (9 / 5) + 32));
    }
});
