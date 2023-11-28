import React from "react";
import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import Slider1 from "./Slider1";
import Heading from "./Heading";

const ItemCard7 = ({ type, heading, src }) => {
  return (
    <Box justifyContent="center" w="80%" m="auto" mt="6" cursor="pointer">
      <Heading heading={heading} />
      <Flex mt="3" m="center">
        <Box
          w={{ sm: "100%", md: "100%", lg: "100%", xl: "100%", base: "100%" }}
          m="center"
        >
          <Slider1 type={type} />
        </Box>
      </Flex>
    </Box>
  );
};

export default ItemCard7;
