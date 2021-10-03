import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogSection from "./components/Blog/BlogSection";
import Categories from "./components/Categories/Categories";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import HomeSection from "./components/Home/HomeSection";

import Navbar from "./components/Navbar/Navbar";
import ProductSection from "./components/Products/ProductSection";
import ReviewSection from "./components/Review/ReviewSection";

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
          <ReviewSection />
          <BlogSection />
          <Footer />
        </Route>
        <Route to="/features" component={Features} />
        <Route to="/products" component={ProductSection} />
        <Route to="/categories" component={Categories} />
        <Route to="/review" component={ReviewSection} />
        <Route to="/blog" component={BlogSection} />
      </Switch>
    </Router>
  );
};

export default App;
