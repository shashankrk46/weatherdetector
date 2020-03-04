class Climate {
    constructor(){
        this.apiKey="f220b62a0064f7bcd297aafd0f501014 ";
        this.city="city";
        this.country="country";
    }
    
    // fetch weather from api
    async getWeather(){
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}`
        );

        const responseData=await response.json();

        return responseData;

    }

    // change weather location

    changeLocation(city,countryCode){
        this.city=city;
        this.countryCode=countryCode;
    }
}
