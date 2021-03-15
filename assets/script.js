// constants for button elements
const searchButton = document.getElementById("button-addon2");
const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");
const buttonThree = document.getElementById("buttonThree");
const buttonFour = document.getElementById("buttonFour");
const buttonFive = document.getElementById("buttonFive");

// todays weather info elements
const today = document.getElementById("today");
const icon = document.getElementById("icon");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const uvindex = document.getElementById("uvindex");

// forecast html elements
const forecast = document.getElementById("forecast");
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

var search = searchInput.value

// function for five day forecast
function forecastapi(){
    var search = searchInput.value
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + search + "&appid=" + apikey + "&units=imperial"

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


// function for today's weather search
function todayapi(){
    var search = searchInput.value
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + search + "&appid=" + apikey + "&units=imperial";
    
    if(searchInput.value===""){
        alert("Enter a valid city");
    }else{
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            city.innerHTML = data.name;
            icon.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            temp.innerHTML = "Temperature: " + data.main.temp +" degrees F";
            humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
            wind.innerHTML = "Wind: " + data.wind.speed + " MPH";
        });
        buttonFive.textContent = buttonFour.textContent;
        buttonFour.textContent = buttonThree.textContent;
        buttonThree.textContent = buttonTwo.textContent;
        buttonTwo.textContent = buttonOne.textContent;
        buttonOne.textContent = search;
    
    }
    forecast.style.display = "block";
    today.style.display = "block";
}
searchButton.addEventListener('click', todayapi)

// search history button 1
function historyOneApi(){
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + buttonOne.textContent + "&appid=" + apikey + "&units=imperial";

    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + buttonOne.textContent + "&appid=" + apikey + "&units=imperial"
    
    if(buttonOne.textContent===""){
        alert("Enter a valid city");
    }else{
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            city.innerHTML = data.name;
            icon.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            temp.innerHTML = "Temperature: " + data.main.temp +" degrees F";
            humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
            wind.innerHTML = "Wind: " + data.wind.speed + " MPH";
        });
        fetch(forecastURL)
        .then(response=>response.json())
        .then(data=>{
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
        forecast.style.display = "block";
        today.style.display = "block";
    }
}
buttonOne.addEventListener('click', historyOneApi);

// search history button 2
function historyTwoApi(){
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + buttonTwo.textContent + "&appid=" + apikey + "&units=imperial";

    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + buttonTwo.textContent + "&appid=" + apikey + "&units=imperial"
    
    if(buttonTwo.textContent===""){
        alert("Enter a valid city");
    }else{
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            city.innerHTML = data.name;
            icon.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            temp.innerHTML = "Temperature: " + data.main.temp +" degrees F";
            humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
            wind.innerHTML = "Wind: " + data.wind.speed + " MPH";
        });
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
        forecast.style.display = "block";
        today.style.display = "block";
    }
}
buttonTwo.addEventListener('click', historyTwoApi);

// search history button 3
function historyThreeApi(){
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + buttonThree.textContent + "&appid=" + apikey + "&units=imperial";

    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + buttonThree.textContent + "&appid=" + apikey + "&units=imperial"
    
    if(buttonThree.textContent===""){
        alert("Enter a valid city");
    }else{
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            city.innerHTML = data.name;
            icon.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            temp.innerHTML = "Temperature: " + data.main.temp +" degrees F";
            humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
            wind.innerHTML = "Wind: " + data.wind.speed + " MPH";
        });
        fetch(forecastURL)
        .then(response=>response.json())
        .then(data=>{
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
        forecast.style.display = "block";
        today.style.display = "block";
    }
}
buttonThree.addEventListener('click', historyThreeApi);

// search history button 4
function historyFourApi(){
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + buttonFour.textContent + "&appid=" + apikey + "&units=imperial";

    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + buttonFour.textContent + "&appid=" + apikey + "&units=imperial"
    
    if(buttonFour.textContent===""){
        alert("Enter a valid city");
    }else{
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            city.innerHTML = data.name;
            icon.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            temp.innerHTML = "Temperature: " + data.main.temp +" degrees F";
            humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
            wind.innerHTML = "Wind: " + data.wind.speed + " MPH";
        });
        fetch(forecastURL)
        .then(response=>response.json())
        .then(data=>{
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
        forecast.style.display = "block";
        today.style.display = "block";
    }
}
buttonFour.addEventListener('click', historyFourApi);

// search history button 5
function historyFiveApi(){
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + buttonFive.textContent + "&appid=" + apikey + "&units=imperial";

    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + buttonFive.textContent + "&appid=" + apikey + "&units=imperial"
    
    if(buttonFive.textContent===""){
        alert("Enter a valid city");
    }else{
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            city.innerHTML = data.name;
            icon.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            temp.innerHTML = "Temperature: " + data.main.temp +" degrees F";
            humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
            wind.innerHTML = "Wind: " + data.wind.speed + " MPH";
        });
        fetch(forecastURL)
        .then(response=>response.json())
        .then(data=>{
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
        forecast.style.display = "block";
        today.style.display = "block";
    }
}
buttonFive.addEventListener('click', historyFiveApi);

// save history to local storage
var saveOneText = () => {
    localStorage.setItem("One", buttonOne.textContent);
    console.log(localStorage.getItem("One"));
};
searchButton.addEventListener("click", saveOneText);

var saveTwoText = () => {
    localStorage.setItem("Two", buttonTwo.textContent);
    console.log(localStorage.getItem("Two"));
};
searchButton.addEventListener("click", saveTwoText);

var saveThreeText = () => {
    localStorage.setItem("Three", buttonThree.textContent);
    console.log(localStorage.getItem("Three"));
};
searchButton.addEventListener("click", saveThreeText);

var saveFourText = () => {
    localStorage.setItem("Four", buttonFour.textContent);
    console.log(localStorage.getItem("Four"));
};
searchButton.addEventListener("click", saveFourText);

var saveFiveText = () => {
    localStorage.setItem("Five", buttonFive.textContent);
    console.log(localStorage.getItem("Five"));
};
searchButton.addEventListener("click", saveFiveText);


const getText = () => {
    buttonOne.textContent = localStorage.getItem("One");
    buttonTwo.textContent = localStorage.getItem("Two");
    buttonThree.textContent = localStorage.getItem("Three");
    buttonFour.textContent = localStorage.getItem("Four");
    buttonFive.textContent = localStorage.getItem("Five");
}

getText();