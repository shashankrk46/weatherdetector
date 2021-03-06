// init storage
const storage= new Storage();
// get stored location data
const weatherLocation=storage.getLocationData();

// init weather object
const weather= new Weather(weatherLocation.city,weatherLocation.country);

// init Ui
const ui=new UI();

// get weather on dom load
document.addEventListener('DOMContentLoaded',getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click',()=>{
    const city=document.getElementById('city').value;
    const country=document.getElementById('country').value;
    
    // change location
    weather.changeLocation(city,country);

    // change location in ls
    storage.setLocationData(city,country);

    // get and display weather
    getWeather();

    // close modal
    $('#locModal').modal('hide');
});


function getWeather(){
weather.getWeather()
.then(results=>{
    console.log(results);
    ui.paint(results);
})
.catch(err=>console.log(err))
}