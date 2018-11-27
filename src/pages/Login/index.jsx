import React, { Component } from 'react';
import { Form, message } from 'antd';
import BasicLayout from '@/layouts/BasicLayout';
import LoginForm from './components/LoginForm';
import './style.scss';

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { validateFields } = this.props.form;
    validateFields((err, values) => {
      if (!err) {
        console.log(values);
        sessionStorage.clear();
        sessionStorage.setItem('token', 'token');
        sessionStorage.setItem('expires_at', 'expires_at');
        message.success('登录成功');
        this.props.history.push('/');
      }
    });
  };
  render() {
    return (
      <BasicLayout>
        <LoginForm form={this.props.form} handleSubmit={this.handleSubmit} />
      </BasicLayout>
    );
  }
}

export default Form.create()(Login);
