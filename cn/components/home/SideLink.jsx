import React, { Component } from 'react'
import NavLink from '../NavLink.jsx'

export default class SideLink extends Component {
  render() {
    return (
      <div className="sidelink-container">
        
        <ul>
          <li className="dropdown">
            <a href="#" data-toggle="dropdown">First Menu <i className="icon-arrow"></i></a>
            <ul className="dropdown-menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
              <NavLink to="/cn/contact" className="trd-btn trd-btn-alt">聯繫我們</NavLink>
            </ul>
          </li>
        </ul>
        <script src="/content/js/vendors/sidelink.js"></script>
      </div>
    )
  }
}
