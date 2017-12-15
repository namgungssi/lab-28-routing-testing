import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Roster from './Roster'
import Schedule from './Schedule'


// Main component renders one of the three
// Routes . Both roster and schedule will match any pathname.
// Will only match when pathname is exactly the string.


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </main>
)


export default Main
