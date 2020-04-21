import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar'
import Routes from './routes'

function App() {
  return (
    <>
      <Router>
        <div className="header">
          <Navbar />
        </div>
        <div className="container">
          <Routes />
       </div>
      </Router>
    </>
  );
}

export default App;
