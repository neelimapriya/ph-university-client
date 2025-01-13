import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { AdminRoutes } from "./admin.routes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboard></AdminDashboard>,
    children: AdminRoutes
  },
  {
    path: "/faculty",
    element: <AdminDashboard></AdminDashboard>,
    children: AdminRoutes
  },
  {
    path: "/student",
    element: <AdminDashboard></AdminDashboard>,
    children: AdminRoutes
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
export default router;
