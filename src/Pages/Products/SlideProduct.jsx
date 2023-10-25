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
        width="80%"
        display="flex"
        w="80%"
        m="auto"
        mt="6"
        padding="10px"
        borderRadius="5px"
      >
        <Box width="69%" mr="1%">
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
        <Box>
          <Image
            src={`https://cdn.tgdd.vn/2022/06/banner/TraGop390-97-390x97-2-390x97-2.png`}
            alt={""}
            mb="6%"
          />
          <Image
            src={`https://cdn.tgdd.vn/2022/07/banner/TV-Trung-bay-390x97-1.png`}
            alt={""}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SlideProuct;
