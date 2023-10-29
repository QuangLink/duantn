import React from "react";
import { Box, Image, Center, Flex } from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import uuid from "react-uuid";

const SlideProuct = ({ type }) => {
  return (
    <Box cursor="pointer">
      <Box
        bg="#6FE4FF"
        display="flex"
        w="80%"
        m="auto"
        mt="6"
        padding="10px"
        borderRadius="5px"
        css={{ "@media (max-width: 768px)": { display: "none" } }}
      >
        <Box width="100%" mr="1%">
          <Slide>
            {type.map((i) => (
              <Box key={uuid()} h="220px">
                <Image
                  src={`${i.img1}`}
                  alt={i.caption}
                  w="100%"
                  height="250px"
                />
              </Box>
            ))}
          </Slide>
        </Box>
      </Box>
    </Box>
  );
};

export default SlideProuct;
