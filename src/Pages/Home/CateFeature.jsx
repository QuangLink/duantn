import React from "react";
import { Box, Text, Image, Heading, GridItem, Grid } from "@chakra-ui/react";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Link } from "react-router-dom";
import uuid from "react-uuid";

const CateFeature = ({ type }) => {
  return (
    <Box>
      <Heading
        fontSize="3xl"
        display="flex"
        justifyContent="center"
        textAlign="center"
        textColor="black"
        mt="2%"
      >
        Danh mục nổi bật
      </Heading>

      <Box
        justifyContent="center"
        w="70%"
        m="auto"
        mt="6"
        cursor="pointer"
        textAlign="center"
        display="flex"
        flexWrap="wrap"
        textSizeAdjust="auto"
      >
        {type.map((i) => (
          <Box key={uuid()}>
            <Link to="/computers">
              <Box
                m="auto"
                _hover={{ transform: "scale(1.1)" }}
                w="200px"
                display="block"
              >
                <Image src={`${i.imgcatehot}`} w="60px" h="60px" m="auto" />
                <Text
                  textAlign="center"
                  padding="0 5px"
                  color="#424245"
                  noOfLines={2}
                  marginBottom="10%"
                  fontSize="15px"
                  _hover={{ color: "red" }}
                >
                  {i.name}
                </Text>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CateFeature;
