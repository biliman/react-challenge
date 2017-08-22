import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <h1 style={{ textAlign: 'center', fontSize: '4em'}}>
            Weather Forecast
          </h1>
        </div>
      </div>
    )
  }
}

export default Header
