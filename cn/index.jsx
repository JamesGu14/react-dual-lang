import React, { Component } from 'react'
import { render } from 'react-dom'

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
          <li><a href="#">首页</a></li>
          <li><a href="#">关于我们</a></li>
          <li><a href="#">产品</a></li>
          <li><a href="#">联系我们</a></li>
          <li><a href="/">English</a></li>
        </ul>
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app')
)
