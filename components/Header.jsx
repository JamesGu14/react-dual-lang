import React, { Component } from 'react'
import { render } from 'react-dom'
import TopBar from './TopBar.jsx'
import NavBar from './NavBar.jsx' 

class Header extends Component {
  render() {
    return (
      <header className="trd-header">
        <TopBar />
        <NavBar />
      </header>
    )
  }
}

render(
  <Header />,
  document.getElementById('app-header')
)
