import React from "react";
import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import Slider from "./Slider";
import Heading from "./Heading";

const ItemCard2 = ({ type, heading, src }) => {
  return (
    <Box justifyContent="center" w="75%" m="auto" mt="6" cursor="pointer">
      <Heading heading={heading} m="10 10 10 10" />
      <Flex mt="6">
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
          <Image
            src={src}
            boxSize="340px"
            border="1px"
            borderColor="gray.200"
            w={{
              xs: "80%",
              sm: "80%",
              md: "80%",
              lg: "400px",
              xl: "400px",
              base: "none",
            }}
          />
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
