import React from "react";
import { Box, Image, Center, Flex } from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import uuid from "react-uuid";

const SlideProuct = ({ type }) => {
  return (
    <Box cursor="pointer">
      <Box
        display="flex"
        flexWrap="wrap"
        w="80%"
        m="auto"
        mt="6"
        borderRadius="12px"
        css={{ "@media (max-width: 768px)": { display: "none" } }}
      >
        <Box w="100%" fontSize="25px" fontWeight="600">
          KHUYẾN MÃI CHỈ CÓ TRÊN ONLINE
        </Box>
        <Box width="100%" display="block">
          <img
            src="https://cdn.tgdd.vn/2023/09/banner/1200x150-tgdd-1200x150-1.png"
            width="100%"
          />
          {/* <Slide>
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
          </Slide> */}
        </Box>
      </Box>
    </Box>
  );
};

export default SlideProuct;
