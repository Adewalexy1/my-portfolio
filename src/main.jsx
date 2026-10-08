import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// SVG backdrop filters (true glass refraction) only work in Chromium browsers.
const ua = navigator.userAgent
if (/Chrome|Edg/.test(ua) && !/Firefox|FxiOS/.test(ua)) {
  document.documentElement.setAttribute('data-refract', '')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
