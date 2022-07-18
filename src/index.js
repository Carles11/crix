import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./css/style.css"
// import ScrollToTop from "./helpers/ScrollToTop";

// import registerServiceWorker from './registerServiceWorker';

const  container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Router>
    {/* <ScrollToTop /> */}
      <App />
  </Router>
);

// registerServiceWorker();

