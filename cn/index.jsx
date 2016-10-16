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

import Health from './pages/Products/Health.jsx'
import IGA from './pages/Products/IGA.jsx'
import Investments from './pages/Products/Investments.jsx'
import Logistics from './pages/Products/Logistics.jsx'
import Overseas from './pages/Products/Overseas.jsx'
render((
  <Router history={browserHistory}>
    <Route path="/cn/" component={App}>
      
      <IndexRoute component={Home} />

      <Route path="/cn/about" component={About}></Route>
      <Route path="/cn/products" component={Products}></Route>
      <Route path="/cn/partner" component={Partner}></Route>
      <Route path="/cn/payment" component={Payment}></Route>
      <Route path="/cn/tracking" component={Tracking}></Route>
      <Route path="/cn/contact" component={Contact}></Route>
      <Route path="/cn/join" component={Join}></Route>
      <Route path="/cn/health" component={Health}></Route>
      <Route path="/cn/IGA" component={IGA}></Route>
      <Route path="/cn/investments" component={Investments}></Route>
      <Route path="/cn/logistics" component={Logistics}></Route>
      <Route path="/cn/overseas" component={Overseas}></Route>
      <Route path="*" component={NoMatch}/>
    </Route>
   
  </Router> 
), document.getElementById('app'))
