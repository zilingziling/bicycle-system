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
  InputNumber,
    DatePicker,
    Switch,
    TimePicker,
    Upload,
    message
} from "antd";
import moment from 'moment'
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
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 20,
      offset: 4,
    },
  },
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
const dateFormat='YYYY/MM/DD'
const TextArea=Input.TextArea

class RegisterForm extends Component {

  state = {
    loading: false,
  };
   getBase64=(img, callback)=> {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

   beforeUpload=(file)=> {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }
  render() {
    const FormItem = Form.Item;
    const { getFieldDecorator } = this.props.form;
    const uploadButton = (
        <div>
          <Icon type={this.state.loading ? 'loading' : 'plus'} />
          <div className="ant-upload-text">Upload</div>
        </div>
    );
    const imageUrl = this.state.imageUrl;
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
              <RadioGroup >
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
              <Select >
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
          <FormItem label="是否已婚">
            {getFieldDecorator("marriage")(
                <Switch defaultChecked/>
              )}
          </FormItem>
          <FormItem label="生日">
            {getFieldDecorator("birthday",{
              initialValue:moment("2018/03/18",dateFormat)
            })(
               <DatePicker />
            )}
          </FormItem>
          <FormItem label="联系地址">
            {getFieldDecorator("address")(
                <TextArea style={{height:115,resize:'none'}} placeholder='四川省成都市锦江区太古里' />
            )}
          </FormItem>
          <FormItem label="早起时间">
            {getFieldDecorator("getUp",{
              initialValue:moment('07:20:00', 'HH:mm:ss')
            })(
               <TimePicker />
            )}
          </FormItem>
          <FormItem label="头像">
            {getFieldDecorator("avatar")(
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="//jsonplaceholder.typicode.com/posts/"
                    beforeUpload={this.beforeUpload}
                    onChange={this.handleChange}
                >
                  {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                </Upload>
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            {getFieldDecorator("confirm")(
                <Checkbox>我已阅读过<a href="">慕课协议</a></Checkbox>
            )}
          </FormItem>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="button">注册</Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}
const WrappedRegisterForm = Form.create({ name: "reg-form" })(RegisterForm);
export default WrappedRegisterForm;
