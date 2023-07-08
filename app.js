window.addEventListener('load',()=>{
let long;
let lat;
let temperatureDescription=document.querySelector('.temperature-description');
let temperatureDegree=document.querySelector('.temperature-degree');
let locationTimezone=document.querySelector('.location-timezone');
if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(position=>{
    longi=position.coords.longitude;
    lati=position.coords.latitude;
    const api = 'https://api.openweathermap.org/data/2.5/weather?lat=6.991859&lon=21.515544&appid=725e112d08f00b4d4c9d5a20ee2b8fa0';

    fetch(api)
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            console.log(data);
            const {temp}=data.main;
            const {description}=data.weather[0];
            const{name}=data;
            //Set DOM Elements From API
            temperatureDegree.textContent=temp;
            temperatureDescription.textContent=description;
            locationTimezone.textContent=name;
        });
    });


}
});