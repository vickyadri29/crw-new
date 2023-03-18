import { Button, Card } from "antd";
import "./styles.css";

import loveImage from "../../assets/images/love-image.jpg";
import { Link } from "react-router-dom";

const HeaderHome = () => {
  return (
    <>
      <div className="section-header">
        <h2>Let's help each others!</h2>
        <Link to="/login" className="btn-signin">
          Sign in
        </Link>
      </div>

      <div className="card-header">
        <img src={loveImage} alt="" width={24} />
        <p>No one has ever become poor by giving</p>
      </div>
    </>
  );
};
export default HeaderHome;
