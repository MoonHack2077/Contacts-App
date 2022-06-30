import React from 'react'
import { App } from './App.js'
// import { createRoot } from 'react-dom/client.js'
import ReactDOM from 'react-dom';
import './index.css'

const container = document.getElementById('root')
// const root = createRoot(container)
// root.render(<App />)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);