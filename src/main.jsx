
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
import UpdateProduct from "./components/products/UpdateProduct";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./privateRoute/PrivateRoute";




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
        element: <PrivateRoute>
          <AddProduct></AddProduct>
        </PrivateRoute>
      },
      {
        path: '/brands',
        element: <BrandsCategory></BrandsCategory>
        
      },
      {
        path: '/product/:brandName',
        element: <Products></Products>,
        loader: () => fetch('https://brand-shop-server-p7v34gajg-rawshanaras-projects.vercel.app/products')
      },
      {
        path: 'products/:id',
        element: <PrivateRoute>
          <ProductDetails></ProductDetails>
        </PrivateRoute>,
        loader: () => fetch('https://brand-shop-server-p7v34gajg-rawshanaras-projects.vercel.app/products')
      },
      {
        path: '/update/:id',
        element: <PrivateRoute>
          <UpdateProduct></UpdateProduct>
        </PrivateRoute> ,
        loader: ({params}) => fetch(`https://brand-shop-server-p7v34gajg-rawshanaras-projects.vercel.app/products/${params.id}`)
      },
      {
        path: '/myCart',
        element: <PrivateRoute>
          <MyCart></MyCart>
        </PrivateRoute> ,
        loader: () =>fetch('https://brand-shop-server-p7v34gajg-rawshanaras-projects.vercel.app/myCart')
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
  
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>


  </React.StrictMode>
);
