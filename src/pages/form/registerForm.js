import React, { Component } from "react";
import {
  Card,
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Radio,
  InputNumber
} from "antd";
const RadioGroup = Radio.Group;
const formItemLayout = {
  labelCol: {
    xs: { span: 6 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 12 },
    sm: { span: 12 }
  }
};
const Option = Select.Option;
const children = [
  "游泳",
  "打篮球",
  "踢足球",
  "跑步",
  "爬山",
  "骑行",
  "桌球",
  "麦霸"
];
class RegisterForm extends Component {
  render() {
    const FormItem = Form.Item;
    const { getFieldDecorator } = this.props.form;
    return (
      <Card title="注册表单">
        <Form {...formItemLayout}>
          <FormItem label="用户名">
            {getFieldDecorator("name")(<Input placeholder="请输入用户名" />)}
          </FormItem>
          <FormItem label="密码">
            {getFieldDecorator("password")(<Input placeholder="请输入密码" />)}
          </FormItem>
          <FormItem label="性别">
            {getFieldDecorator("gender", {
              initialValue: 1
            })(
              <RadioGroup defaultValue={1}>
                <Radio value={1}>男</Radio>
                <Radio value={2}>女</Radio>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem label="年龄">
            {getFieldDecorator("age", {
              initialValue: 18
            })(<InputNumber min={8} max={50} />)}
          </FormItem>
          <FormItem label="当前状态">
            {getFieldDecorator("status", {
              initialValue: 1
            })(
              <Select defaultValue="lucy">
                <Option value={1}>风华浪子</Option>
                <Option value={2}>咸鱼一条</Option>
                <Option value={3}>北大才子一枚</Option>
                <Option value={4}>百度FE</Option>
                <Option value={5}>创业者</Option>
              </Select>
            )}
          </FormItem>
          <FormItem label="爱好">
            {getFieldDecorator("hobbies", {
              initialValue: [1,2]
            })(<Select mode="multiple">{
                children.map((item,index)=>
                    <Option key={index} value={index}>{item}</Option>
                )
            }</Select>)}
          </FormItem>
        </Form>
      </Card>
    );
  }
}
const WrappedRegisterForm = Form.create({ name: "reg-form" })(RegisterForm);
export default WrappedRegisterForm;
