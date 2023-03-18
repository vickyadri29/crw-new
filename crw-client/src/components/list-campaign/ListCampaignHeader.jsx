import { LeftCircleTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const ListCampaignHeader = ({ title }) => {
  const navigate = useNavigate();

  const handleOnBack = () => {
    navigate(-1);
  };

  return (
    <div className="section-list-header">
      <Button onClick={handleOnBack}>
        <LeftCircleTwoTone />
      </Button>
      <span className="prev-btn">{title}</span>
    </div>
  );
};

export default ListCampaignHeader;
