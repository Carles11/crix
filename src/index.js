import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./css/style.css"

let root = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  root
); 
