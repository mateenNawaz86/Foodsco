import React from "react";
import { Link } from "react-router-dom";
import "./ProductSection.css";

const ProductSection = () => {
  const productData1 = [
    {
      imgSrc: "../image/product-1.png",
      prodTitle: "Fresh Orange",
      prodPrice: "3.99/- - $7.32/-",
    },
    {
      imgSrc: "../image/product-2.png",
      prodTitle: "Fresh Onion",
      prodPrice: "1.29/- - $4.12/-",
    },
    {
      imgSrc: "../image/product-3.png",
      prodTitle: "Fresh Meat",
      prodPrice: "5.59/- - $11.72/-",
    },
    {
      imgSrc: "../image/product-4.png",
      prodTitle: "Fresh Cabbage",
      prodPrice: "2.29/- - $5.12/-",
    },
    {
      imgSrc: "../image/product-5.png",
      prodTitle: "Fresh Carrot",
      prodPrice: "1.79/- - $4.62/-",
    },
    {
      imgSrc: "../image/product-6.png",
      prodTitle: "Fresh Pear",
      prodPrice: "3.39/- - $6.32/-",
    },
    {
      imgSrc: "../image/product-7.png",
      prodTitle: "Fresh Cabbage",
      prodPrice: "2.29/- - $5.12/-",
    },
    {
      imgSrc: "../image/product-8.png",
      prodTitle: "Green Lemon",
      prodPrice: "2.29/- - $5.12/-",
    },
    {
      imgSrc: "../image/product-9.png",
      prodTitle: "Fresh Mango",
      prodPrice: "4.99/- - $12.42/-",
    },
  ];
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          Our <span>Products</span>
        </h1>

        <div className="product-slider">
          <div className="wrapper">
            {productData1.map((items, index) => {
              return (
                <div className="box" key={index}>
                  <img src={items.imgSrc} alt="Product 1" />
                  <h3>{items.prodTitle}</h3>
                  <div className="price">${items.prodPrice}</div>
                  <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <Link to="/" className="btn">
                    Add to cart
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSection;
