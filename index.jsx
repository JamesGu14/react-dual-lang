import React, { Component } from 'react'
import { render } from 'react-dom'
require('./content/index.styl')

export default class App extends Component {
  render () {
    return (
      <Menu />
    )
  }
}

class Menu extends Component {
  render () {
    return (
      <div className="menu">
        <ul className="menu-ul">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="/cn">繁体中文</a></li>
        </ul>
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app')
)
