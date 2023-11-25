import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text, Box } from "@chakra-ui/react";

const Quanlydonhang = () => {
  const [products, setProducts] = useState([]);

  const [selectedOrderCode, setSelectedOrderCode] = useState(null);
  const [selectedOrderStatus, setSelectedOrderStatus] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchDate, setSearchDate] = useState("");
  const [searchOrderID, setSearchOrderID] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    // Filter products based on selectedOrderStatus, searchTerm, searchDate, and searchOrderID
    const filtered = products.filter(
      (product) =>
        (selectedOrderStatus
          ? product.orderStatus === selectedOrderStatus
          : true) &&
        (searchTerm
          ? product.orderCode.toLowerCase().includes(searchTerm.toLowerCase())
          : true) &&
        (searchDate
          ? new Date(product.orderDate).toISOString().split("T")[0] ===
            searchDate
          : true) &&
        (searchOrderID
          ? product.infoID.toString().includes(searchOrderID)
          : true)
    );
    setFilteredProducts(filtered);
  }, [selectedOrderStatus, searchTerm, searchDate, searchOrderID, products]);

  // ... (existing code)

  const handleFilterChange = (status) => {
    setSelectedOrderStatus(status);
  };
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://duantn-backend.onrender.com/orders/"
      );
      setProducts(response.data);
     
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const updateOrderStatus = async (infoID, status) => {
    try {
      // Send a PUT request to update the order status
      await axios.put(
        `https://duantn-backend.onrender.com/orders/update-order/${infoID}`,
        {
          status: status,
        }
      );

      // Refresh the products list after updating
      fetchProducts();
    } catch (error) {
      console.error("Error updating order status:", error);
      alert("Failed to update order status. Please try again.");
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  useEffect(() => {
    // Filter products based on selectedOrderStatus and searchTerm
    const filtered = products.filter(
      (product) =>
        (selectedOrderStatus
          ? product.orderStatus === selectedOrderStatus
          : true) &&
        (searchTerm
          ? product.orderCode.toLowerCase().includes(searchTerm.toLowerCase())
          : true)
    );
    setFilteredProducts(filtered);
  }, [selectedOrderStatus, searchTerm, products]);

  const renderProducts = () => {
    const productsByOrderCode = filteredProducts.reduce((acc, product) => {
      if (!acc[product.orderCode]) {
        acc[product.orderCode] = [product];
      } else {
        acc[product.orderCode].push(product);
      }
      return acc;
    }, {});

    const handleOrderCodeClick = (orderCode) => {
      setSelectedOrderCode((prevOrderCode) =>
        prevOrderCode === orderCode ? null : orderCode
      );
    };

    const formatCurrency = (amount) => {
      // Format the amount as currency, you may want to use a library for this
      // Example: using Intl.NumberFormat
      const formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      });

      return formatter.format(amount);
    };
    const processedOrderCodes = new Set();
    const totalExpenditure = Object.values(productsByOrderCode)
      .flat()
      .reduce((total, product) => {
        if (!processedOrderCodes.has(product.orderCode)) {
          processedOrderCodes.add(product.orderCode);
          return total + product.totalPay;
        }
        return total;
      }, 0);

    return (
      <>
        {Object.entries(productsByOrderCode).map(([orderCode, productList]) => (
          <React.Fragment key={orderCode}>
            <tbody>
              <tr
                style={{ fontWeight: "bold", cursor: "pointer" }}
                onClick={() => handleOrderCodeClick(orderCode)}
              >
                <th>
                  <Text>{productList[0].infoID}</Text>
                </th>
                <th>{orderCode} </th>
                <th>{productList[0].username}</th>
                <th>{productList[0].payment}</th>
                <td style={{ padding: "5px" }}>
                  {new Date(productList[0].orderDate).toLocaleString()}
                </td>
                <th>
                  <Box
                    fontWeight="600"
                    fontSize="15px"
                    ml="1"
                    color="red"
                    _hover={{ color: "red" }}
                  >
                    {formatCurrency(productList[0].totalPay)}
                  </Box>
                </th>

                <th>
                  {productList[0].orderStatus === "Đã xác nhận" ? (
                    <p style={{ color: "green" }}>
                      {productList[0].orderStatus}
                    </p>
                  ) : productList[0].orderStatus === "Đang giao hàng" ? (
                    <p style={{ color: "green" }}>
                      {productList[0].orderStatus}
                    </p>
                  ) : (
                    <p style={{ color: "red" }}>{productList[0].orderStatus}</p>
                  )}
                </th>
                <th>
                  {productList[0].orderStatus === "Đợi xác nhận" ? (
                    <Box
                      fontWeight="600"
                      fontSize="15px"
                      ml="1"
                      color="red"
                      _hover={{ color: "red" }}
                    >
                      <button
                        type="button"
                        className="btn btn-warning confirm-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          updateOrderStatus(
                            productList[0].infoID,
                            "Đã xác nhận"
                          );
                        }}
                      >
                        Xác nhận
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger confirm-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          updateOrderStatus(productList[0].infoID, "Đã hủy");
                        }}
                      >
                        Hủy
                      </button>
                    </Box>
                  ) : productList[0].orderStatus === "Đã xác nhận" ? (
                    <Box
                      fontWeight="600"
                      fontSize="15px"
                      ml="1"
                      color="#e64510"
                    >
                      <button
                        type="button"
                        className="btn btn-secondary confirm-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          updateOrderStatus(
                            productList[0].infoID,
                            "Đang giao hàng"
                          );
                        }}
                      >
                        Giao hàng
                      </button>
                      <button
                      type="button"
                      className="btn btn-danger confirm-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        updateOrderStatus(productList[0].infoID, "Đã hủy");
                      }}
                    >
                      Hủy
                    </button>
                    </Box>
                  ) : productList[0].orderStatus === "Đang giao hàng" ? (
                    <Box
                      fontWeight="600"
                      fontSize="15px"
                      ml="1"
                      color="#247bc6"
                    >
                      <button
                        type="button"
                        className="btn btn-success confirm-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          updateOrderStatus(
                            productList[0].infoID,
                            "Đã giao hàng"
                          );
                        }}
                      >
                        Đã giao
                      </button>
                      <button
                      type="button"
                      className="btn btn-danger confirm-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        updateOrderStatus(productList[0].infoID, "Đã hủy");
                      }}
                    >
                      Hủy
                    </button>
                    </Box>
                  ) : null}
                </th>
              </tr>
            </tbody>
            {selectedOrderCode === orderCode && (
              <thead>
                <tr>
                  <th>ID SP</th>
                  <th>Tên SP</th>
                  <th></th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                  <th>Trong kho</th>
                </tr>
              </thead>
            )}
            {selectedOrderCode === orderCode &&
              productList.map((product) => (
                <tbody>
                  <tr key={product.prodID}>
                    <td style={{ padding: "5px" }}>{product.prodID}</td>
                    <td style={{ padding: "5px" }}>{product.prodName}</td>
                    <td width="100px">
                      {product.prodImg && (
                        <img
                          src={product.prodImg}
                          alt="Product"
                          style={{
                            width: "100px",
                            height: "auto",
                            marginLeft: "10px",
                          }}
                        />
                      )}
                    </td>
                    <td style={{ padding: "5px" }}>{product.quantity}</td>
                    <td style={{ padding: "5px" }}>
                      {formatCurrency(product.prodPrice)}
                    </td>
                    <td style={{ padding: "5px" }}>{product.QTY}</td>
                  </tr>
                </tbody>
              ))}
            <td></td>
            <tr></tr>
          </React.Fragment>
        ))}
        <tr>
          <td colSpan="10">
            <Text fontWeight="600" fontSize="18px" ml="1" color="green">
              Tổng thu nhập: {formatCurrency(totalExpenditure)}
            </Text>
          </td>
        </tr>
      </>
    );
  };

  return (
    <body onload="time()" class="app sidebar-mini rtl">
      <main class="app-content">
        <div class="app-title">
          <ul class="app-breadcrumb breadcrumb side">
            <li class="breadcrumb-item active">
              <a href="#">
                <b>Danh sách đơn hàng</b>
              </a>
            </li>
          </ul>
          <div id="clock"></div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="tile">
              <div class="tile-body">
                Các chức năng tìm kiếm
                <div class="row element-button">
                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search theo OrderCode"
                      onChange={(e) => handleSearch(e.target.value)}
                    />
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Search by Order Date"
                      onChange={(e) => setSearchDate(e.target.value)}
                    />
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search theo Order ID"
                      onChange={(e) => setSearchOrderID(e.target.value)}
                    />
                  </div>
                </div>
                <table
                  class="table table-hover table-bordered"
                  id="sampleTable"
                >
                  {" "}
                  <thead>
                    <tr>
                      <th width="5%">
                        <Text>ID Đơn</Text>
                      </th>
                      <th>
                        <Text>OrderCode</Text>
                      </th>
                      <th>
                        <Text>User</Text>
                      </th>
                      <th>
                        <Text>Phương thức</Text>
                      </th>
                      <th>
                        <Text>Ngày đặt hàng</Text>
                      </th>
                      <th>
                        <Text>Số tiền</Text>
                      </th>
                      <th>
                        <select
                          onChange={(e) => handleFilterChange(e.target.value)}
                        >
                          <option value="">Lọc theo trạng thái</option>
                          <option value="Đợi xác nhận">Đợi xác nhận</option>
                          <option value="Đã xác nhận">Đã xác nhận</option>
                          <option value="Đang giao hàng">Đang giao hàng</option>
                          <option value="Đã giao hàng">Đã giao hàng</option>
                          <option value="Đã thanh toán">Đã thanh toán</option>
                          <option value="Đã hủy">Đã hủy</option>
                        </select>
                      </th>
                      <th>
                        <Text>Thao tác</Text>
                      </th>
                    </tr>
                  </thead>
                  {renderProducts()}
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
};

export default Quanlydonhang;
