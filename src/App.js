import React from "react";
//import logo from './logo.svg';
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./pages";
import CodeOfConduct from "./pages/CodeofConduct/CodeOfConduct";

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/codeOfConduct" exact component={CodeOfConduct} />
    </Router>
  );
}

export default App;
