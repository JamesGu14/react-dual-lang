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
              <div className="col-md-4 col-sm-6 col-xs-12 trd-footer-widget trd-about-widget">
                <div className="trd-logo-wrapper">
                  <img src="/content/images/foryoung-logo.png" style={{height: '48px', width: '132px'}} alt="Trade" />
                </div>

                <p>澳洲飛揚投資有限公司（For Young Investments  Pty  Ltd， ACN 609 081 932) 是位於澳大利亞南澳州首府阿德萊德（Adelaide）的著名公司。</p>
              </div>

              <div className="col-md-3 col-sm-6 col-xs-12 trd-footer-widget trd-useful-link-widget">
                <h3 className="trd-footer-widget-title">常用鏈接</h3>

                <div className="trd-footer-widget-content">
                  <ul>
                    <li><IndexLink to="/cn/" activeClassName="active" onClick={this.scrollToTop}>首頁</IndexLink></li>
                    <li><NavLink to="/cn/about">關於我們</NavLink></li>
                    <li><NavLink to="/cn/products">我们的業務</NavLink></li>
                    <li><NavLink to="/cn/partner">合作夥伴</NavLink></li>
                    <li><NavLink to="/cn/payment">在線支付</NavLink></li>
                    <li><NavLink to="/cn/tracking">包裹追蹤</NavLink></li>
                    <li><NavLink to="/cn/contact">聯繫我們</NavLink></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-5 col-sm-6 col-xs-12 trd-footer-widget trd-recent-post-widget">
                <h3 className="trd-footer-widget-title">最近更新</h3>

                <div className="trd-footer-widget-content">
                  <div className="trd-recent-post-wrapper">
                    <div className="trd-recent-post-item">
                      <h3 className="trd-post-title">
                        <NavLink to="/cn/about">關於澳洲飛揚投資有限公司</NavLink>
                      </h3>

                      <span className="trd-post-date">August 12, 2016</span>
                    </div>

                    <div className="trd-recent-post-item">
                      <h3 className="trd-post-title">
                        <NavLink to="/cn/partner">我們與超過40家澳洲知名食品及日用品公司確立了長期穩定的供求關係</NavLink>
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
                    <IndexLink to="/cn/" activeClassName="active" onClick={this.scrollToTop}>首頁</IndexLink>
                  </li>
                  <li>
                    <NavLink to="/cn/about">關於我們</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cn/products">我们的業務</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cn/partner">合作夥伴</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cn/payment">在線支付</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cn/tracking">包裹追蹤</NavLink>
                  </li>
                  <li>
                    <NavLink to="/cn/contact">聯繫我們</NavLink>
                  </li>
                  <li>
                    <a href="/">English</a>
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
