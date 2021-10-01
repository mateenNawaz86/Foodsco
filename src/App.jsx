import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/Home/LandingPage";

import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route to="/home">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
