import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagementApi";

const AcademicSemester = () => {
    const {data}=useGetAllSemestersQuery(undefined)
    console.log(data);
    return (
        <div>
            <h1>academic semester</h1>
        </div>
    );
};

export default AcademicSemester;