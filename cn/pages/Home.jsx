import React, { Component } from 'react'

import Banner from '../components/home/Banner.jsx'
import BannerCard from '../components/home/BannerCard.jsx'
import SectionOne from '../components/home/SectionOne.jsx' 
import SectionTwo from '../components/home/SectionTwo.jsx' 


export default class Home extends Component {
  render() {
    return (
      <div>
        <Banner />
        <BannerCard />
        <SectionOne />
        
      </div>
    )
  }
}
