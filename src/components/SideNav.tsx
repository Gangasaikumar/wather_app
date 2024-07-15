import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import logo from "../assets/logos/logo.svg";
import {
  PieChartOutlined,
  QuestionCircleOutlined,
  TrophyOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const SideNav = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const selectedRoute = useRef(["1"]);
  const Items = [
    {
      key: "1",
      icon: <PieChartOutlined />,
      label: "Overview",
      onClick: () => {
        selectedRoute.current=["1"];
        navigate("/");
      },
    },
    {
      key: "2",
      icon: <QuestionCircleOutlined />,
      label: "Travellers",
      onClick: () => {
        selectedRoute.current=["2"];
        navigate("/travellers");
      },
    },
    {
      key: "3",
      icon: <TrophyOutlined />,
      label: "Event planner",
      onClick: () => {
        selectedRoute.current=["3"];
        navigate("event-planners");
      },
    },
    {
      key: "4",
      icon: <UnorderedListOutlined />,
      label: "Farmers",
      onClick: () => {
        selectedRoute.current=["4"];
        navigate("/farmers");
      },
    },
  ];

  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          top: 0,
        }}
      >
        {/* header logo here  */}
          <Menu
            theme="dark"
            selectable={false}
            mode="inline"
            items={[
              {
                key: "1",
                icon: <img src={logo} width={50} />,
                label: "watherIO",
                onClick: () => {
                  navigate("");
                },
              },
            ]}
          />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedRoute.current}
          items={Items}
        />
      </Sider>
    </>
  );
};

export default SideNav;
