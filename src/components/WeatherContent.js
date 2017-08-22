import React from 'react'
import axios from 'axios'

import Forecasts from './Forecasts'

class WeatherContent extends React.Component {
  constructor() {
    super()
    this.state = {
      city: '',
      humidity: '',
      temp: '',
      weather: ''
    }

    this.getWeather = this.getWeather.bind(this)
  }

  getWeather (data) {
    this.setState({
      city: data.name,
      humidity: data.main.humidity,
      temp: Math.round(data.main.temp - 273),
      weather: data.weather[0].description
    })
  }

  componentDidMount () {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Jakarta&APPID=f6eb4f10fad258d5d6113edee834ba57')
    .then(response => {
      this.getWeather(response.data)
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <div className="columns">
          <h1 className="column is-offset-one-quarter is-one-quarter">Cuaca Hari Ini</h1>
          <div className="card column is-one-quarter">
            <div className="card-content">
              <p className="title">
                {this.state.city}
              </p>
              <p className="subtitle">
                Kelembaban : {this.state.humidity} %
                Temperatur : {this.state.temp} ℃
              </p>
              <p className="subtitle">
                Summary: {this.state.weather}
              </p>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <small>Provided by OpenWeatherMap</small>
              </p>
            </footer>
          </div>
        </div>
        <div className="columns">
          <Forecasts />
        </div>
      </div>
    )
  }
}

export default WeatherContent
