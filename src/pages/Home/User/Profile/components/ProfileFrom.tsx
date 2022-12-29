import React, { Fragment, useState } from "react";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
  Avatar,
} from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const postFromData = (data: any) => {
  console.log("提交表单数据");
  console.log(data);
};
const ProfileForm = () => {
  return (
    <Fragment>
      <Form
        name="profileData"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        colon={false}
        onFinish={postFromData}
      >
        <Form.Item label="头像" name="avatar">
          <Avatar
            size={64}
            src={
              "https://rs-channel.huanqiucdn.cn/imageDir/ac55d6828e4bef43db2f7e1ea7b20ebcu5.jpg"
            }
          />
        </Form.Item>
        <Form.Item label="昵称" name="nikename">
          <Input />
        </Form.Item>
        <Form.Item label="性别" name="gender">
          <Radio.Group>
            <Radio value="man"> 男 </Radio>
            <Radio value="woman"> 女 </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="用户ID" name="userId">
          <Input />
        </Form.Item>
        <Form.Item label="个人简介" name="profileInfo">
          <Input />
        </Form.Item>
        <Form.Item label="出生日期" name="birthday">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item style={{ justifyContent: "center", display: "flex" }}>
          <Button htmlType="submit" type="primary" style={{ width: "20vw" }}>
            修改
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default ProfileForm;
