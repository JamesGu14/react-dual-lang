import React, { Component } from 'react'

const imgStyle = {
  borderTop: '1px solid #eee',
  borderLeft: '1px solid #eee',
  borderRight: '1px solid #eee'
}

const postStyle = {
  padding: '25px', 
  border: '1px solid #eee', 
  borderTop: 'none',
  minHeight: '400px'
}

class SinglePartner extends Component {
  render() {
    return (
      <div className="col-md-4" style={{ marginBottom: '40px' }}> 
        <div className="trd-post-img-wrapper" style={ imgStyle }>
          <img src={this.props.image} alt="Blog Post Image" />
        </div>
        <div className="trd-post-excerpts" style={ postStyle }>
          <h4>{this.props.name}</h4>
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
            <SinglePartner {...item} />
          )
        })}
      </div>
    )
  }
}
