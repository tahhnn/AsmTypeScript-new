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
    title: "Tên sản phẩm",
    dataIndex: "name",
    key: "name",
    render: (text: string, product: DataType) => (
      <>
        <Link to={`/admin/detail/${product.id}`}>{text}</Link>
      </>
    ),
  },
  {
    title: "Gía",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Ảnh",
    dataIndex: "image",
    key: "image",
    render: (imageUrl: string) => (
      <Image src={imageUrl} width={100} height={100} />
    ),
  },
  {
    title: "description",
    dataIndex: "description",
    key: "description",
  },
];

const AdminProduct: React.FC<{
  data: DataType[];
  deleteProduct: AdminType;
}> = ({ data, deleteProduct }) => (
  <>
    <header>
      <h3>Quản lý sản phẩm</h3>
    </header>
    <Table
      columns={[
        ...columns,
        {
          title: "Action",
          render: (item: any) => {
            return (
              <div>
                <Button
                  onClick={() => {
                    console.log(item);

                    if (window.confirm("Bạn muốn xóa không")) {
                      deleteProduct(item);
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
      dataSource={data && data.map((item) => ({ ...item, key: item.id }))}
    />
  </>
);

export default AdminProduct;
