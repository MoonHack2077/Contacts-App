import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/Login.jsx'
import { Contacts } from './pages/Contacts/Contacts.jsx'
import { SignUp } from './pages/SignUp/SignUp.jsx'

function App() {
  return (
    <Router>     
      <Routes>
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/contacts/:id" element={ <Contacts /> } />
        <Route exact path="/signup" element={ <SignUp /> } />
      </Routes>       
    </Router>
  );
}

export { App } ;
