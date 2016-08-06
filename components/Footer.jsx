import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import NavLink from './NavLink.jsx'

import TopBar from './TopBar.jsx'
import NavBar from './NavBar.jsx' 
import Home from '../pages/Home.jsx'

export default class Header extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="trd-footer-top">
              <div className="col-md-3 col-sm-6 col-xs-12 trd-footer-widget trd-about-widget">
                <div className="trd-logo-wrapper">
                  <img src="/content/images/logo-footer.png" alt="Trade" />
                </div>

                <p>Checkout and enjoy the biggest eco free explain you how an mistaken even some others me people expect better for
                  proper management system are good idea ever made</p>
              </div>

              <div className="col-md-3 col-sm-6 col-xs-12 trd-footer-widget trd-useful-link-widget">
                <h3 className="trd-footer-widget-title">Useful Link</h3>

                <div className="trd-footer-widget-content">
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Recent term</a></li>
                    <li><a href="#">History</a></li>
                    <li><a href="#">History</a></li>
                    <li><a href="#">Career goal</a></li>
                    <li><a href="#">Management</a></li>
                    <li><a href="#">Company info</a></li>
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Process</a></li>
                    <li><a href="#">Marketing</a></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 col-xs-12 trd-footer-widget trd-recent-post-widget">
                <h3 className="trd-footer-widget-title">Recent Post</h3>

                <div className="trd-footer-widget-content">
                  <div className="trd-recent-post-wrapper">
                    <div className="trd-recent-post-item">
                      <h3 className="trd-post-title">
                        <a href="#">Financial express anounced the share list from candites</a>
                      </h3>

                      <span className="trd-post-date">April 25, 2016</span>
                    </div>

                    <div className="trd-recent-post-item">
                      <h3 className="trd-post-title">
                        <a href="#">Financial express anounced the share list from candites</a>
                      </h3>

                      <span className="trd-post-date">April 25, 2016</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 col-xs-12 trd-footer-widget trd-subscribe-widget">
                <h3 className="trd-footer-widget-title">Subscribe</h3>

                <div className="trd-footer-widget-content">
                  <p>Checkout and enjoy the biggest eco free explain you how </p>

                  <form action="#">
                    <input type="email" name="trd-subscription" id="trd-subscription" placeholder="Your email" />
                    <button type="submit" className="trd-btn">Submit</button>
                  </form>
                </div>
              </div>
            </div>

            <div className="trd-footer-bottom">
              <div className="trd-footer-menu">
                <ul>
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
                    <NavLink to="/payment">Pay Online</NavLink>
                  </li>
                  <li>
                    <NavLink to="/tracking">Parcel Tracking</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                  </li>
                  <li>
                    <a href="/cn">繁體中文</a>
                  </li>
                </ul>
              </div>

              <div className="trd-copyright-info">
                <p>Copyright © 2016 by <a href="#" className="trd-author-link">James Gu</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
