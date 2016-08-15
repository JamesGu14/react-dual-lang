import React, { Component } from 'react'

const divStyle = {
  width: '600px',
  margin: '200px auto 200px auto',
  textAlign: 'center'
}

export default class Products extends Component {
  render() {
    return (
      <div style={divStyle}>
        <h1>我們的產品</h1>
        <h2>該功能正在建設中，歡迎稍後再來。</h2>
      </div>
    )
  }
}
