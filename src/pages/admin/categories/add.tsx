import React, { useEffect } from "react";
import { Button, Form, Input, message, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { AdminType, Product } from "../../../interfaces/product";
import { useNavigate, useParams } from "react-router-dom";

const AddCate: React.FC<AdminType> = ({ handleCateAdd }) => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log(values);
    handleCateAdd(values);
    navigate("/admin/category");
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

export default AddCate;
