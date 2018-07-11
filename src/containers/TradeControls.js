import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setAmount } from '../modules/global';
import Input from '../components/Input';
import CurrencyType from '../components/CurrencyType';

export class TradeControls extends Component {
  handleChangeAmount = event => {
    const value = event.target.value;
    if (!isNaN(value) && Number(value) >= 0) {
      this.props.setAmount(value);
    }
  };
  render() {
    // @TODO: add i18n for texts
    return (
      <div>
        <CurrencyType>USD</CurrencyType>
        <Input
          value={this.props.amount}
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
