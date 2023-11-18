import { Box, Center, Grid, GridItem, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { BannersCenter, PrApplePhone } from "../Home/CardDetails";
import HotProduct from "./HotProduct";
import Product from "./Product";
import ProductFilter from "./ProductFilter";
import SlideProuct from "./SlideProduct";

const Products = ({ typeOfProduct }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const error = useSelector((store) => store.product.error);

  useEffect(() => {
    onGetData();
  }, [typeOfProduct]);

  const onGetData = async () => {
    setFilter("all");
    setLoading(true);
    try {
      let responce = await axios.get(
        `https://duantn-backend.onrender.com/category/${typeOfProduct}`,
      );
      console.log("in the logi func try", responce.data);
      if (responce.data) {
        setFilteredProducts(responce.data || []);
        console.log(
          "list type of list product",
          "typeOfProduct",
          typeOfProduct,
          responce.data.map((el) => el.prodType),
        );
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleFilterChange = (event) => {
    const selectedFilter = event?.target?.value;
    setFilter(selectedFilter);
  };

  const listData = () => {
    switch (filter) {
      case "lowToHigh":
        return filteredProducts.sort((a, b) => a.prodPrice - b.prodPrice);
      case "highToLow":
        return filteredProducts.sort((a, b) => b.prodPrice - a.prodPrice);
      case "sale":
        return filteredProducts.filter((product) => product.prodSale > 0);
      default:
        return filteredProducts;
    }
  };

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
      <ProductFilter
        typeOfProduct={typeOfProduct}
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      {loading ? (
        <Box h={20}>
          <Box></Box>
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
          {listData().map((elem, i) => {
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
