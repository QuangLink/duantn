import React, { useState, useEffect } from "react";
import { Box, Image, Center, Flex, AspectRatio } from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import uuid from "react-uuid";


const BannerCenter = ({ type }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box cursor="pointer">
      <Center>
      <Box width="70%" justifyContent="center">
        
          
           
          {type.map((i) => (
            <Box key={uuid()}   h="350px" display="flex" justifyContent="space-around" backgroundColor="gray.400" borderRadius="15px"
           >
              <Image src={`${i.imgbnct}`} width="100%"
              borderBottomRadius="15px"
               

              />
             
            </Box>
          ))}
       
    
      </Box>
      </Center>
    </Box>
  );
};

export default BannerCenter;
