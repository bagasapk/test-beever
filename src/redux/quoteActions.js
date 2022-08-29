import {
  GET_QUOTE_FAILURE,
  GET_QUOTE_SUCCESS,
  ADD_FAVORITE,
  MY_QUOTE,
} from "./quoteTypes";
import { quoteAPI } from "../provider/api";

export const getQuoteSuccess = (data) => {
  return {
    type: GET_QUOTE_SUCCESS,
    payload: data,
  };
};
export const getQuoteFailure = (data) => {
  return {
    type: GET_QUOTE_FAILURE,
    payload: data,
  };
};

export const addFavorite = (data) => {
  return {
    type: ADD_FAVORITE,
    payload: [data],
  };
};

export const myQuote = (data) => {
  return {
    type: MY_QUOTE,
    payload: [data],
  };
};

export const getQuote = () => (dispatch) => {
  quoteAPI
    .get()
    .then((res) => {
      dispatch(getQuoteSuccess(res.data));
      console.log(res.data)
    })
    .catch((error) => {
      dispatch(getQuoteFailure(error.message));
    });
};
