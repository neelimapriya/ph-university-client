import { Button, Table, Tag } from "antd";
import { useState } from "react";
import type { TableColumnsType } from "antd";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { TQueryParam, TSemester } from "../../../types";
import { useGetAllRegisteredSemesterQuery } from "../../../redux/features/admin/courseManagement.api";
import moment from "moment";

export type TTableData = Pick<
  TSemester,
  "academicSemester" | "status" | "startDate" | "endDate"
>;
const RegisteredSemester = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);

  const { data: semesterData, isFetching } =
    useGetAllRegisteredSemesterQuery(undefined);

  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, startDate, endDate, status }) => ({
      key: _id,
      name: `${academicSemester?.name} ${academicSemester?.year}`,
      startDate: moment(new Date(startDate)).format("MMMM Do YYYY"),
      endDate: moment(new Date(endDate)).format("MMMM Do YYYY"),
      status,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (item) => {
        let color;
        if (item === "ONGOING") {
          color = "green";
        }else if(item === "UPCOMING") {
            color = "blue";
          }else{
            color='red'
          }
        return <Tag color={color}>{item}</Tag>;
      },
    },
    {
      title: "Start Date",
      key: "startDate",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      key: "endDate",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

  //   const onChange: TableProps<TTableData>['onChange'] = (
  //     _pagination,
  //     filters,
  //     _sorter,
  //     extra
  //   ) => {
  //     if (extra.action === 'filter') {
  //       const queryParams: TQueryParam[] = [];

  //       filters.name?.forEach((item) =>
  //         queryParams.push({ name: 'name', value: item })
  //       );

  //       filters.year?.forEach((item) =>
  //         queryParams.push({ name: 'year', value: item })
  //       );

  //       setParams(queryParams);
  //     }
  //   };
  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      //   onChange={onChange}
    />
  );
};

export default RegisteredSemester;
