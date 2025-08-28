const apiKey = "86ffa43f167a4799f0b4097f82e2fc14";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const weatherIcon = document.querySelector(".weather-icon");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather-details").style.display = "none";
    }
    else{
        var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".windy").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".humid").innerHTML = data.main.humidity + "%";

    if(data.weather[0].main == "Clear"){
        weatherIcon.src = "sun.png";
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" + "&nbsp&nbspSunny";
    }
    else if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloudy.png";
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" + "&nbsp&nbspCloudy";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "Rain.png";
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" + "&nbsp&nbspRaining";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" + "&nbsp&nbspDrizzling";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" + "&nbsp&nbspMisty";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "snow.png";
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" + "&nbsp&nbspSnow";
    }

    document.querySelector(".weather-details").style.display = "block";
    document.querySelector(".error").style.display = "none";
    

}
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})