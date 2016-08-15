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

                <a className="navbar-brand" href="index.html">
                  <img className="logo" src="/content/images/logo-header.png" alt="TRADE" />
                </a>
              </div>

              <div id="nav-menu" className="navbar-collapse trd-menu-wrapper collapse" role="navigation" style={{ maxHeight: '846px' }}>
                <ul className="nav navbar-nav trd-menus">
                  <li>
                    <IndexLink to="/cn/" activeClassName="active" onClick={this.scrollToTop}>首頁</IndexLink>
                  </li>
                  <li>
                    <NavLink to="/cn/about">關於我們</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cn/products#app">產品</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cn/partner#app">合作商家</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cn/payment#app">服務</NavLink>
                    <ul className="trd-dropdown-menu">
                      <li>
                        <NavLink to="/cn/payment#app">在線支付</NavLink>
                      </li>
                      <li>
                        <NavLink to="/cn/tracking#app">包裹追蹤</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/cn/contact#app">聯繫我們</NavLink>
                  </li>
                  <li>
                    <a href="/">English</a>
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