import React from 'react';
import './App.css';
import Search from './components/search/Search.js';

function App() {
  const [location, setLocation] = React.useState({
    lat: null,
    long: null
  })

  const [weather, setWeather] = React.useState(null)

  const handleOnSearchChange = (searchData) => {
    const info = searchData.value.split(" ")
    setLocation({
      lat: info[0],
      long: info[1]
    })
    console.log(searchData)
  }

  React.useEffect(() => {
    if (location.lat) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&units=metric&appid=c539214a053efece4f27af2147b55fea`)
        .then(response => response.json())
        .then(data => setWeather(data))
        .catch(error => console.error(error));
    }
  }, [location])

  React.useEffect(() => {
    if (weather) {
      console.log(weather)
    }
  }, [weather])

  return (
    <div className="Search">
      <Search onSearchChange={handleOnSearchChange} />

      {
        weather ? 
        (<div id="weather_wrapper">
        <div className="weatherCard">
          <div className="currentTemp">
            <span className="temp">{weather.main.temp}&deg;</span>
            <span className="location">{weather.name}</span>
          </div>
          <div className="currentWeather">
            <span className="conditions">&#xf00d;</span>
            <div className="info">
              <span className="rain">{weather.main.humidity}</span>
              <span className="wind">{weather.wind.speed} KMPH</span>
            </div>
          </div>
        </div>
      </div>)
      :
      (<p>Search Your City</p>)
      }

    </div>
  );
}

export default App;
