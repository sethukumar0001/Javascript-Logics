import React, { useState } from "react";
import { LogicRoutes } from "./logic.routes";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import {
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Header, Content, Sider } = Layout;


function MainRoutes(props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <div className="logo" style={{ height: "60px" }} />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <PieChartOutlined />
                <span>Javascript</span>
                <Link to="/" />
              </Menu.Item>
              <Menu.Item key="2">
                <DesktopOutlined />
                <span>React JS</span>
                <Link to="/reactjs" />
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{
                padding: 0,
              }}
            />
            <Content
              style={{
                margin: "0 16px",
              }}
            >
              <Routes>
                {/* Public Routes */}
                {LogicRoutes.map((item, key) => {
                  let Element = item.component;
                  return (
                    <Route key={key} path={item.path} element={<Element />} />
                  );
                })}
                <Route path={"*"} element={<NotFoundPage />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default MainRoutes;
