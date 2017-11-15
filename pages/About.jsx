import React, { Component } from 'react'
import Banner from '../components/about/Banner.jsx'
import SectionOne from '../components/about/SectionOne.jsx'

export default class About extends Component {
  render() {
    return (
      <div>
        <Banner />
        <SectionOne />
      </div>
    )
  }
}
