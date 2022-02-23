import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './Context/themeContext';
import { StateProvider } from './Context/stateContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
        <Router>
          <StateProvider>
            <App />
            </StateProvider>
        </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
