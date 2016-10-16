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
                  OZ Healthy Choice的開業照片 授權書（是眾多澳洲化妝品 及保健品知名企業給予我們的信任和支持 
                  Swisse Blackmores Healthy care betlife Oz farm GM Sukin 蜂毒系列 ）OZ 作為飛揚國際的子公司致
                  力於服務當地華人及本土local 總投資金額超余200萬RMB 在其創立之初便收到了當地人群的擁護和喜愛  
                  更是作為飛揚國際最為重要的重要物資倉儲及物流集運點 目前日均銷售額超過6萬元RMB 
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
