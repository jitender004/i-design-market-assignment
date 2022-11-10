import {
  ADD_ITEM_CART,
  FILTER_BY,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  SORT_BY
} from "../actionTypes/actionType";

const initialState = {
  isLoading: false,
  isError: false,
  product: [],
  cart: []
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        product: payload
      };
    case GET_PRODUCT_FAILURE:
      return {
        ...state,
        isError: true
      };
    case ADD_ITEM_CART:
      const ItemIndex = state.cart.findIndex((item) => item.id === payload.id);
      if (ItemIndex >= 0) {
        state.cart[ItemIndex].qnty += 1;
        return {
          ...state,
          cart: [...state.cart]
        };
      } else {
        const temp = { ...payload, qnty: 1 };
        return {
          ...state,
          cart: [...state.cart, temp]
        };
      }
    case SORT_BY:
      return {
        ...state,
        product: [...state.product].sort((a, b) => {
          return a[payload] > b[payload] ? 1 : a[payload] < b[payload] ? -1 : 0;
        })
      };
    case FILTER_BY:
      let value = payload;
      let filteredValues = [...state.product].filter((product) => {
        return (
          product.brand.includes(value) || product.category.includes(value)
        );
      });
      return {
        ...state,
        product: filteredValues
      };
    default:
      return state;
  }
};
