import React, { useEffect, useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiFillShopping,
  AiFillHome,
  AiFillSave,
} from "react-icons/ai";
import { Layout, Menu, Button, theme } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import SignIn from "../pages/admin/signin";

const { Header, Sider, Content } = Layout;

const LayoutAdmin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [login, setLogin] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const checkLogin = JSON.parse(localStorage.getItem("users"));
  useEffect(() => {
    if (checkLogin) {
      setLogin(true);
      navigate("/admin/dashboard");
    }
  }, []);
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <AiFillHome />,
              label: <Link to="/admin/dashboard">Dashboard</Link>,
            },
            {
              key: "2",
              icon: <AiFillShopping />,
              label: <Link to="/admin/products">Sản phẩm</Link>,
            },
            {
              key: "4",
              icon: <AiFillSave />,
              label: <Link to="/admin/addproduct">Thêm sản phẩm</Link>,
            },
            {
              key: "3",
              icon: <AiFillShopping />,
              label: <Link to="/admin/category">Loại</Link>,
            },
            {
              key: "5",
              icon: <AiFillSave />,
              label: <Link to="/admin/addcate">Thêm Loại</Link>,
            },
            {
              key: "9",
              icon: <AiFillSave />,
              label: <Link to="/admin/user/add">Thêm Người dùng</Link>,
            },
            {
              key: "7",
              icon: <AiFillSave />,
              label: <Link to="/admin/user">Người dùng</Link>,
            },
            {
              key: "6",
              icon: <AiFillSave />,
              label: login ? (
                <Button
                  onClick={() => {
                    localStorage.clear();
                    setLogin(false);
                  }}
                >
                  Đăng xuất
                </Button>
              ) : (
                <Link to="/signin">Đăng nhập</Link>
              ),
            },
          ]}
        />
      </Sider>
      {login ? (
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={
                collapsed ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />
              }
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      ) : (
        <Layout>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <SignIn />
          </Content>
        </Layout>
      )}
    </Layout>
  );
};

export default LayoutAdmin;
