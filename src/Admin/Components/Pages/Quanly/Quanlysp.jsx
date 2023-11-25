import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Quanlysanpham = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [prodTypes, setProdTypes] = useState([]);
  const [prodTypeFilter, setProdTypeFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 20;
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://duantn-backend.onrender.com/products"
      );
      setProducts(response.data);

      const uniqueCategories = Array.from(
        new Set(response.data.map((product) => product.catName))
      );
      setCategories(uniqueCategories);

      const uniqueProdTypes = Array.from(
        new Set(response.data.map((product) => product.prodType))
      );
      setProdTypes(uniqueProdTypes);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };
  const deleteProduct = async (prodID) => {
    try {
      await axios.delete(
        `https://duantn-backend.onrender.com/products/${prodID}`
      );
      alert("Product deleted successfully");
      fetchProducts(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Please try again.");
    }
  };
  const handleFilterChange = (event) => {
    setStatusFilter(event.target.value);
  };
  const handleProdTypeChange = (event) => {
    setProdTypeFilter(event.target.value);
  };
  const renderProducts = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Filter products based on status, category, prodType, and search term
    const filteredProducts = products.filter((product) => {
      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "inStock" && product.QTY > 10) ||
        (statusFilter === "outOfStock" && product.QTY === 0) ||
        (statusFilter === "lowStock" && product.QTY > 0 && product.QTY <= 10);

      const matchesCategory =
        categoryFilter === "all" || product.catName === categoryFilter;

      const matchesProdType =
        prodTypeFilter === "all" || product.prodType === prodTypeFilter;

      const matchesSearch = product.prodName
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return (
        matchesStatus && matchesCategory && matchesProdType && matchesSearch
      );
    });

    const currentItems = filteredProducts.slice(
      indexOfFirstItem,
      indexOfLastItem
    );

    return currentItems.map((product) => (
      <tr>
        <td width="10">
          <input type="checkbox" name="check1" value="1" />
        </td>
        <td>{product.prodID}</td>
        <td>{product.prodName}</td>
        <td>
          {" "}
          {product.prodImg && (
            <img
              src={product.prodImg}
              alt="Product"
              style={{ width: "100px", height: "auto", marginLeft: "10px" }}
            />
          )}
        </td>
        <td>{product.QTY}</td>
        <td>
          {product.QTY > 10 ? (
            <span className="badge bg-success">Còn hàng</span>
          ) : product.QTY === 0 ? (
            <span className="badge bg-danger">Hết hàng</span>
          ) : (
            <span className="badge bg-warning">Sắp hết hàng</span>
          )}
        </td>
        <td>{product.prodSale}%</td>
        <td>
          {product.prodPrice.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </td>
        <td>
          {product.prodPriceSale.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </td>
        <td>{product.prodType}</td>
        <td>{product.catName}</td>
        <td>
          <button
            class="btn btn-primary btn-sm trash"
            type="button"
            title="Xóa"
            onClick={() => deleteProduct(product.prodID)}
          >
            <i class="fas fa-trash-alt"></i>
          </button>
          <button
            class="btn btn-primary btn-sm edit"
            type="button"
            title="Sửa"
            id="show-emp"
            data-toggle="modal"
            data-target="#ModalUP"
          >
            <i class="fas fa-edit"></i>
          </button>
        </td>
      </tr>
    ));
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <body onload="time()" class="app sidebar-mini rtl">
      <main class="app-content">
        <div class="app-title">
          <ul class="app-breadcrumb breadcrumb side">
            <li class="breadcrumb-item active">
              <a href="#">
                <b>Danh sách sản phẩm</b>
              </a>
            </li>
          </ul>
          <div id="clock"></div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="tile">
              <div class="tile-body">
                <div class="row element-button">
                  <div class="col-sm-2">
                    <a class="btn btn-add btn-sm" href="/themsp" title="Thêm">
                      <i class="fas fa-plus"></i>
                      Tạo mới sản phẩm
                    </a>
                  </div>
                  <input
                    type="text"
                    placeholder="Tìm kiếm sản phẩm"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <div class="col-sm-2">
                    <a
                      class="btn btn-delete btn-sm"
                      type="button"
                      title="Xóa"
                      onclick="myFunction(this)"
                    >
                      <i class="fas fa-trash-alt"></i> Xóa tất cả{" "}
                    </a>
                  </div>
                </div>
                <table
                  class="table table-hover table-bordered"
                  id="sampleTable"
                  position="relative"
                >
                  <thead
                    style={{
                      position: "sticky",
                      top: "49px",
                      zIndex: 1,
                      backgroundColor: "#53b7ea",
                    }}
                  >
                    <tr>
                      <th width="10">
                        <input type="checkbox" id="all" />
                      </th>
                      <th width="10px">ID</th>
                      <th width="20%">Tên sản phẩm</th>
                      <th>Ảnh</th>
                      <th>Kho</th>
                      <th width="10%">
                        <select
                          className="form-control-sm"
                          id="statusFilter"
                          value={statusFilter}
                          onChange={handleFilterChange}
                        >
                          <option value="">Tình trạng</option>
                          <option value="inStock">Còn hàng</option>
                          <option value="outOfStock">Hết hàng</option>
                          <option value="lowStock">Sắp hết</option>
                        </select>
                      </th>
                      <th>Giảm</th>
                      <th>Giá bán</th>
                      <th>Giá gốc</th>

                      <th>
                        <select
                          className="form-control-sm"
                          id="prodTypeFilter"
                          value={prodTypeFilter}
                          onChange={handleProdTypeChange}
                        >
                          <option value="all">Loại</option>
                          {prodTypes.map((prodType) => (
                            <option key={prodType} value={prodType}>
                              {prodType}
                            </option>
                          ))}
                        </select>
                      </th>

                      <th>
                        <select
                          className="form-control-sm"
                          id="categoryFilter"
                          value={categoryFilter}
                          onChange={handleCategoryChange}
                        >
                          <option value="all">Hãng</option>
                          {categories.map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </th>
                      <th>Chức năng</th>
                    </tr>
                  </thead>

                  <tbody>{renderProducts()}</tbody>
                </table>
                <ul className="pagination">
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
      </main>
    </body>
  );
};

export default Quanlysanpham;