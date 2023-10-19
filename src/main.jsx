
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./mainLayout/Root.jsx";
import ErrorPage from "./mainLayout/ErrorPage";
import Home from "./components/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AddProduct from "./pages/AddProduct";
import MyCart from "./pages/MyCart";

import React from "react";
import Products from "./components/products/Products";
import BrandsCategory from "./components/Brands/BrandsCategory";
import ProductDetails from "./components/products/ProductDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/brand.json')
      },
      {
        path: '/products',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/brands',
        element: <BrandsCategory></BrandsCategory>
      },
      {
        path: '/products/:brandName',
        element: <Products></Products>,
        loader: () => fetch('http://localhost:5000/products')
      },
      {
        path: '/product/:id',
        element: <ProductDetails></ProductDetails>
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
     <RouterProvider router={router} />
  
    
  </React.StrictMode>
);
