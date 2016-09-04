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
                    <img src="/content/images/testimonials/arnotts.png" alt="arnotts" />
                  </div>

                  <div className="trd-imagebox-details">
                    <h3>
                      <a href="#">Arnotts（雅樂思）</a>
                    </h3>
                    <p>雅樂思成立於1865年，至今已有150多年的歷史。其主要產品為面包，豌豆，脆博餅。
                      多年來一直深受澳洲本地人士喜愛。 尤其是澳洲標誌性零食Tim Tam。</p>
                    <br />
                  </div>
                </div>
              </div>
              {/* End */}

              {/* Imagebox with details */}
              <div className="col-md-4 col-sm-4 col-xs-12 trd-imagebox-with-text-wrapper appear fadeIn" data-wow-duration="1s" data-wow-delay=".5s"
                style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.5s', animationName: 'fadeIn' }}>
                <div className="trd-imagebox-with-text">
                  <div className="trd-image-wrapper">
                    <img src="/content/images/testimonials/cadbury.png" alt="cadbury"/>
                  </div>

                  <div className="trd-imagebox-details">
                    <h3>
                      <a href="#">Cadbury（吉百利）</a>
                    </h3>
                    <p>吉百利史威士股份有限公司（Cadbury Schweppes）是一家國際性公司，
                      集團公司總部位於英國倫敦，主要生產、推廣及分銷糖果（巧克力、糖制糖果、口香糖等）及飲料產品。
                      </p>
                  </div>
                </div>
              </div>
              {/* End */}

              {/* Imagebox with details */}
              <div className="col-md-4 col-sm-4 col-xs-12 trd-imagebox-with-text-wrapper appear fadeIn" data-wow-duration="1s" data-wow-delay=".7s"
                style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.7s', animationName: 'fadeIn' }}>
                <div className="trd-imagebox-with-text">
                  <div className="trd-image-wrapper">
                    <img src="/content/images/testimonials/nippys.png" alt="nippys" />
                  </div>

                  <div className="trd-imagebox-details">
                    <h3>
                      <a href="#">Nippys</a>
                    </h3>
                    <p>Nippy企業時代經營優質飲料，廣受認可。
                      作為南澳洲的標誌企業之一，Nippy希望可以傳承70年的家族歷史，繼續南澳洲最知名的新鮮果汁廠的傳統。
                    </p>
                    <br />
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
