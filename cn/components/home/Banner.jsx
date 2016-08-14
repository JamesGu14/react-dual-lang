import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <section className="trd-hero-slider-section">
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          </ol>

          {/* Wrapper for slides */}
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="/content/images/slider-img-1.jpg" alt="Banner1" />
            </div>
            <div className="item">
              <img src="/content/images/slider-img-2.jpg" alt="Banner2" />
            </div>
          </div>

          {/* Controls */}
          <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    )
  }
}
