import React from 'react';
import './App.css';
import { Route, Switch, } from 'react-router-dom'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Person from './components/Person'

const App = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/people/:id' component={Person}/>
    <Route component={NoMatch} />
  </Switch>
)

export default App;
