import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoutes";
const LazyHome = lazy(() => import("../Pages/Home/Home"));
const LazyMainCartPage = lazy(() => import("../Pages/cartPage/MainCartPage"));
const LazyLogin = lazy(() => import("../Pages/Login/SignInApp"));
const LazyProducts = lazy(() => import("../Pages/Products/Products"));
const LazySingleProduct = lazy(() =>
import("../Pages/SingleProduct/SingleProduct"),
);
const LazyWishlist = lazy(() => import("../Pages/Wishlist/Wishlist"));
const LazyPayments = lazy(() => import("../Pages/payment/Payments"));
const LazyCheckout = lazy(() => import("../Pages/checkout/checkout"));
const LazyLastPage = lazy(() => import("../Pages/cartPage/LastPage"));
const LazyProductList = lazy(() => import("../testlist"));

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyHome />
            </Suspense>
          }
        ></Route>
        <Route
          path="/laptop"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyProducts typeOfProduct="laptop" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/laptop/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazySingleProduct typeOfProduct="laptop" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/phone"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyProducts typeOfProduct="phone" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/phone/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazySingleProduct typeOfProduct="phone" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/tablet"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyProducts typeOfProduct="tablet" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/tablet/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazySingleProduct typeOfProduct="tablet" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/iphone"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyProducts typeOfProduct="iphone" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/iphone/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazySingleProduct typeOfProduct="iphone" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/xiaomi"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyProducts typeOfProduct="xiaomi" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/xiaomi/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazySingleProduct typeOfProduct="xiaomi" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/samsung"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyProducts typeOfProduct="samsung" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/samsung/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazySingleProduct typeOfProduct="samsung" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/oppo"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyProducts typeOfProduct="oppo" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/oppo/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazySingleProduct typeOfProduct="oppo" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/hp"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyProducts typeOfProduct="hp" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/hp/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazySingleProduct typeOfProduct="hp" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/asus"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyProducts typeOfProduct="asus" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/asus/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazySingleProduct typeOfProduct="asus" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/lenovo"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyProducts typeOfProduct="asus" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/lenovo/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazySingleProduct typeOfProduct="lenovo" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/acer"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyProducts typeOfProduct="acer" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/acer/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazySingleProduct typeOfProduct="acer" />
            </Suspense>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PrivateRoute>
                <LazyMainCartPage />
              </PrivateRoute>
            </Suspense>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyLogin />
            </Suspense>
          }
        ></Route>

        <Route
          path="/whishlist"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PrivateRoute>
                <LazyWishlist typeOfProduct={"whishlist"} />
              </PrivateRoute>
            </Suspense>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PrivateRoute>
                <LazyCheckout />
              </PrivateRoute>
            </Suspense>
          }
        ></Route>
        <Route
          path="/payments"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PrivateRoute>
                <LazyPayments />
              </PrivateRoute>
            </Suspense>
          }
        ></Route>
        <Route
          path="/lastpage"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <PrivateRoute>
                <LazyLastPage />
              </PrivateRoute>
            </Suspense>
          }
        ></Route>
        <Route
          path="/test"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyProductList />
            </Suspense>
          }
        ></Route>
        {/* <Route path="/order" element={<Products typeOfProduct={"order"}/>}></Route>
            <Route path="/contactus" element={<Products typeOfProduct={"contactus"}/>}></Route>
            <Route path="/profile" element={<Products typeOfProduct={"profile"}/>}></Route> */}
      </Routes>
    </div>
  );
};
export default AllRoutes;
