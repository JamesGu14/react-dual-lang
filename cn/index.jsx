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
}
const style2 = {
  textAlign: 'center'
}

class Menu extends Component {
  render () {
    return (
      <div style={style}>
        <h1 style={style2}>站点建设中, 请耐心等待</h1>
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app')
)
