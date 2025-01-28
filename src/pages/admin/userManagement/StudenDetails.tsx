import { useParams } from "react-router-dom";


const StudentDetails = () => {
    const {studentId}=useParams()
    console.log(studentId);
    return (
        <div>
            <h1>details of {studentId}</h1>
        </div>
    );
};

export default StudentDetails;