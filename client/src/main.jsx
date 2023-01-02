import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import { $ } from 'utils/dom'

import './index.css'

ReactDOM.createRoot($('#root')).render(
  <App />
)