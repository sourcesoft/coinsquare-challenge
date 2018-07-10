import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.input`
  background-color: #253ae4;
  color: #fff;
  text-align: center;
  padding: 20px 30px;
  font-size: 2rem;
`;

class SubmitButton extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <StyledButton onClick={props.onClick} value="Trade">
        {children}
      </StyledButton>
    );
  }
}

export default SubmitButton;