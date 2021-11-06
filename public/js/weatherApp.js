
const api = {
    key: "e5079244ea4a50a76bd907bf1fc43349",
    base: "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector(".search");
const btn = document.querySelector(".weatherBtn");
btn.addEventListener('click', getInput);

function getInput(event) {
    event.preventDefault();
    if (event.type == "click") {
        getData(search.value);
        console.log(search.value); 
    }
}

function getData() {
    fetch(`${api.base}weather?q=${search.value}&units=imperial&appid=${api.key}`)
        .then(response => {
            return response.json();
        }).then(displayData);
}

function displayData(response) {
   // console.log(response);
   if(response.cod === "404") {
       const error = document.querySelector(".error");
       error.textContent = "Please enter a valid city";
       search.value= "";
   }else {

    const error = document.querySelector(".error");
    error.textContent = "";

    const weatherIcon = document.querySelector(".weather-icon");
    const iconURL = "http://openweathermap.org/img/w/";
    weatherIcon.src = iconURL + response.weather[0].icon + ".png";

    const city = document.querySelector(".city");
    city.innerText = `${response.name}, ${response.sys.country}`;
    search.value= "";

    const today = new Date();
    const date = document.querySelector(".date");
    date.innerText = dateFunction(today);

    const temp = document.querySelector(".temp");
    temp.innerHTML = `Temp: ${Math.round(response.main.temp)} <span>°F</span>`;

    const weather = document.querySelector(".weather");
    weather.innerText = `Weather: ${response.weather[0].main}`;

    const tempRange = document.querySelector(".temp-range");
    tempRange.innerText = `Temp Range: ${Math.round(response.main.temp_min)} °F / ${Math.round(response.main.temp_max)} °F`;
       
       


   }
}

function dateFunction(d) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June",
     "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let days = ["Monday","Tuesday", "Wednesday",
     "Thursday", "Friday", "Saturday", "Sunday"];

     let day = days[d.getDay()];
     let date = d.getDate();
     let month = months[d.getMonth()];
     let year = d.getFullYear();

     return `${day}, ${date} ${month} ${year}`;

}