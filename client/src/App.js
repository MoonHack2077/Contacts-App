import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/Login.jsx'
import { Home } from './pages/Home/Home.jsx'

function App() {
  return (
    <Router>     
      <Routes>
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/home" element={ <Home /> } />
      </Routes>       
    </Router>
  );
}

export { App } ;
