import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import NavLink from './NavLink.jsx'

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
                  <li>
                    <IndexLink to="/" activeClassName="active">Home</IndexLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/products">Products</NavLink>
                  </li>
                  <li>
                    <NavLink to="/services">Services</NavLink>
                    <ul className="trd-dropdown-menu">
                      <li>
                        <NavLink to="/payment">Pay Online</NavLink>
                      </li>
                      <li>
                        <NavLink to="/tracking">Parcel Tracking</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact Us</NavLink>
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