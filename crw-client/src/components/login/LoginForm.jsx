import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, message } from "antd";
import "./styles.css";
import { api } from "../../config/api";
import { setAccessTokenCookie } from "../../utils/cookie";

const LoginForm = () => {
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Login successfully!",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Username or Password invalid!",
    });
  };

  const handleOnFinish = (values) => {
    api
      .post("/login", values)
      .then((res) => {
        success();
        setAccessTokenCookie(res.token);
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
        error();
      });
  };
  return (
    <div className="section-login">
      {contextHolder}
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
        <Link to="/register">Not a member? Sign up now!</Link>
      </div>
    </div>
  );
};

export default LoginForm;
