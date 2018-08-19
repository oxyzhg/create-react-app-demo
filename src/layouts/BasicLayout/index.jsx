import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Modal, Icon, message } from 'antd';
import './style.scss';
import LOGO from '@/assets/logo.png';

const { Header, Content, Footer } = Layout;

class index extends Component {
  state = {
    isAuth: false
  };
  componentDidMount() {
    const isAuth = sessionStorage.getItem('isAuth');
    this.setState({ isAuth: !!isAuth });
  }
  currentYear() {
    return new Date().getFullYear();
  }
  handleLogin = e => {
    if (this.props.history.location.pathname === '/login') {
      message.info('请登录');
    } else {
      this.props.history.push('/login');
    }
  };
  handleLogout = e => {
    Modal.confirm({
      title: '是否退出当前账号',
      okType: 'danger',
      okText: '是',
      cancelText: '否',
      onOk: () => {
        this.setState({ isAuth: false });
        sessionStorage.removeItem('isAuth');
        message.success('已退出');
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
          <span>© {this.currentYear()} 青春在线网站 版权所有</span>
        </Footer>
      </Layout>
    );
  }
}

index.propTypes = {
  history: PropTypes.object.isRequired,
  title: PropTypes.string
};

export default index;
