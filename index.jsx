import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, NoMatch } from 'react-router'

import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Services from './pages/Services.jsx'
import Payment from './pages/Payment.jsx'
import Tracking from './pages/Tracking.jsx'
import Contact from './pages/Contact.jsx'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Header}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About}></Route>
      <Route path="/products" component={Products}></Route>
      <Route path="/services" component={Services}></Route>
      <Route path="/payment" component={Payment}></Route>
      <Route path="/tracking" component={Tracking}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="*" component={NoMatch}/>
    </Route>
   
  </Router> 
), document.getElementById('app'))
