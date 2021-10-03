import React from "react";
import { Link } from "react-router-dom";

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
              <Link to="/">
                <i className="fab fa-facebook-f" />
              </Link>
              <Link to="/">
                <i className="fab fa-twitter" />
              </Link>
              <Link to="/">
                <i className="fab fa-instagram" />
              </Link>
              <Link to="/">
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
              <i className="fas fa-map-marker-alt" /> Islamabad, Pakistan -
              210021
            </Link>
          </div>

          <div className="box">
            <h3>Quick Links</h3>
            <Link to="/" className="links">
              <i className="fas fa-arrow-right" /> Home
            </Link>
            <Link to="/" className="links">
              <i className="fas fa-arrow-right" /> features
            </Link>
            <Link to="/" className="links">
              <i className="fas fa-arrow-right" /> Products
            </Link>
            <Link to="/" className="links">
              <i className="fas fa-arrow-right" /> Categories
            </Link>
            <Link to="/" className="links">
              <i className="fas fa-arrow-right" /> Review
            </Link>
            <Link to="/" className="links">
              <i className="fas fa-arrow-right" /> Blogs
            </Link>
          </div>

          <div className="box">
            <h3>News Letter</h3>
            <p>Get in touch</p>
            <input type="email" placeholder="your email" className="email" />
            <input type="submit" className="btn" value="contact" />
            <img src="../image/payment.png" alt="payment" className='payment-img'/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
