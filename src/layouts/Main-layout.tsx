import { Layout } from "antd";
import SideNav from "../components/SideNav";
import { Content, Footer } from "antd/es/layout/layout";
import { CommonProps } from "../types/allTypes";

const MainLayout = (props: CommonProps) => {

  
  // const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout>
        <SideNav />
        <Layout>
          <Content className="min-h-[280px] p-6">{props.children}</Content>
          <Footer className="bg-yellow-50 text-center">
        ©{new Date().getFullYear()} Created by Gangasai kumar
      </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
