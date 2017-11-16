import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import NavLink from './NavLink.jsx'
import jQuery from 'jquery'

export default class NavBar extends Component {
  constructor() {
    super()
    this.scrollToTop = this.scrollToTop.bind(this)
  }
  scrollToTop () {
    // Extra for main menu. To collapse in mobile view
    if ($(document).width() < 768) {
      jQuery('.navbar-toggle').click()
    }
    jQuery('html, body').animate({ scrollTop: 0 }, 'slow')
  }
  render () {
    return (
      <div className="trd-header-bottombar">
        <nav className="navbar trd-main-menu" role="navigation">
          <div className="container">
            <div className="row">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>

                <a className="navbar-brand" href="/">
                  <img className="logo" src="/content/images/foryoung-logo.png" style={{widht: '132px', height: '48px'}} alt="TRADE" />
                </a>
              </div>

              <div id="nav-menu" className="navbar-collapse trd-menu-wrapper collapse" role="navigation" style={{ maxHeight: '846px' }}>
                <ul className="nav navbar-nav trd-menus">
                  <li>
                    <NavLink to="/about" collapse={true}>ABOUT US</NavLink>
                  </li>
                  <li>
                    <NavLink to="/foryoung-investment" collapse={true}>OUR BUSINESS</NavLink>
                    <ul className="trd-dropdown-menu">
                      <li>
                        <NavLink to="/foryoung-investment" collapse={true}>For Young Investments Pty Ltd</NavLink>
                      </li>
                      <li>
                        <NavLink to="/foryoung-pty" collapse={true}>For Young Pty Ltd</NavLink>
                      </li>
                      <li>
                        <NavLink to="/foryoung-trade" collapse={true}>For Young International Trading Pty Ltd</NavLink>
                      </li>
                    </ul>
                  </li> 
                  {/*<li>
                    <a href="http://www.fyexpress.com.au" collapse={true}>服务</a>
                    <ul className="trd-dropdown-menu">
                      <li>
                        <a href="http://www.fyexpress.com.au" collapse={true}>包裹追踪</a>
                      </li>
                    </ul>
                  </li>*/}
                  {/*<li>
                    <NavLink to="/join" collapse={true}>加盟我们</NavLink>
                  </li>*/}
                  
                  <li>
                    <NavLink to="/sponsor" collapse={true}>INVESTMENT PROGRAMS & EVENTS</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" collapse={true}>CONTACT US</NavLink>
                  </li>
                  
                  <li>
                    <a href="/cn">简体中文</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
