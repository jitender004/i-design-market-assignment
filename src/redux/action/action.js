import {
  ADD_ITEM_CART,
  FILTER_BY,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  SORT_BY
} from "../actionTypes/actionType";

const url = "https://dummyjson.com/products?limit=100";
export const getAllProducts = () => (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return dispatch({ type: GET_PRODUCT_SUCCESS, payload: data.products });
    })
    .catch((err) => dispatch({ type: GET_PRODUCT_FAILURE, payload: err }));
};
export const addItemCart = (item) => {
  return {
    type: ADD_ITEM_CART,
    payload: item
  };
};
export const sortBy = (by) => {
  return {
    type: SORT_BY,
    payload: by
  };
};
export const filterBy = (by) => {
  return {
    type: FILTER_BY,
    payload: by
  };
};
