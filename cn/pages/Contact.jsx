import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <section className="gl-page-content-section trd-section">
        <br /><br /><br /><br />
        <div className="container">
          <div className="row">
            {/*  Contact Form  */}
            {/*
            <div className="trd-contact-form-wrapper col-md-6 col-sm-6 col-xs-12">
              <h1 className="trd-section-tittle">聯繫 <span className="trd-highlight-text">我們</span></h1>

              <form action="#">
                <input type="text" name="trd-name" id="trd-name" placeholder="姓名" />
                <input type="email" name="trd-email" id="trd-email" placeholder="電子郵件" />
                <textarea name="trd-message" id="trd-message" cols="30" rows="7" placeholder="聯繫內容"></textarea>

                <button type="submit" className="trd-btn">提交</button>
              </form>
            </div>
            */}
            {/*  END  */}

            {/*  ADDRESSES WRAPPER  */}
            <div className="trd-office-addresses-wrapper col-md-6 col-md-offset-3 col-sm-6 col-xs-12">

              <div className="trd-column col-md-6 col-sm-12 col-xs-12">
                {/*  ADDRESSES  */}
                <div className="trd-office-address">
                  <h3 className="trd-office-title">阿德萊德</h3>
                  <ul>
                    <li className="trd-office-location">232 Hutt St, Adelaide SA 5000</li>
                    <li className="trd-office-phone">(08) 8223 3114</li>
                  </ul>
                </div>
                {/*  END  */}

              </div>
            </div>
            {/*  End  */}
          </div>
        </div>
      </section>
    )
  }
}
