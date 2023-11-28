import React from "react";
import "./Quanly.css";
import { useState, useEffect } from "react";
import {
  fetchTotalProducts,
  fetchProducts,
  fetchUsers,
  fetchOrders,
} from "../Quanly/api";
const Baocaodoanhthu = () => {
  const [products, setProducts] = React.useState([]);
  const [totalproducts, setTotalProducts] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [orders, setOrders] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTotalProducts(await fetchTotalProducts());
        setProducts(await fetchProducts());
        setUsers(await fetchUsers());
        setOrders(await fetchOrders());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // Gọi hàm fetchProducts khi component được render

  // Đếm số phần tử trong mảng products
  const productCount = totalproducts.length;
  const userCount = users.length;
  const orderCount = orders.length;
  // Đếm số lượng sản phẩm còn lại trong kho
  const lowStock = products.filter((product) => product.QTY < 10).length;
  return (
    <body onload="time()" class="app sidebar-mini rtl">
      {/* <!-- Navbar--> */}

      <main class="app-content">
        <div class="row">
          <div class="col-md-12">
            <div class="app-title">
              <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">
                    <b>Báo cáo doanh thu </b>
                  </a>
                </li>
              </ul>
              <div id="clock"></div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3">
            <div class="widget-small info coloured-icon">
              <i class="icon bx bxs-purchase-tag-alt fa-3x"></i>
              <div class="info">
                <h4>Tổng sản phẩm</h4>
                <p>
                  <b>{productCount} sản phẩm</b>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="widget-small warning coloured-icon">
              <i class="icon fa-3x bx bxs-shopping-bag-alt"></i>
              <div class="info">
                <h4>Tổng đơn hàng</h4>
                <p>
                  <b>{orderCount} đơn hàng</b>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="widget-small primary coloured-icon">
              <i class="icon fa-3x bx bxs-chart"></i>
              <div class="info">
                <h4>Tổng thu nhập</h4>
                <p>
                  <b>104.890.000 đ</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-3">
            <div class="widget-small warning coloured-icon">
              <i class="icon fa-3x bx bxs-tag-x"></i>
              <div class="info">
                <h4>Hết hàng</h4>
                <p>
                  <b>1 sản phẩm</b>
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="widget-small danger coloured-icon">
              <i class="icon fa-3x bx bxs-receipt"></i>
              <div class="info">
                <h4>Đơn hàng hủy</h4>
                <p>
                  <b>2 đơn hàng</b>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="tile">
              <div>
                <h3 class="tile-title">TỔNG ĐƠN HÀNG</h3>
              </div>
              <div class="tile-body">
                <table
                  class="table table-hover table-bordered"
                  id="sampleTable"
                >
                  <thead>
                    <tr>
                      <th>ID đơn hàng</th>
                      <th>Khách hàng</th>
                      <th>Đơn hàng</th>
                      <th>Số lượng</th>
                      <th>Tổng tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ER3835</td>
                      <td>Nguyễn Thị Mỹ Yến</td>
                      <td>Bàn ăn mở rộng Gepa</td>
                      <td>1 sản phẩm</td>
                      <td>16.770.000 đ</td>
                    </tr>
                    <tr>
                      <td>AL3947</td>
                      <td>Phạm Thị Ngọc</td>
                      <td>Bàn ăn Vitali mặt đá, Ghế ăn gỗ Lucy màu trắng</td>
                      <td>2 sản phẩm</td>
                      <td>19.770.000 đ</td>
                    </tr>
                    <tr>
                      <td>QY8723</td>
                      <td>Ngô Thái An</td>
                      <td>Giường ngủ Kara 1.6x2m</td>
                      <td>1 sản phẩm</td>
                      <td>14.500.000 đ</td>
                    </tr>
                    <tr>
                      <th colspan="4">Tổng cộng:</th>
                      <td>104.890.000 đ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="tile">
              <div>
                <h3 class="tile-title">SẢN PHẨM ĐÃ HẾT</h3>
              </div>
              <div class="tile-body">
                <table
                  class="table table-hover table-bordered"
                  id="sampleTable"
                >
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Tên sản phẩm</th>
                      <th>Ảnh</th>
                      <th>Số lượng</th>
                      <th>Tình trạng</th>
                      <th>Giá tiền</th>
                      <th>Danh mục</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>83826226</td>
                      <td>Tủ ly - tủ bát</td>
                      <td>
                        <img src="/img-sanpham/tu.jpg" alt="" width="100px;" />
                      </td>
                      <td>0</td>
                      <td>
                        <span class="badge bg-danger">Hết hàng</span>
                      </td>
                      <td>2.450.000 đ</td>
                      <td>Tủ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="tile">
              <h3 class="tile-title">DỮ LIỆU HÀNG THÁNG</h3>
              <div class="embed-responsive embed-responsive-16by9">
                <canvas
                  class="embed-responsive-item"
                  id="lineChartDemo"
                ></canvas>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="tile">
              <h3 class="tile-title">THỐNG KÊ DOANH SỐ</h3>
              <div class="embed-responsive embed-responsive-16by9">
                <canvas
                  class="embed-responsive-item"
                  id="barChartDemo"
                ></canvas>
              </div>
            </div>
          </div>
        </div>

        <div class="text-right" style={{ fontSize: "12px" }}>
          <p>
            <b>Hệ thống quản lý V2.0 | Code by Hoài</b>
          </p>
        </div>
      </main>
    </body>
  );
};

export default Baocaodoanhthu;
