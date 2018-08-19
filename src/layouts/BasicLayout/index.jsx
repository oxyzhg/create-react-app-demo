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
  currentYear() {
    return new Date().getFullYear();
  }
  handleLogin = e => {
    this.setState({ isAuth: true });
    message.success('登录成功');
    // this.props.history.push('/login');
  };
  handleLogout = e => {
    Modal.confirm({
      title: '确定退出当前账号吗?',
      okType: 'danger',
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => {
        this.setState({ isAuth: false });
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
            <div>{this.props.title || '管理系统'}</div>
          </div>
          <div className="header-user">
            {this.state.isAuth ? (
              <Icon
                type="user"
                size="large"
                style={{ color: '#08c' }}
                onClick={this.handleLogout}
              />
            ) : (
              <Icon type="user" size="large" onClick={this.handleLogin} />
            )}
          </div>
        </Header>
        <Content className="page__bd">{this.props.children}</Content>
        <Footer className="page__ft">
          <div>© {this.currentYear()} 青春在线网站 版权所有</div>
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
