import React from "react";
import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import Slider from "./Slider";
import Heading from "./Heading";

const ItemCard2 = ({ type, heading, src }) => {
  return (
    <Box justifyContent="center" w="70%"  m="auto" mt="6" cursor="pointer" >
      <Heading heading={heading} m="10 10 10 10"/>
      <Flex mt="6" 
      >
        <Box
          boxSize="sm"
          // w={{
          //   xs: "none",
          //   sm: "none",
          //   md: "none",
          //   lg: "none",
          //   xl: "40%",
          //   base: "none",
          //   test
          // }}
          cursor="pointer"
          pr="4"
        >
         
        </Box>
        <Spacer />
        <Box
          w={{ sm: "100%", md: "100%", lg: "100%", xl: "100%", base: "100%" }}
        >
          <Slider type={type} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ItemCard2;
