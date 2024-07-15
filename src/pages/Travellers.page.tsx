import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import WatherReport from "../components/WatherReport";
import PopularPlatforms from "../components/PopularBokokingPlatforms";

const Travellers = () => {
  return (
    <>
      <Layout>
        <Content>
           
<PopularPlatforms />
          <WatherReport />
        </Content>
      </Layout>
    </>
  );
};

export default Travellers;
