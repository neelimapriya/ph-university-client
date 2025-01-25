import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/createAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import StudentData from "../pages/admin/userManagement/StudentData";

export const AdminRoutes=[
      
    {
      name:"Dashboard",
      path: "dashboard",
      element: <AdminDashboard></AdminDashboard>,
    },
    {
      name: 'Academic Management',
      children: [
        {
          name: 'Academic Semester',
          path: 'academic-semester',
          element:<AcademicSemester/>
        },
        {
          name: 'Create A.Semester',
          path: 'create-academic-semester',
          element:<CreateAcademicSemester/>
        },
        {
          name: 'Create A.Faculty',
          path: 'create-academic-faculty',
          element:<CreateAcademicFaculty/>
        },
        {
          name: 'Academic Department',
          path: 'academic-department',
          element:<AcademicDepartment/>
        },
        {
          name: 'Create Academic Semester',
          path: 'create-academic-semester',
          element:<CreateAcademicDepartment/>
        },
        
      ],
    },
    {
      name: 'User Management',
      children: [
        {
          name: 'Create Admin',
          path: 'create-admin',
          element: <CreateAdmin />,
        },
        {
          name: 'Create Faculty',
          path: 'create-faculty',
          element: <CreateFaculty />,
        },
        {
          name: 'Create Student',
          path: 'create-student',
          element: <CreateStudent />,
        },
        {
          name: 'Students',
          path: 'students',
          element: <StudentData />,
        },
      ],
    },
    
  ]