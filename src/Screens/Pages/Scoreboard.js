import React from "react";
import Sidebar from "../../Components/Sidebar";
import Topbar from "../../Components/Topbar";
import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

function Scoreboard() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Sidebar />
      </Sider>
      <Layout>
        <Header
          style={{ backgroundColor: "#fff", boxShadow: "0px 4px 6px #C7C7C5" }}
        >
          {" "}
          <Topbar />
        </Header>
        <Content style={{ padding: "20px" }}>Scoreboard</Content>
      </Layout>
    </Layout>
  );
}

export default Scoreboard;
