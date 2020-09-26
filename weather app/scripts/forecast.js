class Forecast{
    constructor(){
        this.key = "0b19a1bdd9eb47eeb2c155949201309";
        this.forecastAPI = "https://api.weatherapi.com/v1/forecast.json";
    }

    async updateCity(city){
        const response = await this.getCity(city);

        return {
            city: response.location,
            weather: response.current
        };
    }

    async getCity(city){
        const queryParams = `?key=${this.key}&q=${city}`;

        const response = await fetch(this.forecastAPI + queryParams);
        return response.json();
    }
}
