import React, { Component } from 'react'
import NavLink from './NavLink.jsx'

export default class TopBar extends Component {
  render() {
    return (
      <div className="trd-header-topbar">
        <div className="container">
          <div className="row">
            <div className="trd-contact-infos">
              <ul>
                <li className="trd-header-info-phn">08 8223 3114</li>
                <li className="trd-header-info-location">
                  <NavLink to="/cn/contact">232 HUTT STREET, ADELAIDE SA 5000</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
