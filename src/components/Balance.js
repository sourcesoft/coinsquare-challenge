import React, { Component } from 'react';
import styled from 'styled-components';

class Balance extends Component {
  render() {
    return (
      <div>
        <div>
          <b>USD</b>
          {this.props.usd}
        </div>
        <div>
          <b>BTC</b>
          {this.props.btc}
        </div>
      </div>
    );
  }
}

export default Balance;
