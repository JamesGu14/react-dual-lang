import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <section className="trd-cta-section">
        <div className="container">
          <div className="row">
            <div className="trd-cta-wrapper">
              <h3>We help you to create the best <span className="trd-highlight-text">business</span> plan , resource &amp; execution</h3>
              <a href="#" className="trd-btn trd-btn-alt">Get a Quote</a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
