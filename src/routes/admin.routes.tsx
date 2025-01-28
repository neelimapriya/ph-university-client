import AcademicDepartment from "../pages/admin/academicManagement/AcademicDepartment";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/academicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/academicManagement/createAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Courses from "../pages/admin/courseManagements/Courses";
import CreateCourse from "../pages/admin/courseManagements/CreateCourse";
import OfferCourse from "../pages/admin/courseManagements/OfferCourse";
import OfferedCourses from "../pages/admin/courseManagements/OfferedCourses";
import RegisteredSemester from "../pages/admin/courseManagements/RegisteredSemester";
import SemesterRegistration from "../pages/admin/courseManagements/SemesterRegistration";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import StudentDetails from "../pages/admin/userManagement/StudenDetails";
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
        {
         
          path: 'students/:studentId',
          element: <StudentDetails />,
        },
      ],
    },
    {
      name: 'Course Management',
      children: [
        {
          name: 'Semester Registration',
          path: 'semester-registration',
          element: < SemesterRegistration/>,
        },
        {
          name: 'Registered Semesters',
          path: 'registered-semesters',
          element: <RegisteredSemester/>,
        },
        {
          name: 'Create Course',
          path: 'create-course',
          element: <CreateCourse />,
        },
        {
          name: 'Courses',
          path: 'courses',
          element: <Courses />,
        },
        {
          name: 'Offer Course',
          path: 'offer-course',
          element: <OfferCourse />,
        },
        {
          name: 'Offered Courses',
          path: 'offered-courses',
          element: <OfferedCourses />,
        },
      ],
    },
    
  ]