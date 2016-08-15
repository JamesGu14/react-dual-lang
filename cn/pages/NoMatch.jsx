import React, { Component } from 'react'

const divStyle = {
  width: '600px',
  margin: '200px auto 200px auto',
  textAlign: 'center'
}

export default class NoMatch extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h2>對不起，您所訪問的頁面不存在</h2>
        <br /><br />
      </div>
    )
  }
}
