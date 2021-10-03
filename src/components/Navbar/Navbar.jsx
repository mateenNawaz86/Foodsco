import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const searchBarHandler = () => setShowSearch(!showSearch);
  const cartHandler = () => setShowCart(!showCart);
  const loginHandler = () => setShowLogin(!showLogin);
  const menuHandler = () => setShowMenu(!showMenu);

  const cartData = [
    {
      srcIcon: "fas fa-trash",
      imgSrc: "../image/cart-img-1.png",
      srcName: "Watermelon",
      srcPrice: "4.99",
      srcQuantity: "qty : 1",
    },
    {
      srcIcon: "fas fa-trash",
      imgSrc: "../image/cart-img-2.png",
      srcName: "Onion",
      srcPrice: "2.39",
      srcQuantity: "qty : 1",
    },
    {
      srcIcon: "fas fa-trash",
      imgSrc: "../image/cart-img-3.png",
      srcName: "Chicken",
      srcPrice: "6.29",
      srcQuantity: "qty : 1",
    },
  ];

  return (
    <header className="header">
      <Link to="/" className="logo">
        <i className="fas fa-shopping-basket" />Foodsco
      </Link>

      <nav className={showMenu ? "navbar active" : "navbar"}>
        <Link
          className={`nav-links ${location.pathname === "/" ? "active" : ""}`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`nav-links ${
            location.pathname === "/features" ? "active" : ""
          }`}
          to="/features"
        >
          Features
        </Link>
        <Link
          className={`nav-links ${
            location.pathname === "/products" ? "active" : ""
          }`}
          to="/products"
        >
          Products
        </Link>
        <Link
          className={`nav-links ${
            location.pathname === "/categories" ? "active" : ""
          }`}
          to="/categories"
        >
          Categories
        </Link>
        <Link
          className={`nav-links ${
            location.pathname === "/review" ? "active" : ""
          }`}
          to="/review"
        >
          Review
        </Link>
        <Link
          className={`nav-links ${
            location.pathname === "/blogs" ? "active" : ""
          }`}
          to="/blogs"
        >
          Blogs
        </Link>
      </nav>

      <div className="icons">
        <div onClick={menuHandler} className="fas fa-bars" id="menu-btn"></div>
        <div
          onClick={searchBarHandler}
          className="fas fa-search"
          id="search-btn"
        ></div>
        <div
          onClick={cartHandler}
          className="fas fa-shopping-cart"
          id="cart-btn"
        ></div>
        <div
          onClick={loginHandler}
          className="fas fa-user"
          id="login-btn"
        ></div>
      </div>

      <form className={showSearch ? "search-form active" : "search-form"}>
        <input type="search" id="search-box" placeholder="Search here..." />
        <label htmlFor="search-box" className="fas fa-search" />
      </form>

      <div className={showCart ? "shopping-cart active" : "shopping-cart"}>
        {cartData.map((items, index) => {
          return (
            <div className="box" key={index}>
              <i className={items.srcIcon} />
              <img src={items.imgSrc} alt="cart" />
              <div className="content">
                <h3>{items.srcName}</h3>
                <span className="price">${items.srcPrice}/-</span>
                <span className="quantity">{items.srcQuantity}</span>
              </div>
            </div>
          );
        })}

        <div className="total">Total : $13.67/- </div>
        <Link to="/" className="btn">
          Check Out
        </Link>
      </div>

      <div className={showLogin ? "login-form active" : "login-form"}>
        <h3>Login Now</h3>
        <input type="email" placeholder="Enter Email" className="box" />
        <input type="password" placeholder="Enter Password" className="box" />
        <p>
          Forget your password
          <Link to="/" className="form-link">
            Click Here
          </Link>
        </p>
        <p>
          Don't have an account
          <Link to="/" className="form-link">
            Create now
          </Link>
        </p>
        <Link to="/" className="btn">
          Login Now
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
