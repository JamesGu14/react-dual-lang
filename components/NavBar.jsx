import React, { Component } from 'react'

export default class NavBar extends Component {
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

              <div id="nav-menu" className="navbar-collapse trd-menu-wrapper collapse" role="navigation" style={{maxHeight: '846px'}}>
                <ul className="nav navbar-nav trd-menus">
                  <li className="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about-us.html">About</a>
                  </li>
                  <li>
                    <a href="products.html">Products</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                    <ul className="trd-dropdown-menu">
                      <li>
                        <a href="financial-service.html">Pay Online</a>
                      </li>
                      <li>
                        <a href="business-plan.html">Parcel Tracking</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="/cn">繁體中文</a>
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