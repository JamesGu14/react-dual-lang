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
                <h2 className="trd-content-inner-title">IGA</h2>
                <p>
                IGA超市上架产品共有产品1万余种 飞扬国际正在以每周50种的速度推广给国内的消费群体 销售成果非常可观 
                截止发稿日 共向国内消费者推出了1000余种当地产品 让国内的消费者可以足不出户的享受到和澳洲本土人群一样高质 
                量的生活用品，食品，以及保健产品
                </p>
                <br />
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
