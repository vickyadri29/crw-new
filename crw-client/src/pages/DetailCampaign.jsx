import MobileLayout from "../layout/MobileLayout";
import DetailCampaignCard from "../components/detail-campaign/DetailCampaignCard";
import ListCampaignHeader from "../components/list-campaign/ListCampaignHeader";

const DetailCampaign = () => {
  return (
    <MobileLayout>
      <ListCampaignHeader title="Detail Campaign" />
      <DetailCampaignCard />
    </MobileLayout>
  );
};

export default DetailCampaign;
