import { useState, useEffect } from "react";
import { Product } from "../interfaces/product";

const deleteProduct = (product: Product) => {
  if (product) {
    return fetch(`http://localhost:3000/products/${product.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  }
};
const updateProduct = (product: Product) => {
  if (product) {
    return fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  }
  // .then((res) => {
  //   return res.json();
  // })
  // .then((value) => {
  //   console.log(value);

  //   if (value && value.id) {
  //     const newData = data.map((item: any) =>
  //       item.id === value.id ? value : item
  //     );
  //     setData(newData);
  //   }
  // });
};
const addProduct = (product: Product) => {
  return fetch(`http://localhost:3000/products/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  // .then((res) => {
  //   return res.json();
  // })
  // .then((newData) => {
  //   return setData([...data, newData]);
  // });
};

export { addProduct, deleteProduct, updateProduct };
