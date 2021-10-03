import React from "react";
import { Link } from "react-router-dom";

import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            Fresh and <span>Organic </span> Products
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            nulla nesciunt deserunt esse mollitia optio.
          </p>

          <Link to="/" className="btn">
            Shop Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
