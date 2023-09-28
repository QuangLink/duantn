import React from "react";
import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import Slider from "./Slider";
import Heading from "./Heading";

const ItemCard7 = ({ type, heading, src }) => {
  return (
    <Box justifyContent="center" w="75%" m="auto" mt="6" cursor="pointer">
      <Heading heading={heading} />
      <Flex mt="7" m="center">
        <Box
          w={{ sm: "100%", md: "100%", lg: "100%", xl: "100%", base: "100%"  }}
          m="center" ml="3%"
        >
          <Slider type={type} />
        </Box>
        {/* <Spacer />
        <Box
          boxSize="sm"
          w={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "30%",
            base: "none",
          }}
        >
          <Image
            src={src}
            boxSize="340px"
            border="1px"
            borderColor="gray.200"
          />
        </Box> */}
      </Flex>
    </Box>
  );
};

export default ItemCard7;
