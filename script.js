// How to pull data from API
/*
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0f43d0cdb3msh62cf308d66cfaf8p19612fjsn0830c70e03de',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};
let userCity =''
fetch(`https://open-weather13.p.rapidapi.com/city/${userCity}`, options)
	.then(response => response.json())
	.then(data => console.log(data.name))
	.catch(err => console.error(err));
*/
/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/


// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeatherData = (city) => {
  //HINT: Use template literals to create a url with input and an API key
  //CODE GOES HERE
  let URL = 'https://api.openweathermap.org/data/2.5/weather?'
  let FULL_URL = `${URL}q=${city}&appid=${API_KEY}&units=imperial`
  // Send request
	return fetch(`${FULL_URL}`)
    // Format response
	.then(response => response.json())
    // Log response
	.then(data => data)
	.catch(err => console.error(err));
}

// const getWeatherData2 = (city) => {
//   const URL = "https://api.openweathermap.org/data/2.5/weather";
//   const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
//    fetch(FULL_URL)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err))
// }
// getWeatherData2('chicago')

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  console.log(city)
  // get weather data on click
  const data = await getWeatherData(city)
  // show weather data on click
  showWeatherData(data)
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  console.log(weatherData.main, ':cookie')
  //CODE GOES HERE
  // let data = getWeatherData()
  // update city name
  document.getElementById('city-name').innerText = weatherData.name
  // update weather type
  document.getElementById('weather-type').innerText = weatherData.weather[0].main
  // update temp
  document.getElementById('temp').innerText = weatherData.main.temp
  // update min temp
  document.getElementById('min-temp').innerText = weatherData.main.temp_min
  // update max temp
  document.getElementById('max-temp').innerText = weatherData.main.temp_max
  // get weather data
}

