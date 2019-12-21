import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import BanksContainer from './Views/BanksContainer';
import BranchesContainer from './Views/BranchesContainer';
import EmployeesContainer from './Views/EmployeesContainer';
import QuinnWileyContainer from './Views/QuinnWileyContainer';

import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={BranchesContainer} />
      <Route path="/banks" component={BanksContainer} />
      <Route path="/employees" component={EmployeesContainer} />
      <Route path="/Quinn Wiley" component={QuinnWileyContainer} />
    </Router>
  );
}

export default App;
