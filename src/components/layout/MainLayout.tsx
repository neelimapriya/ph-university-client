import { Button, Layout,  } from "antd";

import { Outlet } from "react-router-dom";

import { Sidebar } from "./sidebar";
import { useAppDispatch } from "../../redux/hook";
import { logout } from "../../redux/features/auth/authSlice";
const { Header, Content } = Layout;

const MainLayout = () => {
  const dispatch=useAppDispatch()
  const handleLogout=()=>{
    dispatch(logout())
  }

  return (
    <div>
      <Layout style={{ height: "100%" }}>
      <Sidebar/>
        <Layout>
          <Header >
            <Button onClick={handleLogout}>Logout</Button>
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
