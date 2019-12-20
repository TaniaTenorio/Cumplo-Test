import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import BanksContainer from './Views/BanksContainer';
import BranchesContainer from './Views/BranchesContainer';
import EmployeesContainer from './Views/EmployeesContainer';

import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path="/" component={BanksContainer} />
      <Route path="/branches" component={BranchesContainer} />
      <Route path="/employees" component={EmployeesContainer} />
    </Router>
  );
}

export default App;
