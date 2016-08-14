import React, { Component } from 'react'

export default class SectionOne extends Component {
  render() {
    return (
      <section className="trd-service-section trd-section">
        <div className="container">
          <div className="row">
            {/* About Section */}
            <div className="col-md-3 col-sm-3 col-xs-12 trd-about-section">
              <h1 className="trd-section-tittle">我們致力於帶來<br /><span className="trd-highlight-text">更優質的</span>生活</h1>
              <p>随着中澳贸易自由往来的加深，澳洲飞扬投资有限公司致力于国际进出口业务，
                把原本澳洲优良的传统零售业务逐渐向中国消费市场拓展，将澳洲最优质的产品，
                以同行业最高的标准、最优惠的价格，让国内广大同胞能够在足不出户的家里安全、
                便携、放心、快速地享受到与澳洲当地人同样的生活品质。</p>
            </div>
            {/* End */}

            {/* Icon with text */}
            <div className="col-md-3 col-sm-3 col-xs-12 trd-icon-top-with-text">
              <div className="trd-icon-wrapper">
                <i className="tradeicon-trd-coffee-mug"></i>
              </div>

              <div className="trd-details">
                <h3>
                  <a href="#">澳洲商品</a>
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
                  <a href="#">零售連鎖</a>
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
                  <a href="#">國際物流業務</a>
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
