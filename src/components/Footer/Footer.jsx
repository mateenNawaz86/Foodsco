import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>
              Green Store <i className="fas fa-shopping-basket" />
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus dolorum in cum.
            </p>
            <div className="share">
              <Link to="/" className="share-links">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link to="/" className="share-links">
                <i className="fab fa-twitter" />
              </Link>
              <Link to="/" className="share-links">
                <i className="fab fa-instagram" />
              </Link>
              <Link to="/" className="share-links">
                <i className="fab fa-linkedin" />
              </Link>
            </div>
          </div>

          <div className="box">
            <h3>Contact Info</h3>
            <Link to="/" className="links">
              <i className="fas fa-phone" /> +92 321 4567121
            </Link>
            <Link to="/" className="links">
              <i className="fas fa-phone" /> 042 321 45671
            </Link>
            <Link to="/" className="links">
              <i className="fas fa-envelope" /> info@gmail.com
            </Link>
            <Link to="/" className="links">
              <i className="fas fa-map-marker-alt" /> Islamabad, Pakistan -
              210021
            </Link>
          </div>

          <div className="box">
            <h3>Quick Links</h3>
            <Link to="/" className="links">
              <i className="fas fa-arrow-right" /> Home
            </Link>
            <Link to="/features" className="links">
              <i className="fas fa-arrow-right" /> features
            </Link>
            <Link to="/products" className="links">
              <i className="fas fa-arrow-right" /> Products
            </Link>
            <Link to="/categories" className="links">
              <i className="fas fa-arrow-right" /> Categories
            </Link>
            <Link to="/review" className="links">
              <i className="fas fa-arrow-right" /> Review
            </Link>
            <Link to="/blogs" className="links">
              <i className="fas fa-arrow-right" /> Blogs
            </Link>
          </div>

          <div className="box">
            <h3>Contact Us</h3>
            <p>Get in touch</p>
            <input type="email" placeholder="your email" className="email" />
            <input type="submit" className="btn" value="contact" />
            <img
              src="../image/payment.png"
              alt="payment"
              className="payment-img"
            />
          </div>
        </div>

        <div className="credit">
          Created by <span>Mr. Mateen </span> | all rights reserved.
        </div>
      </section>
    </>
  );
};

export default Footer;
