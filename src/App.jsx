import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Features from "./components/Features/Features";
import HomeSection from "./components/Home/HomeSection";

import Navbar from "./components/Navbar/Navbar";
import ProductSection from "./components/Products/ProductSection";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route to="/home">
          <HomeSection />
          <Features />
          <ProductSection />
        </Route>
        <Route to="/features" component={Features} />
        <Route to="/products" component={ProductSection} />
      </Switch>
    </Router>
  );
};

export default App;
