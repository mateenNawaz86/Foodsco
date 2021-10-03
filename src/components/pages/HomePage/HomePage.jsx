import React from "react";
import Features from "../../Features/Features";
import ProductSection from "../../Products/ProductSection";
import Categories from "../../Categories/Categories";
import Review from "../../Review/ReviewSection";
import Blog from "../../Blog/BlogSection";

const HomePage = () => {
  return (
    <>
      <Features />
      <ProductSection />
      <Categories />
      <Review />
      <Blog />
    </>
  );
};

export default HomePage;
