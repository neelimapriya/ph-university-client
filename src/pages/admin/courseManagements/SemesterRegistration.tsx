/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagementApi";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHInput from "../../../components/form/PHInput";
import { toast } from "sonner";
import { semesterStatusOptions } from "../../../constants/Semester";
import { useAddRegisteredSemesterMutation } from "../../../redux/features/admin/courseManagement.api";
import { TResponse } from "../../../types";

const SemesterRegistration = () => {
  const [addSemester] = useAddRegisteredSemesterMutation();
  const { data: academicSemester } = useGetAllSemestersQuery([
    { name: "sort", value: "year" },
  ]);
  console.log(academicSemester);

  const academicSemesterOptions = academicSemester?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId=toast.loading("Creating...")
    const semesterData = {
      ...data,
      minCredit:Number(data.minCredit),
      maxCredit:Number(data.maxCredit)
    };
    console.log(semesterData);
    try {
      const res = (await addSemester(semesterData)) as TResponse<any>;
      console.log(res);
      if (res.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
        console.log(res.error);
      } else {
        toast.success("Semester created", { id: toastId });
      }
    } catch (err) {
      toast.error("something went wrong", { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            label="Academic Semester"
            name="academicSemester"
            options={academicSemesterOptions}
          ></PHSelect>
          <PHSelect
            name="status"
            label="Status"
            options={semesterStatusOptions}
          ></PHSelect>
          <PHDatePicker name="startDate" label="Start Date" />
          <PHDatePicker name="endDate" label="End Date" />
          <PHInput type="text" name="minCredit" label="Min Credit" />
          <PHInput type="text" name="maxCredit" label="Max Credit" />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;
