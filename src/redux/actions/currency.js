import axios from "axios";

export const LOADING = "LOADING";
export const FETCH_CURRENCY_SUCCESS = "FETCH_CURRENCY_SUCCESS";
export const FETCH_CURRENCY_ERROR = "FETCH_CURRENCY_ERROR";

export const CurrencyActionCreators = {
  loading: (payload) => ({ type: LOADING, payload }),
  fetchCurrencySuccess: (payload) => ({
    type: FETCH_CURRENCY_SUCCESS,
    payload,
  }),
  fetchCurrencyError: (payload) => ({ type: FETCH_CURRENCY_ERROR, payload }),
  fetch: () => async (dispatch) => {
    try {
      dispatch(CurrencyActionCreators.loading(true));
      setTimeout(async () => {
        const response = await axios.get(
          "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
        );
        dispatch(CurrencyActionCreators.fetchCurrencySuccess(response));
        dispatch(CurrencyActionCreators.loading(false));
      }, 300);
    } catch (e) {
      dispatch(CurrencyActionCreators.fetchCurrencyError(e));
    }
  },
};
