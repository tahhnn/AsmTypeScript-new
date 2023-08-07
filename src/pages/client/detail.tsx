import React from "react";
import { Card } from "antd";
import { useParams } from "react-router-dom";
import { Product } from "../../interfaces/product";

const DetailProduct: React.FC<{ data: Product }> = ({ data }) => {
  const { id } = useParams();
  const product: Product | undefined = data.find(
    (p: any) => p.id === Number(id)
  );
  return (
    <Card title="Chi tiết sản phẩm" bordered={false} style={{ width: 300 }}>
      <>
        {product ? (
          <>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </>
        ) : (
          <p>Sản phẩm không tồn tại</p>
        )}
      </>
    </Card>
  );
};

export default DetailProduct;
