import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import BanksContainer from './Views/BanksContainer';
// import Branches from './Views/BranchesContainer';
// import BranchInformation from
// import Employees from

import './App.css';

function App() {
  return (
    <Router basenmae={process.env.PUBLIC_URL}>
      <Route exact path="/" component={BanksContainer} />
      {/* <Route path="/branch-information" component={BranchInformation} />
      <Route path="/employees" component={Employees} /> */}
    </Router>
  );
}

export default App;
