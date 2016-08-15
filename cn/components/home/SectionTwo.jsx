import React, { Component } from 'react'
import NavLink from '../NavLink.jsx'

export default class SectionTwo extends Component {
  render() {
    return (
      <section className="trd-key-success-section trd-section trd-gray-section">
        <div className="container">
          <div className="row">
            <div className="trd-section-title-wrapper col-md-12 col-sm-12 col-xs-12">
              <h1 className="trd-section-tittle">查看我們的 <span className="trd-highlight-text">商業夥伴</span></h1>
              <NavLink to="/cn/partner" className="trd-details-link">查看所有</NavLink>
            </div>

            <div className="trd-key-to-success">

              {/* Imagebox with Text */}
              <div className="col-md-4 col-sm-4 col-xs-12 trd-imagebox-with-text-wrapper appear fadeIn" data-wow-duration="1s" data-wow-delay=".3s"
                style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.3s', animationName: 'fadeIn' }}>
                <div className="trd-imagebox-with-text">
                  <div className="trd-image-wrapper">
                    <img src="/content/images/testimonials/iga.png" alt="IGA" />
                  </div>

                  <div className="trd-imagebox-details">
                    <h3>
                      <a href="#">IGA Australia</a>
                    </h3>
                    <p>Checkout and enjoy the biggest explain to you how is mistaken</p>
                  </div>
                </div>
              </div>
              {/* End */}

              {/* Imagebox with details */}
              <div className="col-md-4 col-sm-4 col-xs-12 trd-imagebox-with-text-wrapper appear fadeIn" data-wow-duration="1s" data-wow-delay=".5s"
                style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.5s', animationName: 'fadeIn' }}>
                <div className="trd-imagebox-with-text">
                  <div className="trd-image-wrapper">
                    <img src="/content/images/testimonials/arnotts.png" alt="Arnotts"/>
                  </div>

                  <div className="trd-imagebox-details">
                    <h3>
                      <a href="#">Arnotts</a>
                    </h3>
                    <p>Checkout and enjoy the biggest explain to you how is mistaken</p>
                  </div>
                </div>
              </div>
              {/* End */}

              {/* Imagebox with details */}
              <div className="col-md-4 col-sm-4 col-xs-12 trd-imagebox-with-text-wrapper appear fadeIn" data-wow-duration="1s" data-wow-delay=".7s"
                style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.7s', animationName: 'fadeIn' }}>
                <div className="trd-imagebox-with-text">
                  <div className="trd-image-wrapper">
                    <img src="/content/images/testimonials/karicare.png" alt="Karicare" />
                  </div>

                  <div className="trd-imagebox-details">
                    <h3>
                      <a href="#">Karicare</a>
                    </h3>
                    <p>Checkout and enjoy the biggest explain to you how is mistaken</p>
                  </div>
                </div>
              </div>
              {/* End */}

            </div>
          </div>
        </div>
      </section>
    )
  }
}
