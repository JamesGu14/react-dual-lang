import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NavLink extends Component {
  constructor() {
    super()
    this.scrollToTop = this.scrollToTop.bind(this)
  }
  scrollToTop () { 
    jQuery('html, body').animate({ scrollTop: 0 }, 'slow') 
  }
  render() {
    return <Link {...this.props} activeClassName="active" onClick={this.scrollToTop} />
  }
}
