import { useEffect, useState } from "react";
import { Card, Progress } from "antd";
// import { dataCampaigns } from "../../data";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { api } from "../../config/api";

import imageCard from "../../assets/images/image-card.png";

const ListCampaignCard = () => {
  const navigate = useNavigate();
  const [dataCampaigns, setDataCampaigns] = useState([]);

  const handleOnDetailButton = (id) => {
    navigate(`/campaign/${id}`);
  };

  const fetchDataCampaigns = async () => {
    await api
      .get("/campaigns")
      .then((res) => {
        console.log(res);
        setDataCampaigns(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchDataCampaigns();
  }, []);

  return (
    <div className="section-list-card">
      {dataCampaigns.map(
        ({ id, title, curr_donation, content, target, target_date }) => (
          <Card
            key={id}
            bordered={false}
            hoverable
            onClick={() => handleOnDetailButton(id)}
          >
            <div className="content-card">
              <img src={imageCard} className="image-card" />
              <div>
                <p className="title-card">{title}</p>
                <Progress
                  percent={(curr_donation / target) * 100}
                  showInfo={false}
                />
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
