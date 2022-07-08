import React from 'react'
import { App } from './App.js'
// import { createRoot } from 'react-dom/client.js'
import ReactDOM from 'react-dom';
import { Provider } from './Context.js'
import './index.css'

const container = document.getElementById('root')
// const root = createRoot(container)
// root.render(<App />)


ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  container
);