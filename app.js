const ui=new UI();



// init weather object

const climate=new Climate('Bengaluru','IN');
// get climate on dom load
document.addEventListener('DOMContentLoaded',getWeather);

// change location event
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const city=document.getElementById('city').value;
    const country=document.getElementById('country').value;

    climate.changeLocation('Miami','FL');

    // get and display climate 
    getWeather();

    // close modal
    $('#locModla').modal('hide');
});

function getWeather(){
climate.getWeather()
.then(results=>{
   console.log(results);
   ui.paint(results);
})
.catch(err=>{console.log(err)})
}
