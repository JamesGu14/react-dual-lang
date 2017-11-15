import React, { Component } from 'react'


export default class About extends Component {
  render() {
    return (
      <div className="trd-about-us-details-section trd-section">
        <div className="container">
          <div className="row">
            {/* Image with details */}
            <div className="trd-inner-section">
              Established in 2015, For Young Investments Pty Ltd (ACN 609 081 932) is located in Adelaide, capital of South Australia. Our major business activities are Australian real estate investment and management, and Australian goods exportation.<br /><br />
              In the last two years, the company saw fast growth and invested in two sub-subsidiary companies, For Young Pty Ltd (ACN 167 191 200), which is partnered with several Australian chain super markets and convenience stores, and For Young International Trading Pty Ltd (ACN 608 506 592) which incorporates the sectors of health product direct-sale from OZ Health Choice, overseas product purchasing, and international courier business. The company has achieved very good economic result as well as social benefits in the last two years and has become an outstanding company in Adelaide.<br /><br />
              For Young has an excellent management elite and talent team of more than 30 people. Our achievements and success have been reported on headline of The Advertiser, the well-known newspaper in South Australia, as well as the Retail column on NEWS website, which is a leading news website in Australia.<br /><br />
              For Young upholds the following business philosophy - Be honest and faithful, work on our dreams, collaborate and share, and achieve mutual success.<br />
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
