import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-text">MyShop</Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/productlist">ProductList</Link>
        </li>
        <li>
          <Link to="/addproduct">AddProduct</Link>
        </li>
        <li>
          <Link to="/editproduct">EditProduct</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
