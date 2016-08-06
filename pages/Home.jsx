import React, { Component } from 'react'
import Banner from '../components/home/Banner.jsx'
import BannerCard from '../components/home/BannerCard.jsx'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <BannerCard />
      </div>
    )
  }
}
