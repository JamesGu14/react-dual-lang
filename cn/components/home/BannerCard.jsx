import React, { Component } from 'react'
import NavLink from '../NavLink.jsx'

export default class Banner extends Component {
  render() {
    return (
      <section className="trd-cta-section">
        <div className="container">
          <div className="row">
            <div className="trd-cta-wrapper">
              <h3>公司主營業務涵蓋澳洲<span className="trd-highlight-text">不動產投資管理</span>管理,
                澳洲商品<span className="trd-highlight-text">零售和批發，國際貿易以及B2C國際物流派送</span></h3>
              <NavLink to="/cn/contact" className="trd-btn trd-btn-alt">聯繫我們</NavLink>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
