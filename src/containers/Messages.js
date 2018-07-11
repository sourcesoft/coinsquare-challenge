import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { TRADE_LIMIT } from '../utils/config';

const MessageItem = styled.div`
  color: #ec4d4d;
  padding: 0 30px 20px;
  font-size: 1.2rem;
`;

export class Messages extends Component {
  handleChangeAmount = event => {
    this.props.setAmount(event.target.value);
  };
  // reject trades if there's not enough balance
  shouldDisplayLowBalance = () => this.props.usd < this.props.amount;
  // reject trades more than limit
  shouldDisplayTradeLimit = () => this.props.amount > TRADE_LIMIT;
  render() {
    // @TODO: add i18n for texts
    return (
      <div>
        {this.shouldDisplayLowBalance() && (
          <MessageItem>* You do not have enough balance in your account!</MessageItem>
        )}
        {this.shouldDisplayTradeLimit() && (
          <MessageItem>* Trades more than 156.12$ are not allowed!</MessageItem>
        )}
        {this.props.errorMsg && (
          <MessageItem>{this.props.errorMsg}</MessageItem>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.global.trade.amount,
  usd: state.global.balance.usd,
  errorMsg: state.global.form.errorMsg,
  loading: state.global.form.loading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setAmount: value => dispatch(setAmount(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
