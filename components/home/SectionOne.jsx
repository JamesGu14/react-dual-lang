import React, { Component } from 'react'

export default class SectionOne extends Component {
  render() {
    return (
      <section className="trd-service-section trd-section">
        <div className="container">
          <div className="row">
            {/* About Section */}
            <div className="col-md-3 col-sm-3 col-xs-12 trd-about-section">
              <h1 className="trd-section-tittle">Let’s make <br />a <span className="trd-highlight-text">better</span> business</h1>
              <p>Checkout and enjoy the bigges free explain to you how mistakn good idea ever made</p>
              <a href="#" className="trd-details-link">Details</a>
            </div>
            {/* End */}

            {/* Icon with text */}
            <div className="col-md-3 col-sm-3 col-xs-12 trd-icon-top-with-text">
              <div className="trd-icon-wrapper">
                <i className="tradeicon-trd-coffee-mug"></i>
              </div>

              <div className="trd-details">
                <h3>
                  <a href="#">Financial Service</a>
                </h3>

                <p>Checkout an enjoy the biggest do our explain to you how an demon proper management</p>
              </div>
            </div>
            {/* End */}

            {/* Icon with text */}
            <div className="col-md-3 col-sm-3 col-xs-12 trd-icon-top-with-text">
              <div className="trd-icon-wrapper">
                <i className="tradeicon-trd-trophy"></i>
              </div>

              <div className="trd-details">
                <h3>
                  <a href="#">Best Consultancy</a>
                </h3>

                <p>Checkout an enjoy the biggest do our explain to you how an demon proper management</p>
              </div>
            </div>
            {/* End */}

            {/* Icon with text */}
            <div className="col-md-3 col-sm-3 col-xs-12 trd-icon-top-with-text">
              <div className="trd-icon-wrapper">
                <i className="tradeicon-trd-chart-board"></i>
              </div>

              <div className="trd-details">
                <h3>
                  <a href="#">Business Analysis</a>
                </h3>

                <p>Checkout an enjoy the biggest do our explain to you how an demon proper management</p>
              </div>
            </div>
            {/* End */}
          </div>
        </div>
      </section>
    )
  }
}
