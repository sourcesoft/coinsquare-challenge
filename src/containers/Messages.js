import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { TRADE_LIMIT } from '../utils/config';

class TradeControls extends Component {
  handleChangeAmount = event => {
    this.props.setAmount(event.target.value);
  };
  shouldDisplayLowBalance = () => this.props.usd < this.props.amount;
  shouldDisplayTradeLimit = () => this.props.amount > TRADE_LIMIT;
  render() {
    // @TODO: add i18n for texts
    return (
      <div>
        {this.shouldDisplayLowBalance() && <div>not enough balance</div>}
        {this.shouldDisplayTradeLimit() && (
          <div>can not trade more than 156.12$ at once</div>
        )}
        {this.props.errorMsg && <div>{this.props.errorMsg}</div>}
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
)(TradeControls);
