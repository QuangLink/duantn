import { useEffect, useState } from "react";

export default function Thembienthe() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [color, setColor] = useState([]);
  const [storage, setStorage] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedStorage, setSelectedStorage] = useState("");
  const [prodPrice, setProdPrice] = useState(""); // Track product price
  const [prodImg, setProdImg] = useState(""); // Track product image
  const [variants, setVariants] = useState([]);

  const fetchProduct = async () => {
    const response = await fetch(
      "https://duantn-backend.onrender.com/products",
    );
    const data = await response.json();
    setProducts(data);
    setFilteredProducts(data);
    setSelectedProduct(data.length > 0 ? data[0].prodID : "");
  };

  const fetchColor = async () => {
    const response = await fetch(
      "https://duantn-backend.onrender.com/products/colors",
    );
    const data = await response.json();
    setColor(data);
    setSelectedColor(data.length > 0 ? data[0].colorID : "");
  };

  const fetchStorage = async () => {
    const response = await fetch(
      "https://duantn-backend.onrender.com/products/storages",
    );
    const data = await response.json();
    setStorage(data);
    setSelectedStorage(data.length > 0 ? data[0].storageID : "");
  };

  useEffect(() => {
    fetchProduct();
    fetchColor();
    fetchStorage();
  }, []);

  const handleNameSearch = (e) => {
    const name = e.target.value;
    setSearchValue(name);
    const result = products.filter((item) => {
      const lowercaseName = item.prodName.toLowerCase();
      const lowercaseSearch = name.toLowerCase();
      return (
        lowercaseName.includes(lowercaseSearch) ||
        lowercaseSearch.includes(lowercaseName)
      );
    });
    setFilteredProducts(result);
  };

  const handleSelectChange = (e, type) => {
    const value = e.target.value;
    if (type === "product") {
      setSelectedProduct(value);
    } else if (type === "color") {
      setSelectedColor(value);
    } else if (type === "storage") {
      setSelectedStorage(value);
    }
  };

  const handleAddVariant = async (e) => {
    e.preventDefault();

    try {
      // Create a new variant with prodPrice and prodImg
      const variant = {
        prodID: selectedProduct,
        colorID: selectedColor,
        storageID: selectedStorage,
        prodPrice: prodPrice,
        prodImg: prodImg,
      };

      // Send the new variant to the backend
      const response = await fetch(
        "https://duantn-backend.onrender.com/products/variants",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(variant),
        },
      );

      // Check the response status
      if (response.ok) {
        console.log("Variant added successfully");
        // Add the new variant to the local state
        setVariants((prevVariants) => [...prevVariants, variant]);
      } else {
        console.error("Error adding variant");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
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
                <form onSubmit={handleAddVariant}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm kiếm..."
                    value={searchValue}
                    onChange={handleNameSearch}
                  />
                  <div className="form-group col-md-3">
                    <select
                      className="form-control"
                      onChange={(e) => handleSelectChange(e, "product")}
                      defaultValue={selectedProduct}
                    >
                      {filteredProducts.map((item) => (
                        <option key={item.prodID} value={item.prodID}>
                          {item.prodName}
                        </option>
                      ))}
                    </select>
                  </div>
                  <select
                    className="form-control"
                    onChange={(e) => handleSelectChange(e, "color")}
                    defaultValue={selectedColor}
                  >
                    {color.map((item) => (
                      <option key={item.colorID} value={item.colorID}>
                        {item.color}
                      </option>
                    ))}
                  </select>
                  <select
                    className="form-control"
                    onChange={(e) => handleSelectChange(e, "storage")}
                    defaultValue={selectedStorage}
                  >
                    {storage.map((item) => (
                      <option key={item.storageID} value={item.storageID}>
                        {item.storage_value}
                      </option>
                    ))}
                  </select>

                  <div className="form-group  col-md-3">
                    <label className="control-label">Giá bán</label>
                    <input
                      className="form-control"
                      type="number"
                      name="prodPrice"
                      value={prodPrice}
                      onChange={(e) => setProdPrice(e.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label className="control-label">Ảnh sản phẩm </label>
                    <input
                      className="form-control"
                      placeholder=""
                      type="text"
                      name="prodImg"
                      value={prodImg}
                      onChange={(e) => setProdImg(e.target.value)}
                    />
                    {prodImg && (
                      <img
                        src={prodImg}
                        alt="Product"
                        style={{
                          width: "200px",
                          height: "auto",
                          margin: "20px",
                        }}
                      />
                    )}
                  </div>

                  <button type="submit">Thêm biến thể</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
