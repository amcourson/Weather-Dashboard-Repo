var openWeatherApiKey = "355c7e90f9099ddddb7aa231ee5f67bc"

var openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=austin&units=imperial&appid=" + openWeatherApiKey

//get current weather
function getCurrentWeather(){
 fetch(openWeatherUrl)
 .then(response=>response.json())
 .then(data=>{
    console.log(data)
    document.querySelector(".col").textContent=data.main.temp
 })
}
document.querySelector(".btn").addEventListener("click",function(){
    getCurrentWeather()
})


//get city forecast

function getCityForecast (){

}