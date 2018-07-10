import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import { connect } from 'react-redux';
import { setBTC, setUSD } from '../modules/global';
import Balance from '../components/Balance';
import TradeControls from '../containers/TradeControls';
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
    // fetch btc price
  }
  getCalculatedBTC = () => {
    return this.props.amount / this.props.bitcoinPrice;
  };
  handleTrade = event => {
    event.preventDefault();
    console.log('clicked on trade');
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
          <CurrencyType>BTC</CurrencyType>
          <CurrencyType>{this.getCalculatedBTC()}</CurrencyType>
          <SubmitButton onClick={this.handleTrade} />
        </form>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  usd: state.global.balance.usd,
  btc: state.global.balance.btc,
  bitcoinPrice: state.global.trade.bitcoinPrice,
  amount: state.global.trade.amount,
});

const mapDispatchToProps = dispatch => ({
  setUSD: value => dispatch(setUSD(value)),
  setBTC: value => dispatch(setBTC(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
