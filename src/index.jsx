import React from 'react'
import ReactDOM from '@hot-loader/react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import './css/style.css'
import ScrollToTop from './helpers/ScrollToTop'

// if (module.hot) {
//   module.hot.accept()
// }

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById('root'),
)
