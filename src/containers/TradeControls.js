import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Select from '../components/Select';

class App extends Component {
  render() {
    // @TODO: add i18n for texts
    return (
      <div>
        <Select options={[{ value: 'usd', text: 'USD' }]} />
        <Input placeholder="Enter your amount" />
      </div>
    );
  }
}

export default App;
