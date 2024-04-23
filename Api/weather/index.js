
const show = (data) => {

    let temp = `
    <div class="c-weather">
    <aside class="c-weather__side">
      <figure class="c-weather__side-figure">
        <img src="https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" class="c-weather__side-image">
        <div class="c-weather__side-gradient"></div>
      </figure>
      
      <div class="c-weather__side-content">
        <div class="c-weather__side-date">
          <h2 class="c-weather__side-dayname">Miércoles</h2>
          <div class="c-weather__side-day">15 Nov 2023</div>
          <div class="c-weather__side-location">${data.name}, ${data.sys.country}</div>
        </div>
  
        <div class="c-wather__side-temperature">
          <h1 class="c-weather__side-temp">${Math.round(data.main.temp)}°C</h1>
          <h3 class="c-weather__side-description">${data.weather[0].main}</h3>
        </div>
      </div>
    </aside>
    
    <div class="c-weather__infos">
      <ul class="c-weather__today-list">
        <li class="c-weather__today-item">
          <div class="c-weather__today-item-title">precipitaciones</div>
          <div class="c-weather__today-item-value">0%</div>
        </li>
        
        <li class="c-weather__today-item">
          <div class="c-weather__today-item-title">humidity</div>
          <div class="c-weather__today-item-value">${data.main.humidity}%</div>
        </li>
        
        <li class="c-weather__today-item">
          <div class="c-weather__today-item-title">Wind</div>
          <div class="c-weather__today-item-value">${data.wind.speed} km/h</div>
        </li>
      </ul>
      
      <ul class="c-weather__weeklist">
        <li class="c-weather__weeklist-item is-active">
          <div class="c-weather__weeklist-item-dayname">mie</div>
          <div class="temperature">29°C</div>
        </li>
        
        <li class="c-weather__weeklist-item">
          <div class="c-weather__weeklist-item-dayname">jue</div>
          <div class="c-weather__weeklist-item-temperature">24°C</div>
        </li>
        
        <li class="c-weather__weeklist-item">
          <div class="c-weather__weeklist-item-dayname">vie</div>
          <div class="c-weather__weeklist-item-temperature">24°C</div>
        </li>
        
        <li class="c-weather__weeklist-item">
          <div class="c-weather__weeklist-item-dayname">sab</div>
          <div class="c-weather__weeklist-item-temperature">26°C</div>
        </li>
      </ul>
      
      <div class="c-weather__action">
        <button class="c-weather__action-button" id="location" onclick="handleLocation()" >
          Location
        </button>
      </div>
    </div>
  </div>
  `



    document.getElementById("container").innerHTML = temp

}




const getWeather = async (city) => {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=35a0207691bed57a04b2d7f056f7dd83&q=${city}&units=metric`)
    let data = await res.json()
    show(data)
    console.log(data);


}

const handleData = (e) => {

    e.preventDefault()

    let cityName = document.getElementById("search").value

    console.log(cityName);
    getWeather(cityName)
}


document.getElementById("form").addEventListener("submit", handleData)

getWeather("surat")





const getWeatherByposition = async (lat, long) => {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric`)
    let data = await res.json()
    show(data)
    console.log(data);


}



const handleLocation = () => {


    navigator.geolocation.getCurrentPosition((position) => {

        let lat = position.coords.latitude
        let long = position.coords.longitude

        getWeatherByposition(lat, long)


    })
}

