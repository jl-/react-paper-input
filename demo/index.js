import React, { Component } from 'react';
import ReactDom from 'react-dom';

import Input from '../src';

import './index.scss';

class Demo extends Component {
  render() {
    return (
      <Input></Input>
    );
  }
}

ReactDom.render(
  <Demo></Demo>
  ,document.querySelector('#demo')
);

