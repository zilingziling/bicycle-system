import React, { Component } from "react";
import { Form, Card, Input, Icon, Button, Checkbox } from "antd";
import "./form.less";
class FormLogin extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="登录行内表单">
          <div className="horizForm">
            <Form layout="inline">
              <Form.Item>
                {getFieldDecorator("username-1")(
                  <Input prefix={<Icon type="user" />} placeholder="Username" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password-1")(
                  <Input
                    type="password"
                    prefix={<Icon type="lock" />}
                    placeholder="Password"
                  />
                )}
              </Form.Item>
            </Form>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </div>
        </Card>
        <Card title="登录水平表单" className="secondForm">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("userName", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}
const WrappedFormLogin = Form.create({ name: "form_login" })(FormLogin);
export default WrappedFormLogin;
