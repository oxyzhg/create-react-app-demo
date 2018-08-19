import React, { Component } from 'react';
import { Icon } from 'antd';
import BasicLayout from '@/layouts/BasicLayout';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BasicLayout history={this.props.history}>
        <h1>Home</h1>
      </BasicLayout>
    );
  }
}

export default Home;
