import { Button, Layout, Menu, MenuProps } from "antd";
import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { NavLink, Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const items: MenuProps["items"] = [
  {
    key: "Dashboard",

    label:<NavLink to={"/admin/dashboard"}>Dashboard</NavLink> ,
  },
  {
    key: "User management",

    label: "User management",
    children:[
      {
        key:"Create admin",
        label:<NavLink to={"/admin/create-admin"}>Create admin</NavLink>
      },
      {
        key:"Create faculty",
        label:<NavLink to={"/admin/create-faculty"}>Create faculty</NavLink>
      },
      {
        key:"Create student",
        label:<NavLink to={"/admin/create-student"}>Create student</NavLink>
      },
    ]
  
  },
 
];

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div />
          <div style={{color:'white', height:'4rem', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <h1>PH University</h1>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
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
            }}
          >
           <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
