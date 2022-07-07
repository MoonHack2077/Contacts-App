import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './pages/Login.jsx'
import { Contacts } from './pages/Contacts.jsx'
import { SignUp } from './pages/SignUp.jsx'

function App() {
  return (
    <Router>     
      <Routes>
        <Route exact path="/" element={ <Navigate to='/login' /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/contacts/:id" element={ <Contacts /> } />
        <Route exact path="/signup" element={ <SignUp /> } />
      </Routes>       
    </Router>
  );
}

export { App } ;
