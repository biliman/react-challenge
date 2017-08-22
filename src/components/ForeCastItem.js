import React from 'react'

class ForeCastItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      humanDate: '',
      centigrade: ''
    }
  }

  componentWillMount () {
    this.setState ({
      humanDate: new Date(this.props.date).toDateString(),
      centigrade: Math.round(this.props.temp - 273)
    })
  }

  render () {
    return (
      <div className="card column is-one-quarter is-offset-6">
        <div className="card-content">
          <p className="title">
            {this.state.humanDate}
          </p>
          <p className="subtitle">
            Kelembaban : {this.props.humidility} %
            Temperatur : {this.state.centigrade} ℃
          </p>
          <p className="subtitle">
            Summary : {this.props.weather}
          </p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <small>Provided by OpenWeatherMap</small>
          </p>
        </footer>
      </div>
    )
  }
}

export default ForeCastItem
