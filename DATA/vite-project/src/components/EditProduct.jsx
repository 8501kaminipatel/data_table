import { useLocation, useNavigate } from 'react-router-dom';
import {  useState } from "react";
import { useDispatch } from "react-redux";
import { changeedit } from "../REDUX/Action";

const EditProduct = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialData = location.state || { id: "", price: "" };
  const [editdata, seteditdata] = useState(initialData);

  function addedit(e) {
    seteditdata({ ...editdata, [e.target.name]: e.target.value });
  }

  function dataedit(e) {
    e.preventDefault();
    dispatch(changeedit(editdata));
    navigate("/productlist"); 
  }

  return (
    <form onSubmit={dataedit}>
      <h1>EDIT PRICE</h1>
      <input type="text" value={editdata.id} name="id" readOnly /> <br /><br />
      <input type="number" value={editdata.price} name="price" onChange={addedit} /> <br /><br />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditProduct;
