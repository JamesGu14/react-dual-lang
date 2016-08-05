import React, { Component } from 'react'
import { render } from 'react-dom'
import Menu from './components/Menu.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
require('./content/index.styl')
injectTapEventPlugin()

export default class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <Menu />
      </MuiThemeProvider>
    )
  }
}

render(
  <App />,
  document.getElementById('app')
)
