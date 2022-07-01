import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/Login.jsx'
import { Notes } from './pages/Notes/Notes.jsx'

function App() {
  return (
    <Router>     
      <Routes>
        <Route exact path="/login" element={ <Login /> } />
        <Route exact path="/notes/:id" element={ <Notes /> } />
      </Routes>       
    </Router>
  );
}

export { App } ;
