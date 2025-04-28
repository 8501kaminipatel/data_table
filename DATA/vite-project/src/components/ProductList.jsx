import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletedata, getdata } from '../REDUX/Action';
import { Link, useNavigate } from 'react-router-dom';



const ProductList = () => {
  const { isLoading, isError, products } = useSelector((state) => state.productState);
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const [search, setsearch] = useState(null)
  const [ascproduct, setascproduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("")
  const [page, setPage] = useState(1);
  const limit = 5;


  const parmobj = {
    q: search,
    _sort: "price",
    _order: ascproduct,
    category: selectedCategory || undefined,
    _page: page,
    _limit: limit
  };


  useEffect(() => {
    dispatch(getdata());
  }, [dispatch]);

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(getdata(parmobj));
    }, 1000);
    return () => clearTimeout(id);
  }, [search, ascproduct, selectedCategory, page])

  const handleDelete = (id) => {
    dispatch(deletedata(id));
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <>

      <div style={{ padding: "20px", margin: "10px" }}>
        <h1>SELECT CATEGORY</h1>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>

      <div className="filter-search">
        <div style={{ padding: "20px", margin: "10px" }}>
          <h1>SEARCH HERE...</h1>
          <input type="search" placeholder='serch here...' value={search}
            onChange={(e) => setsearch(e.target.value)} />
        </div>
      </div>


      <div className="filter-buttons">
        <div >
          <h1>FLITERS</h1>
          <button style={{ marginRight: "20px" }} onClick={() => setascproduct("asc")}>LOW TO HIGH</button>
          <button onClick={() => setascproduct("desc")}>HIGH TO LOW</button>

        </div>
      </div>


      
      <div
        className="card-container"
        style={{
          display: 'flex',
          width: '90%',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {products.map((post) => (
          <div className="post-card" key={post.id}>
            <Link to={`/productdetails/${post.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <img src={post.image} alt={post.title} />
            </Link>
            <h2 className="post-title">{post.title}</h2>
            <h2 className="post-price">${post.price}</h2>
            <h2 className="post-category">{post.category}</h2>
            <p className="post-description">{post.description}</p>
            <button onClick={() => navigate('/editproduct', { state: post })}>Edit</button>
            <button className="edit-button" onClick={() => handleDelete(post.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="pagination-controls">
        <button onClick={handlePrev} disabled={page === 1}>Prev</button>
        <span>Page {page}</span>
        <button onClick={handleNext} disabled={page === 4}>Next</button>
      </div>
    </>
  );
};

export default ProductList;
