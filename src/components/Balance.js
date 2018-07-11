import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px 30px;
  width: 100%;
`;
const Key = styled.span`
  font-size: 1.7rem;
`;
const Value = styled.span`
  font-size: 1.5rem;
  margin-left: 35px;
`;

export class Balance extends Component {
  render() {
    return (
      <Wrapper>
        <div>
          <Key>USD</Key>
          <Value>{this.props.usd.toFixed(2)}</Value>
        </div>
        <div>
          <Key>BTC</Key>
          <Value>{this.props.btc.toFixed(8)}</Value>
        </div>
      </Wrapper>
    );
  }
}

export default Balance;
