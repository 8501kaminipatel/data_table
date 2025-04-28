

import { GET_DATA_ERRORS, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./Actiotype";

const initialState = {
  isLoading: true,
  products: [],
  error: null,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_DATA_SUCCESS:
      return { ...state, isLoading: false, products: action.payload };
    case GET_DATA_ERRORS:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
