import { Button, Card, Dropdown, message } from "antd";
import "./styles.css";

import loveImage from "../../assets/images/love-image.jpg";
import { Link, useNavigate } from "react-router-dom";
import {
  clearAccessTokenCookie,
  getAccessTokenCookie,
} from "../../utils/cookie";
import { useEffect, useState } from "react";

const HeaderHome = () => {
  const navigate = useNavigate();
  const [checkToken, setCheckToken] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Logout successfully!",
    });
  };

  const removeToken = () => {
    clearAccessTokenCookie("CROWDFUNDING_COOKIE");
    success();
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  const items = [
    {
      key: "1",
      label: <Link>logout</Link>,
    },
  ];

  const menuProps = {
    items,
    onClick: removeToken,
  };

  useEffect(() => {
    const token = getAccessTokenCookie("CROWDFUNDING_COOKIE");
    if (!token) {
      setCheckToken(false);
    } else {
      setCheckToken(true);
    }
  }, []);
  return (
    <>
      {contextHolder}
      <div className="section-header">
        <h2>Let's help each others!</h2>
        {checkToken ? (
          <Dropdown menu={menuProps}>
            <div>Welcome Back</div>
          </Dropdown>
        ) : (
          <Link to="/login" className="btn-signin">
            Sign in
          </Link>
        )}
      </div>

      <div className="card-header">
        <img src={loveImage} alt="" width={24} />
        <p>No one has ever become poor by giving</p>
      </div>
    </>
  );
};
export default HeaderHome;
