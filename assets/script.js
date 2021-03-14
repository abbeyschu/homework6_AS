// constants for button elements
const searchButton = document.getElementById("button-addon2");
const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");
const buttonThree = document.getElementById("buttonThree");
const buttonFour = document.getElementById("buttonFour");
const buttonFive = document.getElementById("buttonFive");

var searchInput = document.getElementById("searchInput");

// constants for weather info elements
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const uvindex = document.getElementById("uvindex");

const dateOne = document.getElementById("dateOne");
const tempOne = document.getElementById("tempOne");
const humidityOne = document.getElementById("humidityOne");
const dateTwo = document.getElementById("dateTwo");
const tempTwo = document.getElementById("tempTwo");
const humidityTwo = document.getElementById("humidityTwo");
const dateThree = document.getElementById("dateThree");
const tempThree = document.getElementById("tempThree");
const humidityThree = document.getElementById("humidityThree");
const dateFour = document.getElementById("dateFour");
const tempFour = document.getElementById("tempFour");
const humidityFour = document.getElementById("humidityFour");
const dateFive = document.getElementById("dateFive");
const tempFive = document.getElementById("tempFive");
const humidityFive = document.getElementById("humidityFive");

// API key for OpenWeather
const apikey = "ab69a3f4a172f6785094c003f67fedbd";


//   To do:
// store searches to local storage and have them move down the history list
// add same function as initial search button to history buttons
// determine which array values should be used for forecast

// function for five day forecast
// 37, 29, 21, 13, 5
function forecastapi(){
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchInput.value + "&appid=" + apikey + "&units=imperial"

    fetch(forecastURL)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        dateOne.innerHTML = new Date(data.list[5].dt * 1000).toLocaleDateString();
        tempOne.innerHTML = "Temp: " + data.list[5].main.temp + " F";
        humidityOne.innerHTML = "Humidity: " + data.list[5].main.humidity + "%";
        dateTwo.innerHTML = new Date(data.list[13].dt * 1000).toLocaleDateString();
        tempTwo.innerHTML = "Temp: " + data.list[13].main.temp + " F";
        humidityTwo.innerHTML = "Humidity: " + data.list[13].main.humidity + "%";
        dateThree.innerHTML = new Date(data.list[21].dt * 1000).toLocaleDateString();
        tempThree.innerHTML = "Temp: " + data.list[21].main.temp + " F";
        humidityThree.innerHTML = "Humidity: " + data.list[21].main.humidity + "%";
        dateFour.innerHTML = new Date(data.list[29].dt * 1000).toLocaleDateString();
        tempFour.innerHTML = "Temp: " + data.list[29].main.temp + " F";
        humidityFour.innerHTML = "Humidity: " + data.list[29].main.humidity + "%";
        dateFive.innerHTML = new Date(data.list[37].dt * 1000).toLocaleDateString();
        tempFive.innerHTML = "Temp: " + data.list[37].main.temp + " F";
        humidityFive.innerHTML = "Humidity: " + data.list[37].main.humidity + "%";
    })

};

searchButton.addEventListener('click', forecastapi);


// function for initial search
function todayapi(){
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid=" + apikey + "&units=imperial";
    
    if(searchInput.value===""){
        alert("Enter a valid city");
    }else{
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            city.innerHTML = data.name;
            temp.innerHTML = "Temperature: " + data.main.temp +" degrees F";
            humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
            wind.innerHTML = "Wind: " + data.wind.speed + " MPH";
        });
    }
}
searchButton.addEventListener('click', todayapi)

// search history button 1
function historyOneApi(){
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + buttonOne.textContent + "&appid=" + apikey + "&units=imperial";
    
    if(buttonOne.textContent===""){
        alert("Enter a valid city");
    }else{
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            city.innerHTML = data.name;
            temp.innerHTML = "Temperature: " + data.main.temp +" degrees F";
            humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
            wind.innerHTML = "Wind: " + data.wind.speed + " MPH";
        });
    console.log(buttonOne.textContent);
    }
}
buttonOne.addEventListener('click', historyOneApi);