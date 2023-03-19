import { Button, Form, Input, InputNumber, message } from "antd";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../config/api";

const DonateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Thanks for donate!",
    });
  };

  const [total, setTotal] = useState(0);
  const handleOnFinish = (values) => {
    console.log(values);
    const data = {
      campaign_id: id,
      total: values.total,
    };

    api
      .post("/donations", data)
      .then((res) => {
        console.log(res);
        success();
        setTimeout(() => {
          navigate(-1);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="section-login">
      {contextHolder}
      <div className="login-header">
        <h2>Donate now</h2>
      </div>
      <Form onFinish={handleOnFinish} className="login-form">
        <Form.Item
          name="total"
          rules={[{ required: true, message: "Total is required!" }]}
        >
          <Input
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            onChange={(event) => {
              setTotal(event.target.value);
            }}
            className="input-form"
            size="large"
            placeholder="Total"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-btn">
            Donate Rp. {total}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DonateForm;
