import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import uuid from "react-uuid";

const ItemCard1 = ({ type }) => {
  return (
    <Box cursor="pointer">
      <Box>
        <Slide>
          {type.map((i) => (
            <Box key={uuid()} display="flex" width="100%"   justifyContent="space-around" mt="5px" h="300px"
           >
              <Image src={`${i.img1}`} alt={i.caption} w="49%"
              borderRadius="20px"
             

              
              />
             
              <Image src={`${i.img2}`} alt={i.caption} w="49%" 
                borderRadius="20px"

              />
              
            
            </Box>
          ))}
        </Slide>
      </Box>
    </Box>
  );
};

export default ItemCard1;
