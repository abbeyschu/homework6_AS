// constants for button elements
const searchButton = document.getElementById("button-addon2");
const buttonOne = document.getElementById("button1");
const buttonTwo = document.getElementById("button2");
const buttonThree = document.getElementById("button3");
const buttonFour = document.getElementById("button4");
const buttonFive = document.getElementById("button5");

const searchInput = document.getElementById("searchInput");

// constants for weather info elements
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const uvindex = document.getElementById("uvindex");

// API key for OpenWeather
const apikey = "ab69a3f4a172f6785094c003f67fedbd"

// url for searching by city
const url = "api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid=" + apikey 

// initial search
function handleSearchFormSubmit(event) {
    event.preventDefault();
  
    if (!searchInput.value) {
      console.error('You need a search input value!');
      return;
    }
  
    location.assign(url);
  }
  
  searchButton.addEventListener('submit', handleSearchFormSubmit);