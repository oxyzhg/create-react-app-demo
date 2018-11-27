import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin } from 'antd';
import BasicLayout from '@/layouts/BasicLayout';

class Home extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <BasicLayout history={this.props.history}>
        <div style={{ textAlign: 'center' }}>
          <Spin />
          <h1>Hey!</h1>
        </div>
      </BasicLayout>
    );
  }
}

const mapStateToProps = state => ({
  baseUrl: state.global.baseUrl
});

export default connect(mapStateToProps)(Home);
