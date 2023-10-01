
//Weather Script


// Declaring the key in a variable in case changes
const apiKey = "e442508f0d0c6af481ccc36efe855b8f"; 
// Changing the way the url was to be able to add the key at the end
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

//function to fetch the key variable and add it to the url, then show the info that the API gave you
async function checkWeather(city){
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

	if(response.status == 404) {
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display = "none";
	}else {
		let data = await response.json();

		const cityElement = document.querySelector(".city");
		const tempElement = document.querySelector(".temp");
		const humidityElement = document.querySelector(".humidity");
		const windElement = document.querySelector(".wind");

		cityElement.textContent = `${data.name}`;
		tempElement.textContent = Math.round(data.main.temp) + "ºc";
		humidityElement.textContent = `${data.main.humidity}%`;
		windElement.textContent = `${data.wind.speed} km/h`;

		if(data.weather[0].main == "Clouds"){
			weatherIcon.src = "images/clouds.png";
		}else if (data.weather[0].main == "Clear"){
			weatherIcon.src = "images/clear.png";
		}else if (data.weather[0].main == "Rain"){
			weatherIcon.src = "images/rain.png";
		}else if (data.weather[0].main == "Drizzle"){
			weatherIcon.src = "images/drizzle.png";
		}else if (data.weather[0].main == "Mist"){
			weatherIcon.src = "images/mist.png";
		}

		document.querySelector(".weather").style.display = "block";
		document.querySelector(".error").style.display = "none";

	}
	
		}


	
searchButton.addEventListener("click", ()=>{
	checkWeather(searchBox.value)
})

