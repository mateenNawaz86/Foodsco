import React from "react";

import "./ReviewSection.css";

const ReviewSection = () => {
  const reviewData = [
    {
      imgSrc: "../image/customer-1.png",
      name: "Amelia",
    },
    {
      imgSrc: "../image/customer-3.png",
      name: "Sophia",
    },
    {
      imgSrc: "../image/customer-2.png",
      name: "Olivia",
    },
    {
      imgSrc: "../image/customer-4.png",
      name: "Smith",
    },
  ];
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          Customer's <span>Review</span>
        </h1>

        <div className="review-slider">
          <div className="wrapper">
            {reviewData.map((items, index) => {
              return (
                <div className="box" key={index}>
                  <img src={items.imgSrc} alt="Customer" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cumque dolores, aperiam reprehenderit expedita alias
                    excepturi sequi adipisci laudantium!
                  </p>
                  <div className="status">
                    <h3>{items.name}</h3>
                    <div className="stars">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewSection;
