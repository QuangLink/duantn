import React, { useEffect, useState } from "react";

export const Editsp = () => {
  const [products, setProduct] = useState([]);
  //lấy id từ param
  const id = window.location.pathname.split("/")[3];
  useEffect(() => {
    fetch(`http://localhost:9000/products/edit/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  console.log(products);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};
