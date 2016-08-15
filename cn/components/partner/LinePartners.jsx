import React, { Component } from 'react'

class SinglePartner extends Component {
  render() {
    return (
      <div className="col-md-4" style={{ marginBottom: '40px' }}> 
        <div className="trd-post-img-wrapper">
          <img src={this.props.image} alt="Blog Post Image" />
        </div>
        <br />
        <div className="trd-post-excerpts">
          <h5>{this.props.name}</h5>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default class LinePartners extends Component {
  render() {
    return (
      <div className="row">
        {this.props.partners.map(function (item, i) {
          return (
            <SinglePartner image={item.image} name={item.name}
              description={item.description} key={item.key} />
          )
        }) }
      </div>
    )
  }
}
