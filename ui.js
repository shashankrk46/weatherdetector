class UI{
    constructor(){
        this.location=document.getElementById('w-location');
        this.desc=document.getElementById('w-desc');
        this.string=document.getElementById('w-string');
        this.details=document.getElementById('w-details');
        this.icon=document.getElementById('w-icon');
        this.humidity=document.getElementById('w-humidity');
        this.feelsLike=document.getElementById('w-feels-like');
        this.visisbility=document.getElementById('w-dewpoint');
        this.wind=document.getElementById('w-wind');
        
    }
    paint(weather){
        
        this.location.textContent=`${weather.name},${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].main;
        this.visisbility.textContent=`Pressure:${weather.main.pressure}`;
        this.icon.setAttribute(
            'src',
            `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
        );
        this.string.textContent = `Temp:${weather.main.temp} in Kelvin`;
        this.wind.textContent = `Windspeed:${weather.wind.speed}, Deg:${weather.wind.deg}`;
        this.humidity.textContent=`Humidity:${weather.main.humidity}`;
        this.feelsLike.textContent=`Feels-like:${weather.main.feels_like}`;

    }
}