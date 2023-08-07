import React from "react";
import { Button, Space, Table, Tag, Image } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { AdminType, Product } from "../../../interfaces/product";
interface DataType {
  id: string;
  key: string;
  name: string;
  price: string;
  image: string;
  description: string;
  categoryId: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Tên user",
    dataIndex: "name",
    key: "name",
    render: (text: string, product: DataType) => (
      <>
        <Link to={`/admin/user/edit/${product.id}`}>{text}</Link>
      </>
    ),
  },

  {
    title: "RoleID",
    dataIndex: "roleId",
    key: "roleId",
  },
];

const UserPage: React.FC<{
  user: DataType[];
  handleUserDelete: AdminType;
}> = ({ user, handleUserDelete }) => {
  const checkLogin = JSON.parse(localStorage.getItem("users"));

  return (
    <>
      <header>
        <h3>Quản lý người dùng</h3>
      </header>
      <Table
        columns={[
          ...columns,
          {
            title: "Action",
            render: (item: any) => {
              return (
                <div>
                  {checkLogin.name === item.name || (
                    <Button
                      onClick={() => {
                        console.log(item);

                        if (window.confirm("Bạn muốn xóa không")) {
                          handleUserDelete(item);
                        }
                      }}
                    >
                      Xóa
                    </Button>
                  )}
                </div>
              );
            },
          },
        ]}
        dataSource={user && user.map((item) => ({ ...item, key: item.id }))}
      />
    </>
  );
};

export default UserPage;
