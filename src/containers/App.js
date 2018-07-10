import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';
import { API_URL } from '../utils/config';
import {
  setBTC,
  setUSD,
  setErrorMsg,
  setBitcoinPrice,
  setLoading,
} from '../modules/global';
import TradeControls from '../containers/TradeControls';
import Messages from '../containers/Messages';
import Balance from '../components/Balance';
import Wrapper from '../components/Wrapper';
import LegendHeader from '../components/LegendHeader';
import SubmitButton from '../components/SubmitButton';
import CurrencyType from '../components/CurrencyType';

// some simple css resets
injectGlobal`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  input {
    border: 0;
  }
  *:before, *:after {
    box-sizing: border-box;
  }
  body {
    font-size: 100%;
  }
  ol, ul {
    list-style: none;
  }
`;

class App extends Component {
  componentDidMount() {
    // fetch BTC price
    this.props.setLoading(true);
    axios
      .get(`${API_URL}/price/btc`)
      .then(response => {
        const data = response && response.data && response.data;
        const price = data && data.data && data.data.price;
        this.props.setBitcoinPrice(price);
      })
      .catch(error => {
        this.props.setErrorMsg(
          'Could not fetch BTC current price, please try again later'
        );
      })
      .then(() => {
        this.props.setLoading(false);
      });
  }
  getCalculatedBTC = () => {
    return this.props.amount / this.props.bitcoinPrice;
  };
  handleTrade = event => {
    event.preventDefault();
    this.props.setBTC(this.props.btc + this.getCalculatedBTC());
    this.props.setUSD(this.props.usd - this.props.amount);
  };
  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleTrade}>
          <LegendHeader>Account Balance</LegendHeader>
          <Balance usd={this.props.usd} btc={this.props.btc} />
          <LegendHeader>Trade</LegendHeader>
          <TradeControls />
          <LegendHeader>For</LegendHeader>
          <CurrencyType>
            BTC{' '}
            {!this.props.loading && <span>({this.props.bitcoinPrice})</span>}
          </CurrencyType>
          <CurrencyType>{this.getCalculatedBTC()}</CurrencyType>
          <SubmitButton
            disabled={this.props.usd < this.props.amount}
            onClick={this.handleTrade}
            loading={this.props.loading}
          />
          <Messages />
        </form>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  usd: state.global.balance.usd,
  btc: state.global.balance.btc,
  loading: state.global.form.loading,
  bitcoinPrice: state.global.trade.bitcoinPrice,
  amount: state.global.trade.amount,
});

const mapDispatchToProps = dispatch => ({
  setUSD: value => dispatch(setUSD(value)),
  setBTC: value => dispatch(setBTC(value)),
  setLoading: value => dispatch(setLoading(value)),
  setBitcoinPrice: value => dispatch(setBitcoinPrice(value)),
  setErrorMsg: value => dispatch(setErrorMsg(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
