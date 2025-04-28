
// REDUX/Action.js
import axios from "axios";
import { GET_DATA_ERRORS, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./Actiotype";


export const getdata = (parmobj) => {
  return (dispatch) => {
    dispatch({ type: GET_DATA_REQUEST });
    axios
      .get("http://localhost:8000/product", { params: parmobj })
      .then((res) => {
        dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_DATA_ERRORS, payload: err?.message });
      });
  };
};

export const submitData = (userdata) => {
  return (dispatch) => {

    axios.post('http://localhost:8000/product', userdata)
      .then((response) => {
        console.log(response.data);

      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }
}


export const changeedit = (editdata) => {
  return (dispatch) => {
    axios.patch(`http://localhost:8000/product/${editdata.id}`, {
      price: editdata.price,
    })
      .then((res) => {
        console.log("Edit successful:", res.data);
        dispatch(getdata()); 
      })
      .catch((err) => {
        console.log("Edit error:", err.message);
      });
  };
};

export const deletedata = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:8000/product/${id}`)
      .then((res) => {
        console.log("Deleted successfully:", res);
        dispatch(getdata()); // refresh the product list
      })
      .catch((err) => console.log("Delete error:", err));
  };
};