// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import UploadPage from './components/UploadPage';

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/upload" component={UploadPage} />
    </Router>
  );
}

export default App;