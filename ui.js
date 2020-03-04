class UI{
    constructor(){
        this.location=document.getElementById('w-location');
        this.desc=document.getElementById('w-desc');
        this.string=document.getElementById('w-string');
        this.details=document.getElementById('w-details');
        this.icon=document.getElementById('w-icon');
        this.humidity=document.getElementById('w-humidity');
        this.feelsLike=document.getElementById('w-feels-like');
        this.dewpoint=document.getElementById('w-dewpoint');
        this.wind=document.getElementById('w-wind');
        
    }
    paint(climate){
        
        this.location.textContent=`${climate.name},${climate.sys.country}`;
        this.desc.textContent = climate.weather[0].main;
        this.icon.textContent=climate.weather.icon;
        this.string.textContent = climate.main.temp;
        this.wind.textContent = `Windspeed:${climate.wind.speed}, Deg:${climate.wind.deg}`;
        this.humidity.textContent=`Humidity:${climate.main.humidity}`;
        this.feelsLike.textContent=`Feels-like:${climate.main.feels_like}`;

    }
}