import React from 'react'
import ReactDOM from '@hot-loader/react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import App from './App'
import './css/style.css'
import ScrollToTop from './helpers/ScrollToTop'

// if (module.hot) {
//   module.hot.accept()
// }
const element = document.getElementById('root')

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>,
  element,
)

registerServiceWorker()
