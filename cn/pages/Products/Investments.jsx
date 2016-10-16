import React, { Component } from 'react'

export default class Investments extends Component {
  render() {
    return (
      <div className="trd-about-us-details-section trd-section">
      <br /><br /><br />
        <div className="container">
          <div className="row">
            {/* Image with details */}
            <div className="trd-inner-section">
              <div className="trd-left-half">
                <div className="trd-image-wrapper">
                  <img src="../../../content/images/category-img-2.jpg" alt="About us" />
                </div>
              </div>

              <div className="trd-right-half">
                <h2 className="trd-content-inner-title">不動產投資</h2>
                <p>
                  商業地產投資 232 Hutt St Adelaide 飛揚國際擁有飛揚國際總部IGA 所在商業地產 於2014年投資完畢 
                  總投資金額超1000萬RMB與澳洲優秀銀行NAB以及聞名全澳的貸款公司RAMS建立了良好的合作關系
                </p>
                <br />
                <p>
                  海外投資（分個人投資 和開發商海外投資） 飛揚國際致力於幫助有想法 有遠見的國人進行海外自住房和投資
                  房進行完善的投資和管理，我們擁有優秀的團隊為澳洲本土人群，海外開發商，和個人團體投資進行項目策劃到後
                  期推廣的全方位頂級服務
                </p>
              </div>
            </div>
            {/* End */}

          </div>
        </div>
      </div>
    )
  }
}
