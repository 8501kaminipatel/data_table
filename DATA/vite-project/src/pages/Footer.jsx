import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li>All Products</li>
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Offers</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping & Returns</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li>Our Story</li>
            <li>Careers</li>
            <li>Sustainability</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-icons">
            <img src="https://happenstance.com/themes/happenstance/images/facebook.webp" alt="Facebook" />
            <img src="https://happenstance.com/themes/happenstance/images/instagram.webp" alt="Instagram" />
            <img src="https://happenstance.com/themes/happenstance/images/twitter.webp" alt="Twitter" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 MyProductSite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
