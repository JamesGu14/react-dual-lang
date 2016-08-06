import React, { Component } from 'react'

export default class TopBar extends Component {
  render() {
    return (
      <div className="trd-header-topbar">
        <div className="container">
          <div className="row">
            <div className="trd-contact-infos">
              <ul>
                <li className="trd-header-info-phn">03 8888 8888</li>
                <li className="trd-header-info-location">
                  <a href="#" target="_blank">North Terrace, SA 5000</a>
                </li>
              </ul>
            </div>

            <div className="trd-social-links">
              <ul>
                <li className="trd-fb-icon">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="trd-twitter-icon">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="trd-behance-icon">
                  <a href="#">
                    <i className="fa fa-behance"></i>
                  </a>
                </li>
                <li className="trd-dribbble-icon">
                  <a href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
                <li className="trd-vimeo-icon">
                  <a href="#">
                    <i className="fa fa-vimeo"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
