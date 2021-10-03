import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/pages/HomePage/HomePage";
import FeaturePage from "./components/pages/FeaturePage/FeaturePage";
import ProductPage from "./components/pages/Product/ProductPage";
import CategoryPage from "./components/pages/Category/CategoryPage";
import ReviewPage from "./components/pages/ReviewPage/ReviewPage";
import BlogPage from "./components/pages/BlogPage/BlogPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/categories" component={CategoryPage} />
        <Route path="/review" component={ReviewPage} />
        <Route path="/blogs" component={BlogPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
