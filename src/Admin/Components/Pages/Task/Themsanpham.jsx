import React, { useState, useEffect } from "react";
import "./Themsp.css";
import axios from "axios";

const Themsanpham = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [prodTypes, setProdTypes] = useState([]);
  const [prodcatID, setProdcatID] = useState([]);
  const [catName, setCatName] = useState([]);
  const [colors, setColors] = useState([]);
  const [storage, setStorage] = useState([]);
  const [product, setProduct] = useState({
    prodName: "",
    prodType: "",
    prodImg: "",
    prodcatID: "",
    prodPrice: 0,
    prodSale: 0,
    prodDesc: "",
    QTY: 0,
  });
  const [variant, setVariant] = useState({
    colorID: "",
    storageID: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "prodcatID") {
      const selectedCatName = categories.find(
        (category) => category.prodcatID === parseInt(value, 10),
      )?.catName;
      setCatName(selectedCatName || ""); // Set an empty string if no matching category is found
    }

    setProduct({
      ...product,
      [name]: value,
    });
  };
  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);
  const fetchColors = async () => {
    try {
      const response = await axios.get(
        "https://duantn-backend.onrender.com/color",
      );
      setColors(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const fetchStorage = async () => {
    try {
      const response = await axios.get(
        "https://duantn-backend.onrender.com/storage",
      );
      setStorage(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://duantn-backend.onrender.com/category/catID",
      );
      setCategories(response.data);
      const uniqueProdcatID = Array.from(
        new Set(response.data.map((product) => product.prodcatID)),
      );
      setProdcatID(uniqueProdcatID);
      //get catName base on prodcatID
      const catName = response.data.map((product) => product.catName);
      setCatName(catName);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://duantn-backend.onrender.com/products",
      );
      setProducts(response.data);

      const uniqueProdTypes = Array.from(
        new Set(response.data.map((product) => product.prodType)),
      );
      setProdTypes(uniqueProdTypes);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  const handleAddProduct = async () => {
    // Tính giá trước khi giảm dựa trên giá bán và phần trăm giảm giá
    const price = parseFloat(product.prodPrice);
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
        prodDesc: "",
        QTY: 0,
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
      {/* <!-- Sidebar menu--> */}
      <div className="app-sidebar__overlay" data-toggle="sidebar"></div>

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
                    name="QTY"
                    value={product.QTY}
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
                    <option value="all">Loại</option>
                    {prodTypes.map((prodType) => (
                      <option key={prodType} value={prodType}>
                        {prodType}
                      </option>
                    ))}
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
                    <option value="all">Hãng</option>
                    {categories.map((category) => (
                      <option
                        key={category.prodcatID}
                        value={category.prodcatID}
                      >
                        {category.catName}
                      </option>
                    ))}
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
