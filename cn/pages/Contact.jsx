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


            <div className="trd-contact-form-wrapper col-md-6 col-sm-6 col-xs-12">


              <div><iframe width="100%" height="400" frameBorder="0" src="http://www.bing.com/maps/embed/viewer.aspx?v=3&amp;cp=-34.933102~138.612537&amp;lvl=12&amp;sty=r&amp;typ=d&amp;pp=~~-34.933093~138.612440&amp;ps=&amp;dir=0&amp;mkt=en-us&amp;src=SHELL&amp;form=BMEMJS"></iframe></div>
            </div>


            {/*  ADDRESSES WRAPPER  */}
            <div className="trd-office-addresses-wrapper col-md-4 col-md-offset-1 col-sm-6 col-xs-12">

                {/*  ADDRESSES  */}
                <div className="trd-office-address">
                  <h3 className="trd-office-title">阿德莱德</h3>
                  <ul>
                    <li className="trd-office-location">地址: 232 Hutt Street, Adelaide, South Australia, Australia</li>
                    <li className="trd-office-phone">电话号码: +61 (08) 8223 3114</li>
                    <li className="">传真号码: +61 (08) 8223 2574</li>
                    <li className="trd-office-phone">飞扬投资集团官网: www.foryoung.com.au</li>
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
