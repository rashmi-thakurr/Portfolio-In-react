import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './App';
import AnimatedBackground from './components/AnimatedBackground';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  
  document.getElementById('root')
);

