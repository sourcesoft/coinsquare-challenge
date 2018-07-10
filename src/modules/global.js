import { INITIAL_USD } from '../utils/config';

// Actions constants
const SET_USD = 'coinsquare/global/SET_USD';
const SET_BTC = 'coinsquare/global/SET_BTC';
const SET_LOADING = 'coinsquare/global/SET_LOADING';
const SET_ERROR_MSG = 'coinsquare/global/SET_ERROR_MSG';
const SET_BITCOIN_PRICE = 'coinsquare/global/SET_BITCOIN_PRICE';
const SET_AMOUNT = 'coinsquare/global/SET_AMOUNT';

const initialValue = {
  form: {
    errorMsg: '',
    loading: false,
  },
  balance: {
    usd: INITIAL_USD,
    btc: 0,
  },
  trade: {
    bitcoinPrice: 150, // Bitcoin market price, will be fetched from public API
    amount: 0, // USD amount which user is requesting
  },
};

// Reducer
export default function reducer(state = initialValue, action = {}) {
  switch (action.type) {
    case SET_USD:
      return {
        ...state,
        balance: {
          ...state.balance,
          usd: action.value,
        },
      };
    case SET_BTC:
      return {
        ...state,
        balance: {
          ...state.balance,
          btc: action.value,
        },
      };
    case SET_LOADING:
      return {
        ...state,
        form: {
          ...state.form,
          loading: action.status,
        },
      };
    case SET_ERROR_MSG:
      return {
        ...state,
        form: {
          ...state.form,
          errorMsg: action.value,
        },
      };
    case SET_BITCOIN_PRICE:
      return {
        ...state,
        trade: {
          ...state.trade,
          bitcoinPrice: action.value,
        },
      };
    case SET_AMOUNT:
      return {
        ...state,
        trade: {
          ...state.trade,
          amount: action.value,
        },
      };
    // do reducer stuff
    default:
      return state;
  }
}

// Action creators
export function setUSD(value) {
  return { type: SET_USD, value };
}
export function setBTC(value) {
  return { type: SET_BTC, value };
}
export function setLoading(status) {
  return { type: SET_LOADING, status };
}
export function setErrorMsg(value) {
  return { type: SET_ERROR_MSG, value };
}
export function setBitcoinPrice(value) {
  return { type: SET_BITCOIN_PRICE, value };
}
export function setAmount(value) {
  return { type: SET_AMOUNT, value };
}
