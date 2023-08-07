import React from "react";
import { Button, Space, Table, Tag, Image } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { AdminType, CateType } from "../../../interfaces/product";

const columns: ColumnsType<CateType> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Tên danh mục",
    dataIndex: "name",
    key: "name",
    render: (text: string, cate: CateType) => (
      <>
        <Link to={`/admin/edit/${cate.id}`}>{text}</Link>
      </>
    ),
  },
];

const AdminCategory: React.FC<{
  cate: CateType[];
  handleCateDelete: AdminType[];
}> = ({ cate, handleCateDelete }) => (
  <>
    <header>
      <h3>Quản lý Danh mục</h3>
    </header>
    <Table
      columns={[
        ...columns,
        {
          title: "Action",
          render: (item: CateType) => {
            return (
              <div>
                <Button
                  onClick={() => {
                    console.log(item);

                    if (window.confirm("Bạn muốn xóa không")) {
                      handleCateDelete(item);
                    }
                  }}
                >
                  Xóa
                </Button>
              </div>
            );
          },
        },
      ]}
      dataSource={cate && cate.map((item) => ({ ...item, key: item.id }))}
    />
  </>
);

export default AdminCategory;
