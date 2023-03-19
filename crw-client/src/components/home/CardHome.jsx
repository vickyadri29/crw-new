import { useEffect, useState } from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Card, Progress } from "antd";

import "./styles.css";
import { api } from "../../config/api";

import imageCard from "../../assets/images/image-card.png";
import { useNavigate } from "react-router-dom";

const CardHome = () => {
  const [dataCampaigns, setDataCampaigns] = useState([]);
  const navigate = useNavigate();

  const fetchDataCampaigns = async () => {
    await api
      .get("/campaigns")
      .then((res) => {
        console.log(res);
        setDataCampaigns(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchDataCampaigns();
  }, []);

  return (
    <Swiper
      modules={[Pagination]}
      pagination={true}
      loop={true}
      slidesPerView="auto"
      breakpoints={{
        300: {
          slidesPerView: "1",
          spaceBetween: 30,
          pagination: {
            clickable: "true",
            dynamicBullets: "true",
          },
        },
      }}
    >
      {dataCampaigns.map(
        ({ id, title, curr_donation, content, target, target_date }) => (
          <SwiperSlide
            key={id}
            style={{
              padding: "16px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              onClick={() => navigate(`/campaign/${id}`)}
              className="card-home"
              cover={<img src={imageCard} />}
            >
              <p className="title-card">{title}</p>
              <Progress
                showInfo={false}
                percent={(curr_donation / target) * 100}
              />
              <div className="content-card">
                <div>
                  <p>{content}</p>
                  <p className="target-card">Rp.{target}</p>
                </div>
                <p>{target_date}</p>
              </div>
            </Card>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default CardHome;
