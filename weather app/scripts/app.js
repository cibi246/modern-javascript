const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();


cityForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();

    forecast.updateCity(city).then((data)=>{
        updateUI(data);
    });

    localStorage.setItem('city',city);

});

if(localStorage.getItem('city')){
    forecast.updateCity(localStorage.getItem('city')).then((data)=>{
        updateUI(data);
    })
}

const updateUI = (data)=>{
    console.log('update UI data', data);
    const cityName = data.city;
    const weather = data.weather;

    details.innerHTML = 
    `
    <h5 class="my-3">${cityName.name}</h5>
    <div class="my-3">${weather.condition.text}</div>
    <div class="display-4 my-4">
        <span>${weather.temp_c}</span>
        <span>&deg;C</span>
    </div>
    `;

    const iconSrc = `img/icons/${weather.condition.text}.png`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = null;
    if(weather.is_day){
        timeSrc = 'img/day.svg';
    }else{
        timeSrc = 'img/night.svg';
    }

    time.setAttribute('src', timeSrc);

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

}