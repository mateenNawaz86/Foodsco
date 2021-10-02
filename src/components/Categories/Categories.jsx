import React from "react";
import { Link } from "react-router-dom";

import "./Categories.css";

const Categories = () => {
  const catData = [
    {
      imgSrc: "../image/cat-1.png",
      catTitle: "Vegitables",
      catStatus: "Upto 45% off",
    },
    {
      imgSrc: "../image/cat-2.png",
      catTitle: "Fresh Fruits",
      catStatus: "Upto 35% off",
    },
    {
      imgSrc: "../image/cat-3.png",
      catTitle: "Dairy Products",
      catStatus: "Upto 63% off",
    },
    {
      imgSrc: "../image/cat-4.png",
      catTitle: "Fresh Meat",
      catStatus: "Upto 28% off",
    },
  ];
  return (
    <>
      <section className="categories" id="categories">
        <h1 className="heading">
          Our <span>Categories</span>
        </h1>

        <div className="box-container">
          {catData.map((items, index) => {
            return (
              <div className="box" key={index}>
                <img src={items.imgSrc} alt="cat 1" />
                <h3>{items.catTitle}</h3>
                <p>{items.catStatus}</p>
                <Link to="/" className="btn">
                  Show Now
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Categories;
