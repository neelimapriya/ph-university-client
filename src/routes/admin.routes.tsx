import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const AdminRoutes=[
      
    {
      path: "dashboard",
      element: <AdminDashboard></AdminDashboard>,
    },
    {
      path: "create-faculty",
      element: <CreateFaculty></CreateFaculty>,
    },
    {
      path: "create-student",
      element: <CreateStudent></CreateStudent>,
    },
    {
      path: "create-admin",
      element: <CreateAdmin></CreateAdmin>,
    },
  ]