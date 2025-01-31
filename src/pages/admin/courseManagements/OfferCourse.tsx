import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import PHInput from "../../../components/form/PHInput";
import { useGetAcademicDepartmentsQuery, useGetAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagementApi";
import PHSelectWithWatch from "../../../components/form/PHSelectWithWatch";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHTimePicker from "../../../components/form/PHTimePicker";
import { useCreateOfferedCourseMutation, useGetAllCoursesQuery, useGetAllRegisteredSemesterQuery, useGetCourseFacultiesQuery } from "../../../redux/features/admin/courseManagement.api";

const OfferCourse = () => {
    const [courseId, setCourseId]=useState('')
    console.log(courseId,'inside parent');
    const [addOfferedCourse] = useCreateOfferedCourseMutation();

    const { data: semesterRegistrationData } = useGetAllRegisteredSemesterQuery([
      { name: 'sort', value: 'year' },
      { name: 'status', value: 'UPCOMING' },
    
    ]);
    console.log(semesterRegistrationData,'semesterRegistra');
  const { data: academicFacultyData } = useGetAcademicFacultiesQuery(undefined);
  const { data: academicDepartmentData } =
  useGetAcademicDepartmentsQuery(undefined);

const { data: coursesData } = useGetAllCoursesQuery(undefined);

const { data: facultiesData, isFetching: fetchingFaculties } =
  useGetCourseFacultiesQuery(courseId, { skip: !courseId });

const semesterRegistrationOptions = semesterRegistrationData?.data?.map(
  (item) => ({
    value: item._id,
    label: `${item.academicSemester.name} ${item.academicSemester.year}`,
  })
);

const academicFacultyOptions = academicFacultyData?.data?.map((item) => ({
  value: item._id,
  label: item.name,
}));

const academicDepartmentOptions = academicDepartmentData?.data?.map(
  (item) => ({
    value: item._id,
    label: item.name,
  })
);

const courseOptions = coursesData?.data?.map((item) => ({
  value: item._id,
  label: item.title,
}));

const facultiesOptions = facultiesData?.data?.faculties?.map((item) => ({
  value: item._id,
  label: item.fullName,
}));
  const academicSemesterOptions = academicFacultyData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));
  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            name="semesterRegistration"
            label="Semester Registrations"
            options={semesterRegistrationOptions}
          />
          
          <PHSelect
            name="academicFaculty"
            label="Academic Faculty"
            options={academicFacultyOptions}
          />
          <PHSelect
            name="academicDepartment"
            label="Academic Department"
            options={academicDepartmentOptions}
          />
          <PHSelectWithWatch
            onValueChange={setCourseId}
            options={courseOptions}
            name="course"
            label="Course"
          />
          <PHSelect
            disabled={!courseId || fetchingFaculties}
            name="faculty"
            label="Faculty"
            options={facultiesOptions}
          />
          <PHInput type="text" name="section" label="Section" />
          <PHInput type="text" name="maxCapacity" label="Max Capacity" />
          <PHSelect mode="multiple" options={[]} name="days" label="Days" />
          <PHTimePicker name="startTime" label="Start Time" />
          <PHTimePicker name="endTime" label="End Time" />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default OfferCourse;
