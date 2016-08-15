import React, { Component } from 'react'
import LinePartners from '../components/partner/LinePartners.jsx'

export default class Partner extends Component {
  render() {
    return (
      <section className="trd-page-contents-wrapper">
        <br /><br /><br /><br />
        <div className="container">
          <div className="row">
            {/*  Page Contents  */}
            <div className="trd-page-contents">
              <div className="trd-blog-post-wrapper">

                <LinePartners partners={[
                  { 
                    key: 1,
                    image: '../../content/images/blog-img-3.jpg',
                    name: 'Arnotts（雅乐思）',
                    description: '雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係'
                  },
                  {
                    key: 2,
                    image: '../../content/images/blog-img-7.jpg',
                    name: 'Nippys',
                    description: '雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係'
                  },
                  {
                    key: 3,
                    image: '../../content/images/blog-img-9.jpg',
                    name: 'Cadbury（吉百利）',
                    description: '雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係'
                  }
                ]} />

                <LinePartners partners={[
                  { 
                    key: 4,
                    image: '../../content/images/blog-img-3.jpg',
                    name: 'Kit-Kat（奇巧）',
                    description: '雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係'
                  },
                  {
                    key: 5,
                    image: '../../content/images/blog-img-7.jpg',
                    name: 'Lindts（瑞士莲）',
                    description: '雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係'
                  },
                  {
                    key: 6,
                    image: '../../content/images/blog-img-9.jpg',
                    name: 'Kelloggs（家乐氏）',
                    description: '雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係'
                  }
                ]} />

                <LinePartners partners={[
                  { 
                    key: 7,
                    image: '../../content/images/blog-img-3.jpg',
                    name: 'Sanitarium（新康立）',
                    description: '雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係'
                  },
                  {
                    key: 8,
                    image: '../../content/images/blog-img-7.jpg',
                    name: 'Morningfresh（洗涤生活用品）',
                    description: '雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係'
                  },
                  {
                    key: 9,
                    image: '../../content/images/blog-img-9.jpg',
                    name: 'Beerenberg（百伦堡）',
                    description: '雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係'
                  }
                ]} />

                <LinePartners partners={[
                  { 
                    key: 10,
                    image: '../../content/images/blog-img-3.jpg',
                    name: 'Brita（碧然德）',
                    description: '雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係'
                  },
                  {
                    key: 11,
                    image: '../../content/images/blog-img-7.jpg',
                    name: 'Heinz（亨氏）',
                    description: '雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係'
                  },
                  {
                    key: 12,
                    image: '../../content/images/blog-img-9.jpg',
                    name: 'Devondale（德运奶粉）',
                    description: '雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係'
                  }
                ]} />

                <LinePartners partners={[
                  { 
                    key: 13,
                    image: '../../content/images/blog-img-3.jpg',
                    name: 'A2奶粉',
                    description: '雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係'
                  },
                  {
                    key: 14,
                    image: '../../content/images/blog-img-7.jpg',
                    name: 'Bellamy’s（贝拉米）',
                    description: '雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係'
                  },
                  {
                    key: 15,
                    image: '../../content/images/blog-img-9.jpg',
                    name: 'Karicare（可瑞康）',
                    description: '雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係'
                  }
                ]} />

                <LinePartners partners={[
                  { 
                    key: 16,
                    image: '../../content/images/blog-img-3.jpg',
                    name: 'Rafferty’s Garden',
                    description: '雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係'
                  },
                  {
                    key: 17,
                    image: '../../content/images/blog-img-7.jpg',
                    name: 'Farex',
                    description: '雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係'
                  },
                  {
                    key: 18,
                    image: '../../content/images/blog-img-9.jpg',
                    name: 'Gaia',
                    description: '雅樂思是一個非常有名的公司，並且和我們有著密切的合作關係'
                  }
                ]} />
                
              </div>
            </div>
          </div>
          {/*  End  */}
        </div>
      </section >
    )
  }
}
