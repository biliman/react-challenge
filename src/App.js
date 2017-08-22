import React from 'react';
import Header from './components/Header'
import WeatherContent from './components/WeatherContent'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="columns">
          <div className="field column is-offset-4 is-4">
            <label className="label">Nama Kota</label>
            <p className="control">
              <input className="input" type="text" placeholder="Nama Kota" />
            </p>
          </div>
        </div>
        <WeatherContent />
      </div>
    );
  }
}

export default App;
