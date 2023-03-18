import MobileLayout from "../layout/MobileLayout";
import ListCampaignHeader from "../components/list-campaign/ListCampaignHeader";
import ListCampaignCard from "../components/list-campaign/ListCampaignCard";

const ListCampaign = () => {
  return (
    <MobileLayout>
      <ListCampaignHeader title="Campaign" />
      <ListCampaignCard />
    </MobileLayout>
  );
};

export default ListCampaign;
