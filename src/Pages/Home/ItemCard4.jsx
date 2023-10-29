import React from "react";
import { Box, Grid, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";

const ItemCard4 = ({ type, heading }) => {
  return (
    <Box>
      <Box justifyContent="center" w="100%" m="auto" mt="6">
        <Text fontSize="2xl" textAlign={"center"}>
          {heading}
        </Text>
      </Box>

      <br />
      <br />
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(4, 1fr)",
          "2xl": "repeat(4,1fr)",
        }}
        w="80%"
        ml="12.5%"
        cursor="pointer"
      >
        {type.map((i) => (
          <Box key={uuid()} w="75%" m="right" mt="5%">
            <Link to={i.linked}>
              <Image
                src={`${i.img}`}
                alt={i.caption}
                w="100%"
                textAlign="right"
              />
            </Link>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemCard4;
