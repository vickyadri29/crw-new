import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Card, Progress } from "antd";
import { dataCampaigns } from "../../data";
import "./styles.css";

const CardHome = () => {
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
        ({ id, title, image_url, content, target, target_date }) => (
          <SwiperSlide
            key={id}
            style={{
              padding: "16px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card className="card-home" cover={<img src={image_url} />}>
              <p className="title-card">{title}</p>
              <Progress showInfo={false} />
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
