import React, { Component } from 'react'

export default class Join extends Component {
  render() {
    return (
      <section className="gl-page-content-section trd-section">
        <br /><br /><br /><br />
        <div className="container">
          <div className="row">
            
            {/*  ADDRESSES WRAPPER  */}
            <div className="trd-office-addresses-wrapper col-md-3 col-md-offset-1 col-sm-6 col-xs-12">

                {/*  ADDRESSES  */}
                <div className="trd-office-address">
                  <h3 className="trd-office-title">请联系：Nic Li</h3>
                  <ul>
                    <li className="trd-office-phone">(08) 8223 3114</li>
                  </ul>
                </div>
                {/*  END  */}

            </div>
            {/*  End  */}

          </div>
        </div>
      </section>
    )
  }
}
