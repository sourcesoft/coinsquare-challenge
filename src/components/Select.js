import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  color: #1f1e1f;
  text-align: left;
  padding: 5px 8px;
  font-size: 1.2rem;
  &:focus {
    background-color: #fff;
  }
  border: 1px solid #000;
`;

class Select extends Component {
  renderOptions = () => {
    return this.props.options.map(value => (
      <option value={value.value}>{value.text}</option>
    ));
  };
  render() {
    const { children, ...props } = this.props;
    return <StyledSelect {...props}>{this.renderOptions()}</StyledSelect>;
  }
}

export default Select;
