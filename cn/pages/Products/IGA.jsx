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
                  IGA超市上架產品共有產品1萬余種 飛揚國際正在以每周50種的速度推廣給國內的消費群體 銷售成果非常可觀 
                  截止發稿日 共向國內消費者推出了1000余種當地產品 讓國內的消費者可以足不出戶的享受到和澳洲本土人群壹樣高質 
                  量的生活用品，食品，以及保健產品
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
