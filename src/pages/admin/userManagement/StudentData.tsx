import { Button, Pagination, Space, Table } from "antd";

import { useState } from "react";
import type { TableColumnsType, TableProps } from "antd";

import { TQueryParam, TStudent } from "../../../types";
import { useGetStudentsQuery } from "../../../redux/features/admin/userManagement.api";
import { Link } from "react-router-dom";

export type TTableData = Pick<TStudent,'fullName' | 'id' | 'email' | 'contactNo'>;
const StudentData = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const {
    data: studentData,
    isLoading,
    isFetching,
  } = useGetStudentsQuery([
    // {
    //   name: "limit",
    //   value: 2,
    // },
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);

  console.log({ studentData, isLoading, isFetching });
  console.log(studentData?.data?.result);
  const metaData=studentData?.meta
  const tableData = studentData?.data?.result?.map(({ _id, fullName, id,email, contactNo }) => ({
    key: _id,
    fullName,
    id,
    email,
      contactNo,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "fullName",
      dataIndex: "fullName",
    },
    {
      title: "Roll no",
      key: "id",
      dataIndex: "id",
    },
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Contact No.',
      key: 'contactNo',
      dataIndex: 'contactNo',
    },

    {
      title: "action",
      key: "x",
      render: (item) => {
        console.log(item);
        return (
          <Space>
        
            <Link to={`/admin/students/${item.key}`}>
              <Button>Details</Button>
            </Link>
            <Button>Update</Button>
            <Button>block</Button>
          </Space>
        );
      },
      width: "1%",
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
      filters.year?.forEach((item) =>
        queryParams.push({ name: 'year', value: item })
      );
      setParams(queryParams);
    }
  };
  return (
    <>
     <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      pagination={false}
    />
    <Pagination 
    current={page}
    onChange={(value)=>setPage(value)}
    pageSize={metaData?.limit} 
    total={metaData?.total}/>
    </>
   
  );
};

export default StudentData;
