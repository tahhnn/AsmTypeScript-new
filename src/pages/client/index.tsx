import React from "react";
import { Card, List } from "antd";
import { Link } from "react-router-dom";
import Meta from "antd/es/card/Meta";
import "../../index.css";
import { Product } from "../../interfaces/product";
const HomePage: React.FC<{ data: Product }> = ({ data }) => (
  <>
    <List
      className="card-list"
      bordered
      dataSource={
        data && data.map((item: Product) => ({ ...item, key: item.key }))
      }
      renderItem={(item: Product) => (
        <>
          <Card
            className="ant-card"
            style={{ width: 200 }}
            cover={<img alt="example" src={item.image} />}
          >
            <Link to={`/home/detail/${item.id}`}>
              <Meta title={item.name} description={item.description} />
            </Link>
          </Card>
        </>
      )}
    />
  </>
);

export default HomePage;
