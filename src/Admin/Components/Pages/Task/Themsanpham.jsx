import React, { useState, useEffect } from "react";
import "./Themsp.css";
import axios from "axios";

const Themsanpham = () => {
  const [product, setProduct] = useState({
    prodName: "",
    prodType: "",
    prodImg: "",
    prodcatID: "",
    prodPrice: 0,
    prodSale: 0,
    prodPriceSale: 0,
    prodDesc: "",
    prodStatus: 1,
    prodQuantity: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://duantn-backend.onrender.com/products"
      );
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const handleAddProduct = async () => {
    // Tính giá trước khi giảm dựa trên giá bán và phần trăm giảm giá
    const price = parseFloat(product.prodPrice);
    const sale = parseFloat(product.prodSale);

    if (!isNaN(price) && !isNaN(sale)) {
      const priceBeforeSale = price + (price * sale) / 100;
      // Cập nhật giá trước khi giảm trong state product
      setProduct({
        ...product,
        prodPriceSale: priceBeforeSale,
      });
    }

    try {
      // Sau khi tính giá trước khi giảm, gửi yêu cầu POST với dữ liệu sản phẩm
      await axios.post("https://duantn-backend.onrender.com/products", product);
      alert("Product added successfully");
      // Reset the form after successful submission
      setProduct({
        prodName: "",
        prodType: "",
        prodcatID: "",
        prodImg: "",
        prodPrice: 0,
        prodSale: 0,
        prodPriceSale: 0,
        prodDesc: "",
        prodStatus: 1,
        prodQuantity: 0,
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again.");
    }
  };

  const editProduct = async (prodID) => {
    try {
      await axios.put(`https://duantn-backend.onrender.com/products/${prodID}`);
      alert("Product edited successfully");
      fetchProducts(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error editing product:", error);
      alert("Failed to edit product. Please try again.");
    }
  };
  return (
    <body className="app sidebar-mini rtl">
      <header className="app-header">
        <a
          className="app-sidebar__toggle"
          href="#"
          data-toggle="sidebar"
          aria-label="Hide Sidebar"
        ></a>
        <ul className="app-nav">
          {/* <!-- User Menu--> */}
          <li>
            <a className="app-nav__item" href="/">
              <i className="bx bx-log-out bx-rotate-180"></i>{" "}
            </a>
          </li>
        </ul>
      </header>
      {/* <!-- Sidebar menu--> */}
      <div className="app-sidebar__overlay" data-toggle="sidebar"></div>
      <aside className="app-sidebar">
        <div className="app-sidebar__user">
          <img
            className="app-sidebar__user-avatar"
            src="/images/hay.jpg"
            width="50px"
            alt="User Image"
          />
          <div>
            <p className="app-sidebar__user-name">
              <b>Nguyễn Vũ Duy Hoài</b>
            </p>
            <p className="app-sidebar__user-designation">
              Chào mừng bạn trở lại
            </p>
          </div>
        </div>
        <hr />
        <ul className="app-menu">
          <li>
            <a className="app-menu__item haha" href="phan-mem-ban-hang.html">
              <i className="app-menu__icon bx bx-cart-alt"></i>
              <span className="app-menu__label">POS Bán Hàng</span>
            </a>
          </li>
          <li>
            <a className="app-menu__item " href="index.html">
              <i className="app-menu__icon bx bx-tachometer"></i>
              <span className="app-menu__label">Bảng điều khiển</span>
            </a>
          </li>

          <li>
            <a className="app-menu__item " href="#">
              <i className="app-menu__icon bx bx-user-voice"></i>
              <span className="app-menu__label">Quản lý khách hàng</span>
            </a>
          </li>
          <li>
            <a className="app-menu__item active" href="table-data-product.html">
              <i className="app-menu__icon bx bx-purchase-tag-alt"></i>
              <span className="app-menu__label">Quản lý sản phẩm</span>
            </a>
          </li>
          <li>
            <a className="app-menu__item" href="table-data-oder.html">
              <i className="app-menu__icon bx bx-task"></i>
              <span className="app-menu__label">Quản lý đơn hàng</span>
            </a>
          </li>
          <li>
            <a className="app-menu__item" href="table-data-banned.html">
              <i className="app-menu__icon bx bx-run"></i>
              <span className="app-menu__label">Quản lý nội bộ</span>
            </a>
          </li>
          <li>
            <a className="app-menu__item" href="table-data-money.html">
              <i className="app-menu__icon bx bx-dollar"></i>
              <span className="app-menu__label">Bảng kê lương</span>
            </a>
          </li>
          <li>
            <a className="app-menu__item" href="quan-ly-bao-cao.html">
              <i className="app-menu__icon bx bx-pie-chart-alt-2"></i>
              <span className="app-menu__label">Báo cáo doanh thu</span>
            </a>
          </li>

          <li>
            <a className="app-menu__item" href="#">
              <i className="app-menu__icon bx bx-cog"></i>
              <span className="app-menu__label">Cài đặt hệ thống</span>
            </a>
          </li>
        </ul>
      </aside>
      <main className="app-content">
        <div className="app-title">
          <ul className="app-breadcrumb breadcrumb">
            <li className="breadcrumb-item">
              <a href="/quanlysp">Danh sách sản phẩm</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Thêm sản phẩm</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="tile">
              <h3 className="tile-title">Tạo mới sản phẩm</h3>
              <div className="tile-body">
                <div className="row element-button">
                  <div className="col-sm-2"></div>
                  <div className="col-sm-2">
                    <a
                      className="btn btn-add btn-sm"
                      data-toggle="modal"
                      data-target="#adddanhmuc"
                    >
                      <i className="fas fa-folder-plus"></i> Thêm danh mục
                    </a>
                  </div>
                  <div className="col-sm-2">
                    <a
                      className="btn btn-add btn-sm"
                      data-toggle="modal"
                      data-target="#addtinhtrang"
                    >
                      <i className="fas fa-folder-plus"></i> Thêm tình trạng
                    </a>
                  </div>
                </div>

                <form className="row" />

                <div className="form-group col-md-3">
                  <label className="control-label">Tên sản phẩm </label>
                  <input
                    className="form-control"
                    placeholder=""
                    type="text"
                    name="prodName"
                    value={product.prodName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group  col-md-3">
                  <label className="control-label">Số lượng</label>
                  <input
                    className="form-control"
                    type="number"
                    name="prodQuantity"
                    value={product.prodQuantity}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group  col-md-3">
                  <label className="control-label">Giá bán</label>
                  <input
                    className="form-control"
                    type="number"
                    name="prodPrice"
                    value={product.prodPrice}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group  col-md-3">
                  <label className="control-label">Phần trăm giảm giá</label>
                  <input
                    className="form-control"
                    type="number"
                    name="prodSale"
                    value={product.prodSale}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group col-md-3 ">
                  <label for="exampleSelect1" className="control-label">
                    Loại sản phẩm
                  </label>
                  <select
                    className="form-control"
                    id="exampleSelect1"
                    name="prodType"
                    value={product.prodType}
                    onChange={handleChange}
                  >
                    <option value="">-- Chọn loại --</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Phone">Phone</option>
                    <option value="Tablet">Tablet</option>
                  </select>
                </div>

                <div className="form-group col-md-3 ">
                  <label for="exampleSelect1" className="control-label">
                    Hãng
                  </label>
                  <select
                    className="form-control"
                    id="exampleSelect1"
                    name="prodcatID"
                    value={product.prodcatID}
                    onChange={handleChange}
                  >
                    <option value="">-- Chọn Hãng --</option>
                    <option value="1">Apple</option>
                    <option value="2">SamSung</option>
                    <option value="3">Oppo</option>
                    <option value="4">Xiaomi</option>
                    <option value="5">Hp</option>
                    <option value="6">Asus</option>
                    <option value="7">Lenovo</option>
                    <option value="8">Acer</option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label className="control-label">Ảnh sản phẩm </label>
                  <input
                    className="form-control"
                    placeholder=""
                    type="text"
                    name="prodImg"
                    value={product.prodImg}
                    onChange={handleChange}
                  />
                  {product.prodImg && (
                    <img
                      src={product.prodImg}
                      alt="Product"
                      style={{ width: "200px", height: "auto", margin: "20px" }}
                    />
                  )}
                </div>

                <div className="form-group col-md-12">
                  <label className="control-label">Mô tả sản phẩm</label>
                  <textarea
                    className="form-control"
                    id="mota"
                    name="prodDesc"
                    value={product.prodDesc}
                    onChange={handleChange}
                  ></textarea>
                  <script>CKEDITOR.replace('mota');</script>
                </div>
              </div>
              <button
                className="btn btn-save"
                type="button"
                onClick={handleAddProduct}
              >
                Lưu lại
              </button>
              <a className="btn btn-cancel" href="">
                Hủy bỏ
              </a>
            </div>
          </div>
        </div>
      </main>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        data-backdrop="static"
        data-keyboard="false"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row"></div>
              <br />
              <button
                className="btn btn-save"
                type="button"
                onClick={handleAddProduct}
              >
                Lưu lại
              </button>
              <a className="btn btn-cancel" data-dismiss="modal" href="#">
                Hủy bỏ
              </a>
              <br />
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="adddanhmuc"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        data-backdrop="static"
        data-keyboard="false"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div className="form-group  col-md-12">
                  <span className="thong-tin-thanh-toan">
                    <h5>Thêm mới danh mục </h5>
                  </span>
                </div>
                <div className="form-group col-md-12">
                  <label className="control-label">Nhập tên danh mục mới</label>
                  <input className="form-control" type="text" required />
                </div>
                <div className="form-group col-md-12">
                  <label className="control-label">
                    Danh mục sản phẩm hiện đang có
                  </label>
                  <ul style={{ paddingLeft: "20px" }}>
                    <li>Apple</li>
                    <li>Oppo</li>
                    <li>Samsung</li>
                    <li>Xiaomi</li>
                  </ul>
                </div>
              </div>
              <br />
              <button
                className="btn btn-save"
                type="button"
                onClick={handleAddProduct}
              >
                Lưu lại
              </button>
              <a className="btn btn-cancel" data-dismiss="modal" href="#">
                Hủy bỏ
              </a>
              <br />
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="addtinhtrang"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        data-backdrop="static"
        data-keyboard="false"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div className="form-group  col-md-12">
                  <span className="thong-tin-thanh-toan">
                    <h5>Thêm mới tình trạng</h5>
                  </span>
                </div>
                <div className="form-group col-md-12">
                  <label className="control-label">Nhập tình trạng mới</label>
                  <input className="form-control" type="text" required />
                </div>
              </div>
              <br />
              <button
                className="btn btn-save"
                type="button"
                onClick={handleAddProduct}
              >
                Lưu lại
              </button>
              <a className="btn btn-cancel" data-dismiss="modal" href="#">
                Hủy bỏ
              </a>
              <br />
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Themsanpham;
