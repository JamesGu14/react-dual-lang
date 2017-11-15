import React, { Component } from 'react'
import { Link } from 'react-router'
import _ from 'lodash'

export default class NavLink extends Component {
  constructor(props) {
    super(props)
    
    this.scrollToTop = this.scrollToTop.bind(this)
  }
  scrollToTop () { 
    jQuery('html, body').animate({ scrollTop: 0 }, 'slow') 
  }
  scrollToTopAndCollapse () {
    if ($(document).width() < 768) {
      jQuery('.navbar-toggle').click()
    }
    jQuery('html, body').animate({ scrollTop: 0 }, 'slow')
  }
  render() {
    return (
      <Link {...(_.omit(this.props, ['collapse']))} activeClassName="active" 
        onClick={this.props.collapse ? this.scrollToTopAndCollapse : this.scrollToTop } />
    )
  }
}
