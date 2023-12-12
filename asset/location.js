
//input field check to display clear button 

const clearButton = document.querySelector(".deleteIcon");
const searchBar = document.querySelector(".searchPlaceholder")

const clearText = () => {
    if (searchBar.value.trim() === "") {
        clearButton.style.opacity = 0;
    } else {
        clearButton.style.opacity = 1;
    }
}

searchBar.addEventListener("input", clearText);

clearButton.addEventListener("click", () => {
        searchBar.value= ""; 
        clearButton.style.opacity = 0;

})


//the function to get the location data as the user enters the website 

const givePermissionbutton = document.querySelector(".givePermission");
const weatherIcon = document.querySelector(".weatherImage");
const weatherText = document.querySelector(".weatherText");
const temperature = document.querySelector(".tempData");
const temperatureContainer = document.querySelector(".temperatureContainer");
const locationToday = document.querySelector(".locationToday");
const locationData = document.querySelector(".locationData");
const windData = document.querySelector(".windData");
const humidityData = document.querySelector(".humidityData");
const dataContainer = document.querySelector(".data");
const invalidCity = document.querySelector(".Invalid-city");
const givePermissionPage = document.querySelector(".Give-Permission");




    
function askForLocationPermission() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;

            console.log(lat);
            console.log(long);

            const lang = "en"
            const units = "metric"
            const key = "fcd26fc459ce02fada20408705d74c3d"
            
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=${units}&lang${lang}`

            fetch(url)
            .then(resp => {
                if (!resp.ok) throw new Error(resp.statusText);
                return resp.json()
            })
            .then(data =>  {

                console.log(data);

                 // Update other elements with weather data

                const mainWeather = data.weather[0].main
                const temp = data.main.temp
                const humidity = data.main.humidity
                const place = data.name
                const wind = data.wind.speed
                const latitude = data.coord.lat
                const longitude = data.coord.lon

                // Update background image and weather icon based on weather condition

                if (mainWeather === "Rain") {

                    temperatureContainer.style.backgroundImage = `url("C:/Users/HP-PC/Weanow/weanow-app/asset/RainyBg.png")`
                    weatherIcon.src = "Rain.png"

                } else if (mainWeather === "Thunderstorm") {

                    temperatureContainer.style.backgroundImage = `url("C:/Users/HP-PC/Weanow/weanow-app/asset/HeavyRainBg.png")`
                    weatherIcon.src = "Heavyrain.png"

                } else if (mainWeather === "Clear") {

                    temperatureContainer.style.backgroundImage = `url("/C:/Users/HP-PC/Weanow/weanow-app/asset/SunnyBg.png")`
                    weatherIcon.src = "Sun.png"

                } else if (mainWeather === "Snow") {

                    temperatureContainer.style.backgroundImage = `url("C:/Users/HP-PC/Weanow/weanow-app/asset/SnowBg.png")`
                    weatherIcon.src = "Snow.png"

                } else {
                    temperatureContainer.style.backgroundImage = `url("C:/Users/HP-PC/Weanow/weanow-app/asset/PartlyCloudyBg.png")`
                    weatherIcon.src = "Partlycloud.png"
                }

                weatherText.innerHTML = `${mainWeather}`;
                temperature.innerHTML = `${temp}°C`;
                locationToday.innerHTML = place;
                humidityData.innerHTML =  humidity + '<span>%</span>';
                windData.innerHTML = wind + '<span>km/hr</span>';
                locationData.innerHTML = `${place} City, A beautiful and booming city located on this planet (^_^). It is on Latitude ${latitude} & Longitude ${longitude}. You will love to be there!.`;  

                dataContainer.style.display ="grid"
                givePermissionPage.style.display ="none"
            })
            
            .catch(error => {

                console.log(error);

                dataContainer.style.display ="none"
                givePermissionPage.style.display ="flex"

            })

        }, function(error) {
            if (error.code === error.PERMISSION_DENIED) {
                alert("browser's location permission is turned off, allow it in settings")
            }
        }
        )
    }
}

//the user declines and wants to use the permission button

givePermissionbutton.addEventListener('click', askForLocationPermission)


//the function to get the location data as the input the city Name 

const searchButton = document.querySelector(".searchText");

function cityData() {

    const cityName = searchBar.value;
    const lang = "en"
    const units = "metric"
    const key = "fcd26fc459ce02fada20408705d74c3d"
    

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=${units}&lang${lang}`
    
    
    fetch(url)
    .then(resp => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json()
    })
    .then(data => {
        

        console.log(data)
                 // Update other elements with weather data

                const mainWeather = data.weather[0].main
                const temp = data.main.temp
                const humidity = data.main.humidity
                const place = data.name
                const wind = data.wind.speed
                const latitude = data.coord.lat
                const longitude = data.coord.lon

                // Update background image and weather icon based on weather condition

                if (mainWeather === "Rain") {

                    temperatureContainer.style.backgroundImage = `url("C:/Users/HP-PC/Documents/20-30GC052/Weanow WebApp/asset/media/RainyBg.png")`
                    weatherIcon.src = "C:/Users/HP-PC/Weanow/weanow-app/asset/Rain.png"

                } else if (mainWeather === "Thunderstorm") {

                    temperatureContainer.style.backgroundImage = `url("C:/Users/HP-PC/Documents/20-30GC052/Weanow WebApp/asset/media/HeavyRainBg.png")`
                    weatherIcon.src = "Heavyrain.png"

                } else if (mainWeather === "Clear") {

                    temperatureContainer.style.backgroundImage = `url("C:/Users/HP-PC/Documents/20-30GC052/Weanow WebApp/asset/media/SunnyBg.png")`
                    weatherIcon.src = "C:/Users/HP-PC/Weanow/weanow-app/asset/Sun.png"

                } else if (mainWeather === "Snow") {

                    temperatureContainer.style.backgroundImage = `url("C:/Users/HP-PC/Documents/20-30GC052/Weanow WebApp/asset/media/SnowBg.png")`
                    weatherIcon.src = "C:/Users/HP-PC/Weanow/weanow-app/asset/Snow.png"

                } else {
                    temperatureContainer.style.backgroundImage = `url("C:/Users/HP-PC/Documents/20-30GC052/Weanow WebApp/asset/media/PartlyCloudyBg.png")`
                    weatherIcon.src = "C:/Users/HP-PC/Weanow/weanow-app/asset/Partlycloud.png"
                }

                weatherText.innerHTML = `${mainWeather}`;
                temperature.innerHTML = `${temp}°C`;
                locationToday.innerHTML = place;
                humidityData.innerHTML =  humidity + '<span>%</span>';
                windData.innerHTML = wind + '<span>km/hr</span>';
                locationData.innerHTML = `${place} City, A beautiful and booming city located on this planet (^_^). It is on Latitude ${latitude} & Longitude ${longitude}. You will love to be there!.`;  

                dataContainer.style.display ="grid"
                givePermissionPage.style.display ="none"
                invalidCity.style.display ="none"


    })
    .catch(error =>{
        console.log(error);

        dataContainer.style.display ="none"
        invalidCity.style.display ="flex"
    })
}

searchButton.addEventListener("click", cityData);


