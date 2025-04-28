
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { submitData } from '../REDUX/Action';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate=useNavigate();
  const [userdata, setuserdata] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: ""
  });
  function adddata(e) {
    setuserdata({ ...userdata, [e.target.name]: e.target.value });
  }

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitData(userdata));
    navigate("/productlist")
  };
  
  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Post Data</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter id Here.."
          value={userdata.id}
          name="id"
          onChange={adddata}
        />
        <br /> <br />
        <input
          type="text"
          placeholder="Enter title Here.."
          value={userdata.title}
          name="title"
          onChange={adddata}
        />
        <br /> <br />
        <input
          type="number"
          placeholder="Enter price Here.."
          value={userdata.price}
          name="price"
          onChange={adddata}
        />{" "}
        <br /> <br />
        <input
          type="text"
          placeholder="Enter description Here.."
          value={userdata.description}
          name="description"
          onChange={adddata}
        />{" "}
        <br /> <br />
        <select value={userdata.category} name="category" onChange={adddata}>
          <option value="select category">select category</option>
          <option value="women's clothing">women's clothing</option>
          <option value="men's clothing">men's clothing</option>
          <option value="electronics"> electronics</option>
          <option value="jewelery">jewelery</option>
        </select>{" "}
        <br /> <br />
        <input
          name="image"
          placeholder="Enter image url Here.."
          value={userdata.image}
          type="text"
          onChange={adddata}
        />{" "}
        <br /> <br />
        <input type="submit" className='button' />
        <br /> <br />
      </form>
    </div>
  )
}

export default AddProduct;