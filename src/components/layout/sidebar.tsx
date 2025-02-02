import { Layout, Menu } from "antd";
import { AdminRoutes } from "../../routes/admin.routes";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerators";
import { FacultyRoutes } from "../../routes/faculty.routes";
import { StudentRoutes } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hook";
import { TUser, useCurrentToken } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
export const Sidebar = () => {
   const token = useAppSelector(useCurrentToken);
    let user;
    if (token) {
      user = verifyToken(token);
    }
    console.log(user);

  let sidebarItems;

  switch ((user as TUser)!.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(AdminRoutes, userRole.ADMIN);

      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(FacultyRoutes, userRole.FACULTY);

      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(StudentRoutes, userRole.STUDENT);

      break;

    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0"
    style={{height:"100vh", position:"sticky", top:"0", left:"0"}}>
      <div />
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH University</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};
