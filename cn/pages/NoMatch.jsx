import React, { Component } from 'react'

const divStyle = {
  width: '600px',
  margin: '200px auto 200px auto',
  textAlign: 'center'
}

export default class NoMatch extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h2>Sorry, the page you are visiting does not exist.</h2>
        <br /><br />
      </div>
    )
  }
}
