import React from "react";
import { Route, Routes } from "react-router-dom";
import MainCartPage from "../Pages/cartPage/MainCartPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/SignInApp";
import Products from "../Pages/Products/Products";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Payments from "../Pages/payment/Payments";
import { LastPage } from "../Pages/cartPage/LastPage";
import PrivateRoute from "./PrivateRoute/PrivateRoutes";
import ProductList from "../testlist";
import Checkout from "../Pages/cartPage/Checkout";
import MyOrder from "../Pages/Profile/MyOrder";
import MyProfile from "../Pages/Profile/MyProfile";
import CheckoutTest from "../Pages/checkout/oldcheckout";
import Vnpay from "../Pages/cartPage/vnpay";
import Cart from "../Pages/cartPage/Cart";

const productTypes = [
  "laptop",
  "phone",
  "tablet",
  "iphone",
  "apple/phone",
  "xiaomi",
  "samsung",
  "oppo",
  "hp",
  "asus",
  "lenovo",
  "acer",
  "cable",
  "Battery",
  "LoudSpeaker",
  "mouse",
  "keyboard",
  "smartwatch",
  "EarPhone",
];

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/vnpay" element={<Vnpay />}></Route>
        <Route path="/checkouttest" element={<CheckoutTest />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/duantn" element={<Home />}></Route>

        {productTypes.map((type) => (
          <React.Fragment key={type}>
            <Route
              path={`/${type}`}
              element={<Products typeOfProduct={type} />}
            ></Route>
            <Route
              path={`/${type}/:id`}
              element={<SingleProduct typeOfProduct={type} />}
            ></Route>
          </React.Fragment>
        ))}
        <Route path={`/:id`} element={<SingleProduct />}></Route>
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <MainCartPage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/myorder"
          element={
            <PrivateRoute>
              <MyOrder />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/myprofile"
          element={
            <PrivateRoute>
              <MyProfile />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/payments"
          element={
            <PrivateRoute>
              <Payments />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/lastpage"
          element={
            <PrivateRoute>
              <LastPage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/test" element={<ProductList />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
