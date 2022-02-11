import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './Context/themeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
        <Router>
            <App />
        </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
