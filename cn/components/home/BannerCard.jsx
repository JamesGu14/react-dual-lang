import React, { Component } from 'react'
import NavLink from '../NavLink.jsx'

export default class Banner extends Component {
  render() {
    return (
      <section className="trd-cta-section">
        <div className="container">
          <div className="row">
            <div className="trd-cta-wrapper">
              <h3>公司主營業務涵蓋澳洲<span className="trd-highlight-text">本地連瑣超市、便利店，澳洲不動產投資，
                跨境電商以及國際物流</span></h3>
              <NavLink to="/cn/contact" className="trd-btn trd-btn-alt">聯繫我們</NavLink>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
