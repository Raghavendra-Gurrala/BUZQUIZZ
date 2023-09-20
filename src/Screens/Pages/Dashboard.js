import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar";
import Topbar from "../../Components/Topbar";
import { Layout } from "antd";

const { Header, Sider, Content } = Layout;

export default function Dashboard() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Sidebar />
      </Sider>
      <Layout>
        <Header
          style={{ backgroundColor: "#fff", boxShadow: "0px 4px 6px #C7C7C5" }}
        >
          <Topbar />
        </Header>
        <Content style={{ padding: "20px" }}>
          <h1>dashboard</h1>
        </Content>
      </Layout>
    </Layout>
  );
}
