import HeaderHome from "../components/home/HeaderHome";
import CardHome from "../components/home/CardHome";
import MobileLayout from "../layout/MobileLayout";

const HomePage = () => {
  return (
    <MobileLayout>
      <HeaderHome />
      <CardHome />
    </MobileLayout>
  );
};

export default HomePage;
