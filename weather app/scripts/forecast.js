const API_KEY = "0b19a1bdd9eb47eeb2c155949201309";

const getCity = async(city) =>{
    const base="https://api.weatherapi.com/v1/forecast.json";
    const queryParams = `?key=${API_KEY}&q=${city}`;

    const response = await fetch(base + queryParams);
    return  data = response.json();
};

const result = getCity("Manchester").then(data =>{
    console.log(data)
});
console.log(result);