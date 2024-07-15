import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import WatherReport from "../components/WatherReport";


const Farmers=()=>{
    return <>
   <Layout>
    <Content>
        <WatherReport />
    </Content>
</Layout>
    </>
}

export default Farmers;