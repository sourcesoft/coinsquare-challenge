import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  color: #1f1e1f;
  text-align: left;
  padding: 5px 8px;
  font-size: 1.2rem;
  &:focus {
    background-color: #fff;
  }
  border: 1px solid #000;
`;

class Input extends Component {
  render() {
    const { children, ...props } = this.props;
    return <StyledInput {...props}>{children}</StyledInput>;
  }
}

export default Input;
