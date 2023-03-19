import { Button, Card, Progress } from "antd";
import "./styles.css";
import imageCard from "../../assets/images/image-card.png";

import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../config/api";
import { useEffect, useState } from "react";
import { getAccessTokenCookie } from "../../utils/cookie";

const DetailCampaignCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [dataDetail, setDataDetail] = useState("");
  const [checkToken, setCheckToken] = useState(false);

  const fetchDetailCampaign = () => {
    api
      .get(`/campaigns/${id}`)
      .then((res) => {
        console.log(res);
        setDataDetail(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchDetailCampaign();
  }, []);

  useEffect(() => {
    const token = getAccessTokenCookie("CROWDFUNDING_COOKIE");
    console.log({ token });
    if (!token) {
      setCheckToken(false);
    } else {
      setCheckToken(true);
    }
  }, []);

  console.log(dataDetail.curr_donation);
  console.log(dataDetail.curr_donation >= dataDetail.target);

  return (
    <div className="section-detail-campaign">
      <Card className="card-home" cover={<img src={imageCard} />}>
        <p className="title-card">{dataDetail.title}</p>
        <p>{dataDetail.content}</p>
        <Progress
          percent={(dataDetail.curr_donation / dataDetail.target) * 100}
          showInfo={false}
        />
        <div className="content-card">
          <div>
            <p className="target-card">Rp.{dataDetail.target}</p>
            <p className="">
              Collected from <span>Rp.{dataDetail.curr_donation}</span>
            </p>
          </div>
          <p>{dataDetail.target_date}</p>
        </div>
      </Card>
      {checkToken && (
        <>
          {dataDetail.curr_donation >= dataDetail.target ? null : (
            <Button
              onClick={() => navigate(`/campaign/${id}/donate`)}
              className="btn-donate"
              type="primary"
            >
              Donate now
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default DetailCampaignCard;
