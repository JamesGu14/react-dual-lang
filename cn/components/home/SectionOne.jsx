import React, { Component } from 'react'

export default class SectionOne extends Component {
  render() {
    return (
      <section className="trd-service-section trd-section">
        <div className="container">
          <div className="row">
            {/* About Section */}
            <div className="col-md-3 col-sm-3 col-xs-12 trd-about-section">
              <h1 className="trd-section-tittle">我们致力于带来<br /><span className="trd-highlight-text">更优质的</span>生活</h1>
              <p>日前，随著中澳贸易自由往来的加深，澳洲飞扬国际贸易有限公司致力于国际进出口业务，
              把原本澳洲优良的传统零售业务逐渐面向中国消费市场拓展，将澳洲最优质的产品，以同行业最高的标准以及最优惠的价格，
              让国内广大同胞能够在足不出户的家里安全便携放心快速地享受到与澳洲当地人同样的生活品质。</p>
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
                <p>公司销售拳头产品主要包括澳新地区婴、幼儿配方奶；澳新地区、幼儿配方奶粉、孕妇奶粉、成人奶粉；
                畅销保健品；美容护肤产品；澳洲零食；天然蜂蜜产品；纯正澳洲燕麦；南澳巴洛萨区产红酒；
                澳洲高品质牛羊肉以及各式各样的澳洲日常用品等。
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
                  <a href="#">零售连锁</a>
                </h3>

                <p>公司拥有南澳州首府阿德莱德（Adelaide)市中心最老牌的IGA连锁超市（IGA HUTT STREET)和多家便利店，
                超市上架货品一万多种，并且还拥有澳洲著名独立供货商Metcash的供货渠道，
                其旗下运营的IGA连锁超市更是遍及世界的独立运营超市。
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
                  <a href="#">国际物流业务</a>
                </h3>

                <p>位于南澳州市中心中国城OZ Healthy Choice (Wright Street) 佔地面积400余平方米，
                是集产品展示，产品销售，包裹打包，国际空运派送，客服中心为一体的大型综合性五六场馆。
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
