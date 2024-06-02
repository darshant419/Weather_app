const apikey = "96f1df77c1cfe50637610bae72b46330";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

let showme = document.querySelector(".card").classList.add("scale-in-center");

// console.log(showme)


async function CheckWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = 'block';
        document.querySelector(".weather").style.display = 'none';
    }
    else {
        document.querySelector(".weather").classList.add("fade-in")
        document.querySelector(".error").style.display = 'none';

        let data = await response.json()
        // console.log(data);

if (data.main){
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}
else{
    document.querySelector(".error").style.display = 'block';
}


        if (data.weather[0].main == "Clouds") {

            weatherIcon.src = "images/clouds.png"

        } else if (data.weather[0].main == "Drizzel") {
            weatherIcon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Thunder") {
            weatherIcon.src = "images/thunder.png"
        }
        else if (data.weather[0].main == "Haze") {
            weatherIcon.src = "images/haze.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
        }

        document.querySelector(".weather").style.display = "block"

    }
}

searchbtn.addEventListener("click", () => {

   CheckWeather(searchBox.value);

    
})



let toggle = document.getElementById('toggle');
let toggleSwitch = toggle.querySelector('input[type="checkbox"]');

toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('night-mode');
    } else {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('night-mode');
    }
});


// heading animation

var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: 2 })
    .add({
        targets: '.ml3 .letter',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 2000,
        delay: (el, i) => 150 * (i + 1)
    }).add({
        targets: '.ml3',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });