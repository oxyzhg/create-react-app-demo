import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import BasicLayout from '@/layouts/BasicLayout';
import './style.scss';

import { setPageTitle, setUserList } from '@/store/actions';

class Home extends Component {
  componentDidMount() {
    this.props.setUserList();
  }

  render() {
    return (
      <BasicLayout>
        <div className="text-align-center">
          <Spin />
          <h1>Hey!</h1>
        </div>
        {this.props.userList &&
          this.props.userList.map(el => (
            <div key={el.email}>
              {el.name} — {el.email}
            </div>
          ))}
      </BasicLayout>
    );
  }
}

const mapStateToProps = state => ({
  BASE_API: state.global.BASE_API,
  pageTitle: state.global.pageTitle,
  userList: state.global.userList
});

const mapDispatchToProps = dispatch => ({
  setPageTitle: data => dispatch(setPageTitle(data)),
  setUserList: data => dispatch(setUserList(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
