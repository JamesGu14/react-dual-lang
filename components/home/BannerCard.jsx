import React, { Component } from 'react'
import NavLink from '../NavLink.jsx'

export default class Banner extends Component {
  render() {
    return (
      <section className="trd-cta-section">
        <div className="container">
          <div className="row">
            <div className="trd-cta-wrapper">
              <h3>公司主营业务涵盖澳洲<span className="trd-highlight-text">本地连琐超市、便利店，澳洲不动产投资，
              跨境电商以及国际物流</span></h3>
              <NavLink to="/contact" className="trd-btn trd-btn-alt">CONTACT US</NavLink>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
