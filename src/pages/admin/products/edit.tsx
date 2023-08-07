import React, { useEffect } from "react";
import { Button, Form, Input, message, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { AdminType, Product } from "../../../interfaces/product";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct: React.FC<{
  data: Product[];
  updateProduct: AdminType;
}> = ({ data, updateProduct }) => {
  const { id } = useParams();
  const product = data.find((p: Product) => p.id === Number(id));
  const [form] = Form.useForm();
  const navigate = useNavigate();
  useEffect(() => {
    if (product) {
      form.setFieldsValue({
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image,
      });
    }
  }, [product, form]);
  const onFinish = (values: any) => {
    console.log(values);

    updateProduct(values);
    navigate("/admin/products");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          { type: "string", warningOnly: true },
          { type: "string", min: 6 },
        ]}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item name="id" label="ID">
        <Input placeholder="input placeholder" disabled />
      </Form.Item>
      <Form.Item name="price" label="Price">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          { type: "string", warningOnly: true },
          { type: "string", min: 6 },
        ]}
      >
        <TextArea placeholder="input placeholder" />
      </Form.Item>
      <Form.Item
        name="image"
        label="Image"
        rules={[
          { type: "string", warningOnly: true },
          { type: "string", min: 6 },
        ]}
      >
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default UpdateProduct;
