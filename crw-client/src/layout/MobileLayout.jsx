import { Layout } from "antd";
import { Link } from "react-router-dom";
import { HeartTwoTone, HomeTwoTone, RocketTwoTone } from "@ant-design/icons";
const { Content, Footer } = Layout;

import "./layout.css";

const MobileLayout = ({ children }) => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        maxWidth: "480px",
        margin: "0 auto",
      }}
    >
      <Content className="content">{children}</Content>
      <Footer className="footer">
        <div className="footer-center">
          <Link to="/" className="footer-content">
            <HomeTwoTone />
            <span className="link">Home</span>
          </Link>
          <Link to="/campaign" className="footer-content">
            <HeartTwoTone />
            <span className="link">Campaign</span>
          </Link>
        </div>
      </Footer>
    </Layout>
  );
};

export default MobileLayout;
