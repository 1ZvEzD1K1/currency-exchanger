import {
  LOADING,
  FETCH_CURRENCY_SUCCESS,
  FETCH_CURRENCY_ERROR,
} from "../actions/currency";

const initialState = {
  isLoading: false,
  error: "",
  currency: [],
};

export const currency = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, isLoading: action.payload };
    case FETCH_CURRENCY_SUCCESS:
      return { ...state, currency: action.payload.data };
    case FETCH_CURRENCY_ERROR:
      return { ...state, error: action.payload.message };
    default:
      return state;
  }
};
