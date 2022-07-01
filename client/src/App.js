import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/Login.jsx'
import { Contacts } from './pages/Contacts/Contacts.jsx'

function App() {
  return (
    <Router>     
      <Routes>
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/contacts/:id" element={ <Contacts /> } />
      </Routes>       
    </Router>
  );
}

export { App } ;
