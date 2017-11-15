import React, { Component } from 'react'
import NavLink from '../NavLink.jsx'

export default class SideLink extends Component {
  render() {
    return (
      <div className="sidelink-container">
        <ul>
          <li className="sidelink-dropdown">
            <a href="#" className="hide-link" id="hide-sidelink">&nbsp;&nbsp;隐藏</a>
            <a href="#" data-toggle="sidelink-dropdown">快速联系</a>
            <ul className="sidelink-dropdown-menu show">
              <li><a href="#">在线客服</a></li>
              <li><a href="#">客服电话</a></li>
              <li><a href="#">官方二维码</a></li>
              <li><a href="#">活动新闻</a></li>
              <li><a href="#">商业客户</a></li>
              <li><a href="#">网点联系</a></li>
              <li><a href="#" className="sidelink-footer">返回顶部</a></li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}
