import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Categories from "./components/Categories/Categories";
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
          <Categories />
        </Route>
        <Route to="/features" component={Features} />
        <Route to="/products" component={ProductSection} />
        <Route to="/categories" component={Categories} />
      </Switch>
    </Router>
  );
};

export default App;
