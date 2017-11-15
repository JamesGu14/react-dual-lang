import React, { Component } from 'react'

export default class Logistics extends Component {
  render() {
    return (
      <div className="trd-about-us-details-section trd-section">
      <br /><br /><br />
        <div className="container">
          <div className="row">
            {/* Image with details */}
            <div className="trd-inner-section">
              <div className="trd-left-half">
                <h2 className="trd-content-inner-title">飞扬国际物流</h2>
                <p>
                  飛揚國際物流（For Young Investments Pty Ltd),作為飛揚國際總部分公司建立於2015年12月份，
                  正式投入使用於2016年10月，籌備時間達壹年之久，洽談對象包括中外著名企業如澳大利亞郵政（AU POST），
                  DHL，TNT，順豐速遞，圓通速遞，韻達速遞，EMS，並與廣州諸多具有優異實力的清關公司建立了長久合作的戰
                  略合作關系。作為澳洲本土直郵市場的後來者，飛揚國際速遞擁有自己獨立完善的物流後臺系統，倉儲管理系統，
                  零售系統，航空訂艙系統，全自動流水線。飛揚國際物流作為澳洲位數不多能做到國內獨立關口清關的物流公司，
                  有能力承運進出口大宗訂艙，貨物配送，機場轉運，報關清關，國內優質物流轉運配送，全程無憂售後服務等壹系列配套服務。
                </p>
              </div>

              <div className="trd-right-half">
                <div className="trd-image-wrapper">
                  <img src="../../../content/images/about-us.jpg" alt="About us" />
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
