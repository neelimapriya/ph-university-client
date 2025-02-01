import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import { AdminRoutes } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";
import { FacultyRoutes } from "./faculty.routes";
import { StudentRoutes } from "./student.routes";
import ProtectedRoute from "../components/layout/ProtectedRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "about",
        element: <ProtectedRoute><About></About></ProtectedRoute>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "/admin",
    element:<ProtectedRoute role="admin"><App/></ProtectedRoute> ,
    children: routeGenerator(AdminRoutes)
  },
  {
    path: "/faculty",
    element: <ProtectedRoute role="faculty"><App/></ProtectedRoute>,
    children:routeGenerator(FacultyRoutes)
  },
  {
    path: "/student",
    element: <ProtectedRoute role="student"><App/></ProtectedRoute>,
    children:routeGenerator(StudentRoutes)
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
