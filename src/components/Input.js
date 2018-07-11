import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  color: #1f1e1f;
  text-align: left;
  font-size: 1.2rem;
  padding: 15px 25px;
  margin-bottom: 10px;
  width: 100%;
  &:focus {
    background-color: #fff;
  }
  border: 1px solid #000;
`;

export class Input extends Component {
  render() {
    const { children, ...props } = this.props;
    return <StyledInput {...props}>{children}</StyledInput>;
  }
}

export default Input;
