import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, RouterProvider, Routes } from "react-router-dom";
import LayoutAdmin from "./components/LayoutAdmin";
import Dashboard from "./pages/admin/dashboard";
import AddProduct from "./pages/admin/products/add";
import AdminProduct from "./pages/admin/products";
import UpdateProduct from "./pages/admin/products/edit";
import { addProduct, deleteProduct, updateProduct } from "./api/product";
import { Product } from "./interfaces/product";
import AdminCategory from "./pages/admin/categories";
import { addCate, deleteCate, updateCate } from "./api/cate";
import UpdateCate from "./pages/admin/categories/edit";
import AddCate from "./pages/admin/categories/add";
import SignIn from "./pages/admin/signin";
import HomePage from "./pages/client";
import DetailProduct from "./pages/client/detail";
import LayoutWebsite from "./components/LayoutWebsite";
import UserPage from "./pages/admin/user";
import { addUser, deleteUser, updateUser } from "./api/user";
import Adduser from "./pages/admin/user/add";
import UpdateUser from "./pages/admin/user/edit";

function App() {
  const [data, setData] = useState<Product | []>([]);
  useEffect(() => {
    handleFetch("products");
  }, []);
  const [cate, setCate] = useState([]);
  useEffect(() => {
    handleFetch("categories");
  }, []);
  const [user, setUser] = useState([]);
  useEffect(() => {
    handleFetch("users");
  }, []);
  const handleFetch = (props: any) => {
    fetch(`http://localhost:3000/${props}`)
      .then((res) => res.json())
      .then((value) => {
        if (props === "categories") {
          setCate(value);
        } else if (props === "products") {
          setData(value);
        } else if (props === "users") {
          setUser(value);
        }
      });
  };

  const handleDelete = (product: Product) => {
    deleteProduct(product).then(() => {
      handleFetch("products");
    });
  };
  const handleAdd = (product: Product) => {
    addProduct(product).then(() => {
      handleFetch("products");
    });
  };
  const handleUpdate = (product: Product) => {
    updateProduct(product).then(() => {
      handleFetch("products");
    });
  };
  const handleCateUpdate = (product: Product) => {
    updateCate(product).then(() => {
      handleFetch("categories");
    });
  };
  const handleCateAdd = (product: Product) => {
    addCate(product).then(() => {
      handleFetch("categories");
    });
  };
  const handleCateDelete = (product: Product) => {
    deleteCate(product).then(() => {
      handleFetch("categories");
    });
  };
  const handleUserDelete = (product: Product) => {
    deleteUser(product).then(() => {
      handleFetch("users");
    });
  };
  const handleUserAdd = (product: Product) => {
    addUser(product).then(() => {
      handleFetch("users");
    });
  };
  const handleUserUpdate = (product: Product) => {
    updateUser(product).then(() => {
      handleFetch("users");
    });
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutAdmin />}>
          <Route index path="/admin/dashboard" element={<Dashboard />} />
          <Route
            path="/admin/products"
            element={<AdminProduct data={data} deleteProduct={handleDelete} />}
          />
          <Route
            path="/admin/addproduct"
            element={<AddProduct addProduct={handleAdd} />}
          />
          <Route
            path="/admin/addcate"
            element={<AddCate handleCateAdd={handleCateAdd} />}
          />
          <Route
            path="/admin/detail/:id"
            element={<UpdateProduct updateProduct={handleUpdate} data={data} />}
          />
          <Route
            path="/admin/category"
            element={
              <AdminCategory cate={cate} handleCateDelete={handleCateDelete} />
            }
          />
          <Route
            path="/admin/user"
            element={
              <UserPage user={user} handleUserDelete={handleUserDelete} />
            }
          />
          <Route
            path="/admin/user/add"
            element={<Adduser user={user} handleUserAdd={handleUserAdd} />}
          />
          <Route
            path="/admin/user/edit/:id"
            element={
              <UpdateUser user={user} handleUserUpdate={handleUserUpdate} />
            }
          />
          <Route
            path="/admin/edit/:id"
            element={
              <UpdateCate handleCateUpdate={handleCateUpdate} cate={cate} />
            }
          />
          <Route path="/signin" element={<SignIn />} />
        </Route>
        <Route path="/home" element={<LayoutWebsite />}>
          <Route path="/home" element={<HomePage data={data} />} />
          <Route
            path="/home/detail/:id"
            element={<DetailProduct data={data} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
