import React from "react";
import { Link } from "react-router-dom";
import "./Features.css";

const Features = () => {
  const featuresData = [
    {
      imgSrc: "../image/feature-img-1.png",
      featureTitle: "Fresh and Organic",
    },
    {
      imgSrc: "../image/feature-img-2.png",
      featureTitle: "Free Delivery",
    },
    {
      imgSrc: "../image/feature-img-3.png",
      featureTitle: "Easy Payments",
    },
  ];
  return (
    <>
      <section className="features" id="features">
        <h1 className="heading">
          Our <span>Features</span>
        </h1>

        <div className="box-container">
          {featuresData.map((items, index) => {
            return (
              <div className="box" key={index}>
                <img src={items.imgSrc} alt="feature 1" />
                <h3>{items.featureTitle}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, doloribus!
                </p>
                <Link to="/" className="btn">
                  Read More
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Features;
