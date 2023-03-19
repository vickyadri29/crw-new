import { Button, Form, Input, InputNumber } from "antd";
import { useState } from "react";

const DonateForm = () => {
  const [total, setTotal] = useState(0);
  const handleOnFinish = (values) => {
    console.log(values);
  };
  return (
    <div className="section-login">
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
