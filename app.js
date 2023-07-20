const apiKey = "725e112d08f00b4d4c9d5a20ee2b8fa0";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchButton=document.querySelector(".search button");
const weatherIcon=document.querySelector(".icon");

async function checkWeather(city){
   const response = await fetch(apiUrl+ city + `&appid=${apiKey}`); 

   if(response.status==404){
    document.querySelector(".error").style.display="block";
   }
   else{
    var data = await response.json();

    console.log(data);
               
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature-degree").innerHTML=(data.main.temp).toFixed(2)+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/hr";
 
    if(data.weather[0].main=="Clouds"){
     weatherIcon.src="clouds.png";
    }
    else if(data.weather[0].main =="Clear"){ 
     weatherIcon.src = "clear.png";
     }  
    else if(data.weather[0].main == "Rain"){ 
     weatherIcon.src = "rain.png";
     }
     else if(data.weather[0].main =="Drizzle"){ 
     weatherIcon.src = "drizzle.png"; I
     }
     else if(data.weather[0].main =="Mist"){
     weatherIcon.src ="mist.png";
     }

     document.querySelector(".error").style.display="none";
   }




}
searchButton.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
