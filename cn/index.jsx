import React, { Component } from 'react'
import { render } from 'react-dom'

export default class App extends Component {
  render () {
    return (
      <Menu />
    )
  }
}

const style = {
  margin: '100px auto 0 auto',
  width: '400px',
  textAlign: 'center'
}
const h1Style = {
  textAlign: 'center'
}
const aStyle = {
  color: '#337ab7',
  textDecoration: 'none'
}

class Menu extends Component {
  render () {
    return (
      <div style={style}>
        <h1 style={h1Style}>站點建設中，請耐心等待</h1>
        <br /><br />
        <a href="/" style={aStyle}>返回英文站 | Go Back to English Site</a>
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app')
)
