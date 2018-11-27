import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Layout, Modal, Icon, message } from 'antd';
import moment from 'moment';
import LOGO from '@/assets/logo.png';
import './style.scss';

const { Header, Content, Footer } = Layout;

class BasicLayout extends Component {
  state = {
    isAuth: false
  };
  componentDidMount() {
    const { token, expires_at } = sessionStorage;
    if (token && moment().isBefore(expires_at)) {
      // TODO: 检查是否本地有已登录的用户信息
      this.setState({ isAuth: true });
    } else {
      // 未登录
    }
  }

  handleLogin = () => {
    if (this.props.history.location.pathname === '/login') {
      message.info('请登录');
    } else {
      this.props.history.push('/login');
    }
  };
  handleLogout = () => {
    Modal.confirm({
      title: '是否退出当前账号',
      okType: 'danger',
      okText: '是',
      cancelText: '否',
      onOk: () => {
        sessionStorage.clear();
        message.success('已退出');
        this.setState({ isAuth: false });
      }
    });
  };

  render() {
    return (
      <Layout>
        <Header className="page__hd">
          <div className="header-logo">
            <a href="/">
              <img src={LOGO} alt="LOGO" />
            </a>
          </div>
          <div className="header-title">
            <div>{this.props.title || 'SYSTEM'}</div>
          </div>
          <div className="header-user">
            {this.state.isAuth ? (
              <Icon
                type="user"
                title="退出"
                style={{ color: '#08c' }}
                onClick={this.handleLogout}
              />
            ) : (
              <Icon type="user" title="登录" onClick={this.handleLogin} />
            )}
          </div>
        </Header>
        <Content className="page__bd">{this.props.children}</Content>
        <Footer className="page__ft">
          <span>© {new Date().getFullYear()} 青春在线网站 版权所有</span>
        </Footer>
      </Layout>
    );
  }
}

BasicLayout.propTypes = {
  title: PropTypes.string
};

export default withRouter(BasicLayout);
