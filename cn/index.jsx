import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Payment from './pages/Payment.jsx'
import Tracking from './pages/Tracking.jsx'
import Contact from './pages/Contact.jsx'
import NoMatch from './pages/NoMatch.jsx' 

render((
  <Router history={browserHistory}>
    <Route path="/cn/" component={App}>
      
      <IndexRoute component={Home} />

      <Route path="/cn/about" component={About}></Route>
      <Route path="/cn/products" component={Products}></Route>
      <Route path="/cn/payment" component={Payment}></Route>
      <Route path="/cn/tracking" component={Tracking}></Route>
      <Route path="/cn/contact" component={Contact}></Route>
      <Route path="*" component={NoMatch}/>
    </Route>
   
  </Router> 
), document.getElementById('app'))
