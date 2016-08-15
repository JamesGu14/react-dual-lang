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
                <p>公司銷售拳頭產品主要包括澳新地區嬰、幼兒配方奶；澳新地區、幼兒配方奶粉、孕婦奶粉、成人奶粉；
                  暢銷保健品；美容護膚產品；澳洲零食；天然蜂蜜產品；純正澳洲燕麥；南澳巴洛薩區產紅酒；
                  澳洲高品質牛羊肉以及各式各樣的澳洲日常用品等。
                </p>
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

                <p>公司擁有南澳州首府阿德萊德（Adelaide)市中心最老牌的IGA連鎖超市（IGA HUTT STREET)和多家便利店，
                  超市上架貨品一萬多種，並且還擁有澳洲著名獨立供貨商Metcash的供貨渠道，
                  其旗下運營的IGA連鎖超市更是遍及世界的獨立運營超市。
                </p>
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

                <p>位於南澳州市中心中國城OZ Healthy Choice (Wright Street) 佔地面積400余平方米，
                  是集產品展示，產品銷售，包裹打包，國際空運派送，客服中心為一體的大型綜合性五六場館。
                </p>
              </div>
            </div>
            {/* End */}
          </div>
        </div>
      </section>
    )
  }
}
