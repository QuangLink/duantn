import React from "react";

import { useState, useEffect } from "react";
import {
  fetchTotalProducts,
  fetchProducts,
  fetchUsers,
  fetchOrders,
} from "../Quanly/api";
const Dashboard = () => {
  const [products, setProducts] = React.useState([]);
  const [totalproducts, setTotalProducts] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [orders, setOrders] = React.useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  //render ra bảng tổng kết doanh thu dựa theo ngày map từ orders, các doanh thu trong orders là totalPay và ngày là orderDate

  // Đếm số phần tử trong mảng products
  const productCount = totalproducts.length;
  const userCount = users.length;
  const orderCount = orders.length;

  // Đếm số lượng sản phẩm còn lại trong kho
  const lowStock = products.filter((product) => product.QTY < 10).length;

  const convertToVND = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    const fetchApiUsers = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response);
        setLoading(false);
      } catch (error) {}
    };
    fetchApiUsers();
  }, []);
  const renderTotalPay = () => {
    // Create a Map to store totalPay for each unique date
    const totalPayMap = new Map();

    // Populate the Map with data
    orders.forEach((order) => {
      const orderDate = new Date(order.orderDate).toISOString().split("T")[0];
      if (totalPayMap.has(orderDate)) {
        totalPayMap.set(orderDate, totalPayMap.get(orderDate) + order.totalPay);
      } else {
        totalPayMap.set(orderDate, order.totalPay);
      }
    });

    // Cộng tất cả totalPay lại để ra tổng doanh thu lưu vào totalPayAll

    // Render the table
    return (
      <tbody>
        {Array.from(totalPayMap.entries()).map(([date, totalPay]) => (
          <tr key={date}>
            <th scope="row">{date}</th>
            <td>{convertToVND(totalPay)}</td>
          </tr>
        ))}
      </tbody>
    );
  };
  let totalPayAll = 0;
  orders.forEach((order) => {
    totalPayAll += order.totalPay;
  });

  //render danh sách user từ api
  const renderUsers = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);
    if (loading) return <p>Loading...</p>;
    return currentUsers.map((user) => (
      <tr>
        <td>{user.userID}</td>
        <td>{user.username}</td>

        <td>
          {user.flat}
          {user.street} {user.state} {user.city}{" "}
        </td>

        <td>{user.mobile}</td>
        <td>{user.email}</td>
      </tr>
    ));
  };
  const renderProducts = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <tbody>
        {currentItems.map((product) => (
          <tr key={product.orderID}>
            <td>{product.orderID}</td>
            <td>{product.username}</td>
            <td>{convertToVND(product.totalPay)}</td>
            <td>
              {product.orderStatus === "Đợi xác nhận" ? (
                <span className="badge badge-danger">
                  {product.orderStatus}
                </span>
              ) : product.orderStatus === "Đang giao hàng" ? (
                <span className="badge badge-warning text-dark">
                  {product.orderStatus}
                </span>
              ) : product.orderStatus === "Đã thanh toán" ? (
                <span className="badge badge-primary">
                  {product.orderStatus}
                </span>
              ) : (
                <span className="badge badge-success">
                  {product.orderStatus}
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <body onload="time()" className="app sidebar-mini rtl">
      {/* <!-- Navbar--> */}

      {/* <!-- Sidebar menu--> */}

      <main className="app-content">
        <div className="row">
          <div className="col-md-12">
            <div className="app-title">
              <ul className="app-breadcrumb breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">
                    <b>Bảng điều khiển</b>
                  </a>
                </li>
              </ul>
              <div id="clock"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* <!--Left--> */}
          <div className="col-md-12 col-lg-6">
            <div className="row">
              {/* <!-- col-6 --> */}
              <div className="col-md-6">
                <div className="widget-small primary coloured-icon">
                  <i className="icon bx bxs-user-account fa-3x"></i>
                  <div className="info">
                    <h4>Tổng khách hàng</h4>
                    <p>
                      <b>{userCount} khách hàng</b>
                    </p>
                    <p className="info-tong">
                      Tổng số khách hàng được quản lý.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- col-6 --> */}
              <div className="col-md-6">
                <div className="widget-small info coloured-icon">
                  <i className="icon bx bxs-data fa-3x"></i>
                  <div className="info">
                    <h4>Tổng sản phẩm</h4>
                    <p>
                      <b>{productCount} sản phẩm</b>
                    </p>
                    <p className="info-tong">Tổng số sản phẩm được quản lý.</p>
                  </div>
                </div>
              </div>
              {/* <!-- col-6 --> */}
              <div className="col-md-6">
                <div className="widget-small warning coloured-icon">
                  <i className="icon bx bxs-shopping-bags fa-3x"></i>
                  <div className="info">
                    <h4>Tổng đơn hàng</h4>
                    <p>
                      <b>
                        {" "}
                        {orderCount === 0
                          ? "0 đơn hàng"
                          : `${orderCount} đơn hàng`}
                      </b>
                    </p>
                    <p className="info-tong">
                      Tổng số hóa đơn bán hàng trong tháng.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- col-6 --> */}
              <div className="col-md-6">
                <div className="widget-small danger coloured-icon">
                  <i className="icon bx bxs-error-alt fa-3x"></i>
                  <div className="info">
                    <h4>Sắp hết hàng</h4>
                    <p>
                      <b>
                        {lowStock === 0 ? "0 Sản phẩm" : `${lowStock} Sản phẩm`}
                      </b>
                    </p>
                    <p className="info-tong">
                      Số sản phẩm cảnh báo hết cần nhập thêm.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- col-12 --> */}
              <div className="col-md-12">
                <div className="tile">
                  <h3 className="tile-title">Tình trạng đơn hàng</h3>
                  <div>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>ID đơn hàng</th>
                          <th>User</th>
                          <th>Tổng tiền</th>
                          <th>Trạng thái</th>
                        </tr>
                      </thead>
                      {renderProducts()}
                    </table>
                    <ul className="pagination text-center">
                      {pageNumbers.map((number) => (
                        <li key={number} className="page-item">
                          <a
                            onClick={() => handlePageChange(number)}
                            href="#"
                            className="page-link"
                          >
                            {number}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="tile">
                  <h3 className="tile-title">Khách hàng mới</h3>
                  <div>
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Tên khách hàng</th>
                          <th>Địa chỉ</th>
                          <th>Số điện thoại</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>{renderUsers()}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6">
            <div className="col-md-12">
              <div className="tile">
                <h3 className="tile-title">Thống kê doanh thu</h3>
                <div>
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Ngày</th>
                        <th>Doanh thu</th>
                      </tr>
                    </thead>
                    {renderTotalPay()}

                    <tr>
                      <td class="fw-bolder">Tổng doanh thu</td>
                      <td class="fw-bolder" style={{ color: "red" }}>
                        {convertToVND(totalPayAll)}
                      </td>
                    </tr>
                  </table>

                  <ul className="pagination text-center">
                    {pageNumbers.map((number) => (
                      <li key={number} className="page-item">
                        <a
                          onClick={() => handlePageChange(number)}
                          href="#"
                          className="page-link"
                        >
                          {number}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center" style={{ fontSize: "13px" }}>
          <p>
            <b>
              Copyright
              <script type="text/javascript">
                document.write(new Date().getFullYear());
              </script>{" "}
              Phần mềm quản lý bán hàng | Dev By Hoài
            </b>
          </p>
        </div>
      </main>
      <script src="js/jquery-3.2.1.min.js"></script>
      {/* <!--===============================================================================================--> */}
      <script src="js/popper.min.js"></script>
      <script src="https://unpkg.com/boxicons@latest/dist/boxicons.js"></script>
      {/* <!--===============================================================================================--> */}
      <script src="js/bootstrap.min.js"></script>
      {/* <!--===============================================================================================--> */}
      <script src="js/main.js"></script>
      {/* <!--===============================================================================================--> */}
      <script src="js/plugins/pace.min.js"></script>
      {/* <!--===============================================================================================--> */}
      <script type="text/javascript" src="js/plugins/chart.js"></script>
      {/* <!--===============================================================================================--> */}
    </body>
  );
};

export default Dashboard;
