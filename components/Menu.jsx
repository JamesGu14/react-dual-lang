import React, { Component } from 'react'
import { AppBar } from 'material-ui'

export default class Menu extends Component {
  render () {
    return (
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    )
  }
}
