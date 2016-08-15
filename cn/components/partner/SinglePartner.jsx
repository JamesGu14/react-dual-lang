import React, { Component } from 'react'

export default class SinglePartner extends Component {
  render() {
    return (
      <div className="trd-blog-posts col-md-4 col-sm-4 col-xs-12" style={{ position: 'absolute', left: this.props.left, top: this.props.top }}>
        <div className="trd-post-img-wrapper">
          <img src={this.props.image} alt="Blog Post Image" />
        </div>

        <div className="trd-post-excerpts">
          <h3>
            <a href="#">{this.props.name}</a>
          </h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}
