import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import {
  HomePage
} from './pages'

function App() {
  return (
    <Router>
      <Route path='/' exact component={HomePage} />
    </Router>

  );
}

export default App;
