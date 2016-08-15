import React, { Component } from 'react'
import SinglePartner from '../components/partner/SinglePartner.jsx'

export default class Partner extends Component {
  render() {
    return (
      <section className="trd-page-contents-wrapper">
        <br /><br /><br /><br />
        <div className="container">
          <div className="row">
            {/*  Page Contents  */}
            <div className="trd-page-contents">
              <div className="trd-blog-post-wrapper" style={{ position: 'relative', height: '2754px' }}>

                {/* Line One */}
                <SinglePartner left="0px" top="0px" image="../../content/images/blog-img-3.jpg" name="Arnotts（雅乐思）"
                  description="雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係" />

                <SinglePartner left="390px" top="0px" image="../../content/images/blog-img-7.jpg" name="Nippys"
                  description="雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係" />

                <SinglePartner left="780px" top="0px" image="../../content/images/blog-img-9.jpg" name="Cadbury（吉百利）"
                  description="雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係" />

                {/* Line Two */}
                <SinglePartner left="0px" top="459px" image="../../content/images/blog-img-3.jpg" name="Kit-Kat（奇巧）"
                  description="雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係" />

                <SinglePartner left="390px" top="459px" image="../../content/images/blog-img-7.jpg" name="Lindts（瑞士莲）"
                  description="雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係" />

                <SinglePartner left="780px" top="459px" image="../../content/images/blog-img-9.jpg" name="Kelloggs（家乐氏）"
                  description="雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係" />

                {/* Line Three */}
                <SinglePartner left="0px" top="918px" image="../../content/images/blog-img-3.jpg" name="Sanitarium（新康立）"
                  description="雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係" />

                <SinglePartner left="390px" top="918px" image="../../content/images/blog-img-7.jpg" name="Morningfresh（洗涤生活用品）"
                  description="雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係" />

                <SinglePartner left="780px" top="918px" image="../../content/images/blog-img-9.jpg" name="Beerenberg（百伦堡）"
                  description="雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係" />

                {/* Line Four */}
                <SinglePartner left="0px" top="1377px" image="../../content/images/blog-img-3.jpg" name="Brita（碧然德）"
                  description="雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係" />

                <SinglePartner left="390px" top="1377px" image="../../content/images/blog-img-7.jpg" name="Heinz（亨氏）"
                  description="雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係" />

                <SinglePartner left="780px" top="1377px" image="../../content/images/blog-img-9.jpg" name="Devondale（德运奶粉）"
                  description="雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係" />

                {/* Line Five */}
                <SinglePartner left="0px" top="1836px" image="../../content/images/blog-img-3.jpg" name="A2奶粉"
                  description="雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係" />

                <SinglePartner left="390px" top="1836px" image="../../content/images/blog-img-7.jpg" name="Bellamy’s（贝拉米）"
                  description="雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係" />

                <SinglePartner left="780px" top="1836px" image="../../content/images/blog-img-9.jpg" name="Karicare（可瑞康）"
                  description="雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係" />

                {/* Line Six */}
                <SinglePartner left="0px" top="2295px" image="../../content/images/blog-img-3.jpg" name="Rafferty’s Garden"
                  description="雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係" />

                <SinglePartner left="390px" top="2295px" image="../../content/images/blog-img-7.jpg" name="Farex"
                  description="雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係" />

                <SinglePartner left="780px" top="2295px" image="../../content/images/blog-img-9.jpg" name="Gaia"
                  description="雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係" />

              </div>
            </div>
          </div>
          {/*  End  */}
        </div>
      </section >
    )
  }
}
