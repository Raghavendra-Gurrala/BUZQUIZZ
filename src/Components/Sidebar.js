import React, { useState } from "react";
import { Layout, Menu, Image, Divider } from "antd";
import { FaQuora } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo1.png";
import "./Sidebar.css";
import { AppstoreOutlined, UserOutlined } from "@ant-design/icons";
import { BsMenuDown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const Sidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const handleDashboardClick = () => {
    navigate("/");
  };

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <AppstoreOutlined />,
    },

    {
      path: "/quiz",
      name: "Take Quiz",
      icon: <FaQuora />,
    },
    {
      path: "/scoreboard",
      name: "Scoreboard",
      icon: <BsMenuDown />,
    },
    {
      path: "/myaccount",
      name: "My Account",
      icon: <UserOutlined />,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider theme="light">
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 5,
            }}
          >
            <Image
              src={Logo}
              preview={false}
              width={80}
              height={50}
              style={{ marginLeft: -50 }}
              onClick={handleDashboardClick}
            />
            <div style={{ marginRight: -120 }}>
              <Divider type="vertical" style={{ height: 50 }} />
            </div>
          </div>
          <div style={{ marginTop: -20 }}>
            <Divider />
          </div>
        </div>

        <Menu theme="light" mode="vertical">
          {menuItem.map((item, index) => (
            <Menu.Item
              key={index}
              icon={item.icon}
              selected={item.path === location.pathname}
              style={{
                fontWeight: item.path === location.pathname ? "bold" : "bold",
                color: item.path === location.pathname ? "#fff" : "#000",
                fontFamily:
                  item.path === location.pathname ? "cursive" : "cursive",
                background:
                  item.path === location.pathname
                    ? "linear-gradient(to left, #9775ff, #94b0ff)"
                    : null,
              }}
            >
              <Link to={item.path}>{item.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </Layout>
  );
};

export default Sidebar;
