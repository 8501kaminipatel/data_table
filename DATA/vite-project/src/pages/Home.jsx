import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
    const { products } = useSelector((state) => state.productState);
  return (
    <div style={{ padding: "2rem", textAlign: "center",marginBottom:"10%" }}>
    <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
      🛒 Welcome to the Product Management System
    </h1>
    <p style={{ fontSize: "1.2rem", color: "#555" }}>
      Manage your product catalog with ease.
    </p>
    <h2 style={{ marginTop: "1.5rem", color: "#333" }}>
      Total Products: {products.length}
    </h2>

    <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
      <Link to="/productlist">
        <button className='buttonStyle'>📋 View Products</button>
      </Link>
      <Link to="/addproduct">
        <button  className='buttonStyle'>➕ Add Product</button>
      </Link>
      <Link to="/productlist">
        <button  className='buttonStyle'>🗑️ Delete Product</button>
      </Link>
    </div>
  </div>
  )
}

export default Home;