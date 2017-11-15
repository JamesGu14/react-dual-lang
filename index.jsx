import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Partner from './pages/Partner.jsx'
import Payment from './pages/Payment.jsx'
import Tracking from './pages/Tracking.jsx'
import NoMatch from './pages/NoMatch.jsx'
import Contact from './pages/Contact.jsx'  
import Join from './pages/Join.jsx' 
import Sponsor from './pages/Sponsor.jsx'

import ForyoungInvestment from './pages/Business/ForyoungInvestment.jsx'
import ForyoungPty from './pages/Business/ForyoungPty.jsx'
import ForyoungTrade from './pages/Business/ForyoungTrade.jsx'

import Health from './pages/Products/Health.jsx'
import IGA from './pages/Products/IGA.jsx'
import Investments from './pages/Products/Investments.jsx'
import Logistics from './pages/Products/Logistics.jsx'
import Overseas from './pages/Products/Overseas.jsx'
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      
      <IndexRoute component={About} />

      <Route path="/about" component={About}></Route>
      <Route path="/products" component={Products}></Route>
      <Route path="/partner" component={Partner}></Route>
      <Route path="/payment" component={Payment}></Route>
      <Route path="/tracking" component={Tracking}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/sponsor" component={Sponsor}></Route>
      <Route path="/join" component={Join}></Route>

      {/*
      <Route path="/health" component={Health}></Route>
      <Route path="/IGA" component={IGA}></Route>
      <Route path="/investments" component={Investments}></Route>
      <Route path="/logistics" component={Logistics}></Route>
      */}

      <Route path="/foryoung-investment" component={ForyoungInvestment}></Route>
      <Route path="/foryoung-pty" component={ForyoungPty}></Route>
      <Route path="/foryoung-trade" component={ForyoungTrade}></Route>
      
      <Route path="/overseas" component={Overseas}></Route>
      <Route path="*" component={NoMatch}/>
    </Route>
   
  </Router> 
), document.getElementById('app'))
