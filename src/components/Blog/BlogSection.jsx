import React from "react";
import { Link } from "react-router-dom";

import "./BlogSection.css";

const BlogSection = () => {
  const blogData = [
    {
      imgSrc: "../image/blog-1.jpg",
      blogDate: "4th May, 2021",
      blogTitle: "Fresh & Organic Vagitables & Fruits",
    },
    {
      imgSrc: "../image/blog-2.jpg",
      blogDate: "6th Jan, 2021",
      blogTitle: "Fresh Fruits",
    },
    {
      imgSrc: "../image/blog-3.jpg",
      blogDate: "1st Jun, 2021",
      blogTitle: "Delicus Dry Fruits",
    },
  ];
  return (
    <>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          Our <span>Blogs</span>
        </h1>

        <div className="box-container">
          {blogData.map((items, index) => {
            return (
              <div className="box" key={index}>
                <img src={items.imgSrc} alt="Blogs" />
                <div className="content">
                  <div className="icons">
                    <Link to="/" className="blog-status">
                      <i className="fas fa-user" />
                      by user
                    </Link>
                    <Link to="/" className="blog-status">
                      <i className="fas fa-calendar-week" />
                      {items.blogDate}
                    </Link>
                  </div>
                  <h3>{items.blogTitle} </h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Assumenda, vel.
                  </p>
                  <Link to="/" className="simpleBtn">
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BlogSection;
