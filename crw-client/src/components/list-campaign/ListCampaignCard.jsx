import { Card, Progress } from "antd";
import { dataCampaigns } from "../../data";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const ListCampaignCard = () => {
  const navigate = useNavigate();

  const handleOnDetailButton = (id) => {
    navigate(`/campaign/${id}`);
  };

  return (
    <div className="section-list-card">
      {dataCampaigns.map(
        ({ id, title, image_url, content, target, target_date }) => (
          <Card
            key={id}
            bordered={false}
            hoverable
            onClick={() => handleOnDetailButton(id)}
          >
            <div className="content-card">
              <img src={image_url} className="image-card" />
              <div>
                <p className="title-card">{title}</p>
                <Progress showInfo={false} />
                <div className="content-card">
                  <div>
                    <p>{content}</p>
                    <p className="target-card">Rp.{target}</p>
                  </div>
                  <p>{target_date}</p>
                </div>
              </div>
            </div>
          </Card>
        )
      )}
    </div>
  );
};

export default ListCampaignCard;
