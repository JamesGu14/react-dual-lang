import React, { Component } from 'react'


export default class About extends Component {
  render() {
    return (
      <div className="trd-about-us-details-section trd-section">
        <div className="container">
          <div className="row">
            {/* Image with details */}
            <div className="trd-inner-section">
                  澳洲飞扬投资有限公司（For Young Investments Pty Ltd, ACN 609 081 932）成立于2015年，位于澳大利亚南澳洲首府阿德莱德（Adelaide），以经营澳洲不动产投资管理以及澳洲出口贸易等业务为主。<br /><br />
                  公司在短短两年时间里，不断壮大、迅速发展，先后投资控股两家飞扬子公司：以多家澳洲本地连锁超市、便利店为主的澳洲飞扬有限公司（For Young Pty Ltd, ACN 167 191 200 ）. 以OZ Healthy Choice澳洲飞扬保健品直营店，飞扬海外淘以及飞扬国际快递等业务為主的澳洲飞扬国际贸易有限公司 (For Young International Trading Pty Ltd, ACN 608 506 592)。取得很好的经济效益和社会效益。成为阿德莱德的著名公司。<br /><br />
                  澳洲飞扬投资有限公司有着优秀的管理团队，众多的杰出人才，管理精英30余人。所创佳绩被刊登在南澳洲知名传媒报业The Advertiser的报刊头条，以及澳洲知名新闻网站NEWS的Retail专栏上。<br /><br />
                  澳洲飞扬投资有限公司理念：“至诚至信、筑梦未来，同创分享、共赢辉煌”<br />

            </div>
            {/* End */}
            <div className="col-sm-12 col-md-4">
              <img src="/content/images/foryoung1.png" alt="Success Image" />
            </div>
            <div className="col-sm-12 col-md-4">
              <img src="/content/images/foryoung2.png" alt="Success Image" />
            </div>
            <div className="col-sm-12 col-md-4">
              <img src="/content/images/foryoung3.png" alt="Success Image" />
            </div>
            
            <div className="col-12 col-centered" style={{ textAlign: 'center' }}>
              <img src="/content/images/foryoung4.png" alt="Success Image" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
