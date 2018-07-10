import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setAmount } from '../modules/global';
import Input from '../components/Input';
import CurrencyType from '../components/CurrencyType';

class TradeControls extends Component {
  handleChangeAmount = event => {
    this.props.setAmount(event.target.value);
  };
  render() {
    // @TODO: add i18n for texts
    return (
      <div>
        <CurrencyType>USD</CurrencyType>
        <Input
          value={this.props.usd}
          onChange={this.handleChangeAmount}
          placeholder="Enter your amount"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.global.trade.amount,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setAmount: value => dispatch(setAmount(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TradeControls);
