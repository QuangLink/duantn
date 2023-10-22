import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Flex, Text, Image, Square } from "@chakra-ui/react";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('https://duantn-backend.onrender.com/products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const renderProducts = () => {
//     return products.map((product) => (
//        <Box>{product.prodImg && (
//             <img
//               src={product.prodImg}
//               alt="Product"
//               style={{ width: '100px', height: 'auto', marginLeft: '10px' }}
//             />
//           )} </Box>
//     ));
//   };

//   return (
//     <div>
//     {renderProducts()}
//     </div>

//   );
// };

// export default ProductList;
