import React, { Component } from 'react'

import TopBar from './TopBar.jsx'
import NavBar from './NavBar.jsx' 
import Home from '../pages/Home.jsx'
import Footer from './Footer.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
        <header className="trd-header">
          <TopBar />
          <NavBar />
        </header>
        {this.props.children || <Home/>}
        <Footer />
      </div>
    )
  }
}
