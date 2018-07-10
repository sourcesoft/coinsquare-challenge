import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import Balance from '../containers/Balance';
import TradeControls from '../containers/TradeControls';
import Wrapper from '../components/Wrapper';
import LegendHeader from '../components/LegendHeader';
import SubmitButton from '../components/SubmitButton';

// some simple resets
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
  handleTrade = () => {
    console.log('clicked on trade');
  };
  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleTrade}>
          <LegendHeader>Account Balance</LegendHeader>
          <Balance />
          <LegendHeader>Trade</LegendHeader>
          <TradeControls />
          <LegendHeader>For</LegendHeader>
          <SubmitButton onClick={this.handleTrade} />
        </form>
      </Wrapper>
    );
  }
}

export default App;
