import { Button, Space, Table } from "antd";

import { useState } from "react";
import type { TableColumnsType, TableProps } from "antd";

import { TQueryParam, TStudent } from "../../../types";
import { useGetStudentsQuery } from "../../../redux/features/admin/userManagement.api";

export type TTableData = Pick<TStudent, "fullName" | "id">;
const StudentData = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetStudentsQuery(params);

  console.log({ studentData, isLoading, isFetching });
console.log( studentData?.data?.result);
  const tableData = studentData?.data?.result?.map(({ _id, fullName, id }) => ({
    key: _id,
    fullName,
    id,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "fullName",
      dataIndex:"fullName"
    },
    {
      title: "Roll no",
      key: "id",
      dataIndex: "id",
    },

    {
      title: "action",
      key: "x",
      render: () => {
        return (
          <Space>
            <Button>Update</Button>
            <Button>Details</Button>
            <Button>block</Button>
          </Space>
        );
      },
      width:"1%",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );

      setParams(queryParams);
    }
  };
  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default StudentData;
