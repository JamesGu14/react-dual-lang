import React, { Component } from 'react'

export default class Health extends Component {
  render() {
    return (
      <div className="trd-about-us-details-section trd-section">
      <br /><br /><br />
        <div className="container">
          <div className="row">
            {/* Image with details */}
            <div className="trd-inner-section">
              <div className="trd-left-half">
              
                <h2 className="trd-content-inner-title">保健品专营店</h2>
                <p>
                OZ Healthy Choice的开业照片 授权书（是众多澳洲化妆品 及保健品知名企业给予我们的信任和支持 
                Swisse Blackmores Healthy care betlife Oz farm GM Sukin 蜂毒系列 ）OZ 作为飞扬国际的子公司致
                力于服务当地华人及本土local 总投资金额超余200万RMB 在其创立之初便收到了当地人群的拥护和喜爱  
                更是作为飞扬国际最为重要的重要物资仓储及物流集运点 目前日均销售额超过6万元RMB 
                </p>
              </div>

              <div className="trd-right-half">
                <div className="trd-image-wrapper">
                  <img src="../../../content/images/imgbox-img-10.jpg" alt="About us" />
                </div>
              </div>
            </div>
            {/* End */}

          </div>
        </div>
      </div>
    )
  }
}
