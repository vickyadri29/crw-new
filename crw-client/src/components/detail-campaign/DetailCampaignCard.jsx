import { Button, Card, Progress } from "antd";
import "./styles.css";
import imageCard from "../../assets/images/image-card.png";

import { useNavigate, useParams } from "react-router-dom";

const DetailCampaignCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="section-detail-campaign">
      <Card className="card-home" cover={<img src={imageCard} />}>
        <p className="title-card">Testing</p>
        <Progress showInfo={false} />
        <div className="content-card">
          <div>
            <p>Ini adalah kontent</p>
            <p className="target-card">Rp. 500.000</p>
          </div>
          <p>22/03/2023</p>
        </div>
      </Card>
      <Button
        onClick={() => navigate(`/campaign/${id}/donate`)}
        className="btn-donate"
        type="primary"
      >
        Donate now
      </Button>
    </div>
  );
};

export default DetailCampaignCard;
