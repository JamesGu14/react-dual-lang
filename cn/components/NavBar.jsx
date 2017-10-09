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

                <a className="navbar-brand" href="/cn">
                  <img className="logo" src="/content/images/foryoung-logo.png" style={{widht: '132px', height: '48px'}} alt="TRADE" />
                </a>
              </div>

              <div id="nav-menu" className="navbar-collapse trd-menu-wrapper collapse" role="navigation" style={{ maxHeight: '846px' }}>
                <ul className="nav navbar-nav trd-menus">
                  <li>
                    <IndexLink to="/cn/" activeClassName="active" onClick={this.scrollToTop}>首頁</IndexLink>
                  </li>
                  <li>
                    <NavLink to="/cn/about" collapse={true}>關於我們</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cn/foryoung-investment" collapse={true}>我们的業務</NavLink>
                    <ul className="trd-dropdown-menu">
                      <li>
                        <NavLink to="/cn/foryoung-investment" collapse={true}>澳洲飞扬投资有限公司</NavLink>
                      </li>
                      <li>
                        <NavLink to="/cn/foryoung-pty" collapse={true}>澳洲飞扬有限公司</NavLink>
                      </li>
                      <li>
                        <NavLink to="/cn/foryoung-trade" collapse={true}>澳洲飞扬国际贸易有限公司</NavLink>
                      </li>
                    </ul>
                  </li> 
                  <li>
                    <NavLink to="/cn/payment" collapse={true}>服務</NavLink>
                    <ul className="trd-dropdown-menu">
                      <li>
                        <a href="http://www.fyexpress.com.au" collapse={true}>包裹追蹤</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/cn/join" collapse={true}>加盟我們</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cn/contact" collapse={true}>聯繫我們</NavLink>
                  </li>
                  
                  {/*
                  <li>
                    <a href="/">English</a>
                  </li>
                   */}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
