import React from "react";
import { Route, Routes } from "react-router-dom";
import MainCartPage from "../Pages/cartPage/MainCartPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/SignInApp";
import Products from "../Pages/Products/Products";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Payments from "../Pages/payment/Payments";
// import Checkout from "../Pages/checkout/oldcheckout";
import { LastPage } from "../Pages/cartPage/LastPage";
import PrivateRoute from "./PrivateRoute/PrivateRoutes";
import ProductList from "../testlist";
import Checkout from "../Pages/cartPage/Checkout";
import MyOrder from "../Pages/Profile/MyOrder";
import MyProfile from "../Pages/Profile/MyProfile";
import CheckoutTest from "../Pages/checkout/oldcheckout";
import Vnpay from "../Pages/cartPage/vnpay";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/vnpay" element={<Vnpay />}></Route>
        <Route path="/checkouttest" element={<CheckoutTest />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/duantn" element={<Home />}></Route>
        <Route
          path="/laptop"
          element={<Products typeOfProduct="laptop" />}
        ></Route>
        <Route
          path="/laptop/:id"
          element={<SingleProduct typeOfProduct="laptop" />}
        ></Route>
        <Route
          path="/phone"
          element={<Products typeOfProduct="phone" />}
        ></Route>
        <Route
          path="/phone/:id"
          element={<SingleProduct typeOfProduct="phone" />}
        ></Route>
        <Route
          path="/tablet"
          element={<Products typeOfProduct="tablet" />}
        ></Route>
        <Route
          path="/tablet/:id"
          element={<SingleProduct typeOfProduct="tablet" />}
        ></Route>
        <Route
          path="/iphone"
          element={<Products typeOfProduct="iphone" />}
        ></Route>

        <Route
          path="/iphone/:id"
          element={<SingleProduct typeOfProduct="iphone" />}
        ></Route>
        <Route
          path="/applephone"
          element={<Products typeOfProduct="apple/phone" />}
        ></Route>
        <Route
          path="/applephone/:id"
          element={<SingleProduct typeOfProduct="phone" />}
        ></Route>
        <Route
          path="/xiaomi"
          element={<Products typeOfProduct="xiaomi" />}
        ></Route>

        <Route
          path="/xiaomi/:id"
          element={<SingleProduct typeOfProduct="xiaomi" />}
        ></Route>
        <Route
          path="/samsung"
          element={<Products typeOfProduct="samsung" />}
        ></Route>
        <Route
          path="/samsung/:id"
          element={<SingleProduct typeOfProduct="samsung" />}
        ></Route>
        <Route path="/oppo" element={<Products typeOfProduct="oppo" />}></Route>
        <Route
          path="/oppo/:id"
          element={<SingleProduct typeOfProduct="oppo" />}
        ></Route>
        <Route path="/hp" element={<Products typeOfProduct="hp" />}></Route>
        <Route
          path="/hp/:id"
          element={<SingleProduct typeOfProduct="hp" />}
        ></Route>
        <Route path="/asus" element={<Products typeOfProduct="asus" />}></Route>
        <Route
          path="/asus/:id"
          element={<SingleProduct typeOfProduct="asus" />}
        ></Route>
        <Route
          path="/lenovo"
          element={<Products typeOfProduct="asus" />}
        ></Route>
        <Route
          path="/lenovo/:id"
          element={<SingleProduct typeOfProduct="lenovo" />}
        ></Route>
        <Route path="/acer" element={<Products typeOfProduct="acer" />}></Route>
        <Route
          path="/acer/:id"
          element={<SingleProduct typeOfProduct="acer" />}
        ></Route>
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <MainCartPage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route
          path="/whishlist"
          element={
            <PrivateRoute>
              <Wishlist typeOfProduct={"whishlist"} />
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
        {/* <Route path="/order" element={<Products typeOfProduct={"order"}/>}></Route>
            <Route path="/contactus" element={<Products typeOfProduct={"contactus"}/>}></Route>
            <Route path="/profile" element={<Products typeOfProduct={"profile"}/>}></Route> */}
      </Routes>
    </div>
  );
};
export default AllRoutes;
