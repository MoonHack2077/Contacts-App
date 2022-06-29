import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import { Login } from './pages/Login/Login.jsx'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={ <Login /> } />
      </Switch>
    </Router>
  );
}

export { App} ;
