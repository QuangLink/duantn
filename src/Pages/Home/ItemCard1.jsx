import React from "react";
import { Box, Image, Center, Flex } from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import uuid from "react-uuid";

const ItemCard1 = ({ type }) => {
  return (
    <Box cursor="pointer">
      <Center>
        <Box width="70%" mt="-20" justifyContent="center">
          <Slide>
            {type.map((i) => (
              <Box
                key={uuid()}
                h="220px"
                display="flex"
                justifyContent="space-around"
              >
                <Image
                  src={`${i.img1}`}
                  alt={i.caption}
                  w="49%"
                  borderRadius="15px"
                />
                <Image
                  src={`${i.img2}`}
                  alt={i.caption}
                  w="49%"
                  borderRadius="15px"
                />
              </Box>
            ))}
          </Slide>
        </Box>
      </Center>
    </Box>
  );
};

export default ItemCard1;
