import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import NavLink from './NavLink.jsx'

import TopBar from './TopBar.jsx'
import NavBar from './NavBar.jsx'
import Home from '../pages/Home.jsx'

export default class Header extends Component {
  constructor() {
    super()
    this.scrollToTop = this.scrollToTop.bind(this)
  }
  scrollToTop () { 
    jQuery('html, body').animate({ scrollTop: 0 }, 'slow') 
  }
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="trd-footer-top">
              <div className="col-md-3 col-sm-6 col-xs-12 trd-footer-widget trd-about-widget">
                <div className="trd-logo-wrapper">
                  <img src="/content/images/foryoung-logo.png" style={{height: '48px', width: '132px'}} alt="Trade" />
                </div>

                <p>For Young Investments Pty Ltd (ACN 609 081 932) is an outstanding company based in Adelaide, capital of South Australia.</p>
              </div>

              <div className="col-md-5 col-sm-6 col-xs-12 trd-footer-widget trd-useful-link-widget">
                <h3 className="trd-footer-widget-title">Frequent Links</h3>

                <div className="trd-footer-widget-content">
                  <ul>
                    {/*<li><IndexLink to="/" activeClassName="active" onClick={this.scrollToTop}>首页</IndexLink></li>*/}
                    <li><NavLink to="/about">ABOUT US</NavLink></li>
                    <li>
                      <NavLink to="/foryoung-investment">For Young Investments Pty Ltd</NavLink>
                    </li>
                    <li><NavLink to="/sponsor">INVESTMENT PROGRAMS & EVENTS</NavLink></li>
                    <li>
                      <NavLink to="/foryoung-pty">For Young Pty Ltd</NavLink>
                    </li>
                    <li><NavLink to="/contact">CONTACT US</NavLink></li>
                    <li>
                      <NavLink to="/foryoung-trade">For Young International Trading Pty Ltd</NavLink>
                    </li>
                    <li><a href="/cn">简体中文</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12 trd-footer-widget trd-recent-post-widget">
                <h3 className="trd-footer-widget-title">Latest Updates</h3>

                <div className="trd-footer-widget-content">
                  <div className="trd-recent-post-wrapper">
                    <div className="trd-recent-post-item">
                      <h3 className="trd-post-title">
                        <NavLink to="/about">About For Young Investments Pty Ltd</NavLink>
                      </h3>

                      <span className="trd-post-date">August 12, 2016</span>
                    </div>

                    <div className="trd-recent-post-item">
                      <h3 className="trd-post-title">
                        <NavLink to="/partner">We have established long-term business relationship with more than 40 well-known Australian food and consumer goods companies.</NavLink>
                      </h3>

                      <span className="trd-post-date">August 15, 2016</span>
                    </div>
                  </div>
                </div>
              </div>
              {/*
              <div className="col-md-3 col-sm-6 col-xs-12 trd-footer-widget trd-subscribe-widget">
                <h3 className="trd-footer-widget-title">訂閱我們</h3>

                <div className="trd-footer-widget-content">
                  <p>訂閱我們的最新消息，以及各種優惠的商業活動 </p>

                  <form action="#">
                    <input type="email" name="trd-subscription" id="trd-subscription" placeholder="您的郵箱" />
                    <button type="submit" className="trd-btn">訂閱郵件</button>
                  </form>
                </div>
              </div>
              */}
            </div>

            <div className="trd-footer-bottom">
              <div className="trd-footer-menu">
                <ul>
                  <li>
                    <NavLink to="/about">ABOUT US</NavLink>
                  </li>
                  <li>
                    <NavLink to="/foryoung-investment">OUR BUSINESS</NavLink>
                  </li>
                  <li>
                    <NavLink to="/sponsor">INVESTMENT PROGRAMS & EVENTS</NavLink>
                  </li> 
                  <li>
                    <NavLink to="/contact">CONTACT US</NavLink>
                  </li>
                  <li>
                    <a href="/cn">简体中文</a>
                  </li>
                </ul>
              </div>

              <div className="trd-copyright-info">
                <p>Copyright © 2016 by <a href="#" className="trd-author-link">For Young Investments Pty Ltd</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
