import axios from "axios";
import React, { useEffect } from "react";
import Product from "./Product";
import { Box, Grid, GridItem, Heading, Center } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Products/products.action";
import { RotatingLines } from "react-loader-spinner";
import HotProduct from "./HotProduct";
import { BannersCenter, PrApplePhone } from "../Home/CardDetails";
import SlideProuct from "./SlideProduct";
import ProductFilter from "./ProductFilter";
const getData = async (typeOfProduct, brandOfProduct) => {
  let response = await axios.get(
    `http://localhost:9000/category/${typeOfProduct}/${brandOfProduct}`,
  );
  return response.data;
};
const Products = ({ typeOfProduct }) => {
  // const [productArr, setProductArr] = useState([]);
  const productsList = useSelector((store) => store.product.data);
  console.log("in the products page and the products list", productsList);

  const loading = useSelector((store) => store.product.loading);
  const error = useSelector((store) => store.product.error);

  const dispatch = useDispatch();
  //   console.log("in the products page and productlist is :-",productsList,"loading status is:- ",loading,"error status is :-",error);
  const category = {
    laptop: "LAPTOP",
    tablet: "TABLET",
    phone: "Phone",
    apple: "APPLE",
    xiaomi: "XIAOMI",
    samsung: "SAMSUNG",
    oppo: "OPPO",
    hp: "HP",
    asus: "ASUS",
    lenovo: "LENOVO",
    acer: "ACER",
    whishlist: "whishlist",
  };

  useEffect(() => {
    // getData(typeOfProduct).then((res) => setProductArr(res));
    dispatch(getProducts(typeOfProduct));
  }, [typeOfProduct]);

  if (error) {
    return (
      <Heading
        size="3xl"
        textAlign="center"
        color="red.500"
        marginTop={10}
        marginBottom="200px"
      >
        Some thing went wrong...
      </Heading>
    );
  }

  return (
    <Box p="5">
      {/* <Heading p="6" marginBottom={7}>
        {category[typeOfProduct]}
      </Heading>
      <hr></hr> */}
      <Box>
        <SlideProuct type={BannersCenter} />
      </Box>
      <Box mb="2%">
        <HotProduct type={PrApplePhone} />
      </Box>
      <ProductFilter />

      {loading ? (
        <Box h={20}>
          <Center>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              // width="150"
              height={50}
              visible={true}
            />
          </Center>
        </Box>
      ) : (
        <Grid
          width="80%"
          m="auto"
          marginLeft="10%"
          templateColumns={[
            "repeat(2, 1fr)",
            "repeat(3,1fr)",
            "repeat(3,1fr)",
            "repeat(4,1fr)",
          ]}
          gap={2}
          css={{
            "@media (max-width: 768px)": {
              marginLeft: "0",
              width: "100%",
              templateColumns: "none",
            },
          }}
        >
          {productsList.map((elem, i) => {
            // console.log("in the products page in the map method and elem is :- ", elem);
            return (
              <GridItem
                key={elem.prodName + i}
                w="97%"
                h="100%"
                bg="white.500"
                boxShadow="rgba(0, 0, 0, 0.15) 0px 2px 8px"
                padding="5%"
                _hover={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                  cursor: "pointer",
                }}
              >
                <Product data={elem} typeOfProduct={typeOfProduct} />
              </GridItem>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default Products;
