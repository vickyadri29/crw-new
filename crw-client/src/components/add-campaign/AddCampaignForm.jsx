import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { Button, DatePicker, Form, Input, message } from "antd";

import { api } from "../../config/api";
import { useState } from "react";

const AddCampaignForm = () => {
  const navigate = useNavigate();
  const [targetDate, setTargetDate] = useState("");

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Add Campaign successfully!",
    });
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
    setTargetDate(dateString);
  };

  const handleOnFinish = (values) => {
    console.log(values);
    const data = {
      title: values.title,
      content: values.content,
      target: values.target,
      target_date: targetDate,
    };
    api
      .post("/campaigns", data)
      .then((res) => {
        console.log(res);
        success();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="section-login">
      {contextHolder}
      <div>
        <div className="login-header">
          <h2>Add Campaign Form</h2>
        </div>

        <Form onFinish={handleOnFinish} className="login-form">
          <Form.Item
            name="title"
            rules={[{ required: true, message: "Title is required!" }]}
          >
            <Input className="input-form" size="large" placeholder="Title" />
          </Form.Item>
          <Form.Item
            name="content"
            rules={[{ required: true, message: "Content is required!" }]}
          >
            <Input className="input-form" size="large" placeholder="Content" />
          </Form.Item>
          <Form.Item
            name="target"
            rules={[{ required: true, message: "Target is required!" }]}
          >
            <Input
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              className="input-form"
              size="large"
              placeholder="Target"
            />
          </Form.Item>
          <Form.Item
            name="target_date"
            rules={[
              {
                required: true,
                message: "Password is required!",
              },
            ]}
          >
            <DatePicker
              onChange={onChange}
              size="large"
              className="input-form"
              placeholder="Target Date"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-btn">
              Add Campaign
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddCampaignForm;
