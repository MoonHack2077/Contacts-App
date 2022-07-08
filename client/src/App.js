import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Login } from './pages/Login.jsx'
import { SignUp } from './pages/SignUp.jsx'
import { Contacts } from './pages/Contacts/Contacts.jsx'
import { AddContact } from './pages/Contacts/AddContact.jsx'

function App() {
  return (
    <Router>     
      <Routes>
        <Route exact path="/" element={ <Navigate to='/login' /> } />
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/signup" element={ <SignUp /> } />
        <Route exact path="/contacts/:id" element={ <Contacts /> } />
        <Route exact path="/contacts/add" element={ <AddContact /> } />
      </Routes>       
    </Router>
  );
}

export { App } ;
