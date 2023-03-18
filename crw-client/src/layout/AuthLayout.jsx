import { Layout } from "antd";

const { Content } = Layout;

import "./layout.css";

const AuthLayout = ({ children }) => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        maxWidth: "480px",
        margin: "0 auto",
      }}
    >
      <Content className="content">{children}</Content>
    </Layout>
  );
};

export default AuthLayout;
