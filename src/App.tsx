import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from './views/app-container/AppContainer'
import './App.scss';

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppContainer />
      </div>
    </Router>
  );
}

export default App;
