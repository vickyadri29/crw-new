import { Layout } from "antd";
import { Link } from "react-router-dom";
import {
  FireTwoTone,
  HeartTwoTone,
  HomeTwoTone,
  RocketTwoTone,
} from "@ant-design/icons";
const { Content, Footer } = Layout;

import "./layout.css";
import { useEffect, useState } from "react";
import { getAccessTokenCookie } from "../utils/cookie";

const MobileLayout = ({ children }) => {
  const [checkToken, setCheckToken] = useState(false);
  useEffect(() => {
    const token = getAccessTokenCookie("CROWDFUNDING_COOKIE");
    if (!token) {
      setCheckToken(false);
    } else setCheckToken(true);
  });
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
          {checkToken ? (
            <Link to="/add-campaign" className="footer-content">
              <FireTwoTone />
              <span className="link">Add</span>
            </Link>
          ) : null}
        </div>
      </Footer>
    </Layout>
  );
};

export default MobileLayout;
