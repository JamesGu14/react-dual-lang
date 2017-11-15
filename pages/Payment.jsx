import React, { Component } from 'react'

const divStyle = {
  width: '600px',
  margin: '200px auto 200px auto',
  textAlign: 'center'
}

export default class Payment extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h1>在線付款</h1>
        <h2>該功能正在建設中，歡迎稍後再來。</h2>
      </div>
    )
  }
}
