import HeaderHome from "../components/home/HeaderHome";
import CardHome from "../components/home/CardHome";
import MobileLayout from "../layout/MobileLayout";
import { api } from "../config/api";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    api
      .get("/campaigns")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <MobileLayout>
      {/* <HeaderHome />
      <CardHome /> */}
    </MobileLayout>
  );
};

export default HomePage;
