import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import "./styles.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const handleOnFinish = (values) => {
    console.log(values);
    navigate("/");
  };
  return (
    <div className="section-login">
      <div>
        <div className="login-header">
          <h2>Login</h2>
          <p>Hello, Welcome Back!</p>
        </div>

        <Form onFinish={handleOnFinish} className="login-form">
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Email is required!" },
              {
                type: "email",
                message: "Please input valid email",
              },
            ]}
          >
            <Input
              className="input-form"
              size="large"
              placeholder="Email"
              prefix={<MailOutlined style={{ marginRight: "20px" }} />}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Password is required!",
              },
            ]}
          >
            <Input.Password
              size="large"
              className="input-form"
              placeholder="Password"
              prefix={<LockOutlined style={{ marginRight: "20px" }} />}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-btn">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
