import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./css/style.css"
import ScrollToTop from "react-router-scroll-top";

// import registerServiceWorker from './registerServiceWorker';

let root = document.getElementById("root");
ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  root
);

// registerServiceWorker();

