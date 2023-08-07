import { useState, useEffect } from "react";

const deleteCate = (product: any) => {
  if (product) {
    return fetch(`http://localhost:3000/categories/${product.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  }
};
const updateCate = (product: any) => {
  if (product) {
    return fetch(`http://localhost:3000/categories/${product.id}`, {
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
const addCate = (product: any) => {
  return fetch(`http://localhost:3000/categories/`, {
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

export { addCate, deleteCate, updateCate };
