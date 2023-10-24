import React from "react";
import { Box, Text, Image, Heading, GridItem, Grid } from "@chakra-ui/react";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Link } from "react-router-dom";
import uuid from "react-uuid";

const CateFeature = ({ type, }) => {
  return (
    <Box >
        <Heading fontSize="3xl" display="flex" justifyContent="center" textAlign="center"   textColor="black" mt="2%">DANH MỤC NỔI BẬT  </Heading>

    <Box justifyContent="center" w="70%" m="auto" mt="6" cursor="pointer" textAlign="center" display="flex" flexWrap="wrap" textSizeAdjust="auto"  >

      
      {type.map((i) => (
            <Box key={uuid()} >
             
                   
                             <Link to="/computers">
                                    <Box m="auto" _hover={{ transform: "scale(1.1)" }} w="200px"  display="block">
                                    
                                     <Grid
                                      h={["auto", "0", "auto"]}
                                        templateRows={[
                                        "repeat(2, 1fr)",
                                        "repeat(2, 1fr)",
                                        "repeat(2, 1fr)",
                                      ]}
                                      templateColumns={[
                                        "repeat(4, 1fr)",
                                        "repeat(6, 1fr)",
                                        "repeat(6, 1fr)",
                                      ]}
                                    >
                                      <GridItem
                                        rowSpan={[1, 2, 2]}
                                        colSpan={[6, 6, 4]}
                                        m="0 0 0 18%"
                                        p=" 2% 8% "
                                        justifyContent="center"
                                        alignitem="center"
                                        style={{
                                          border: "none",
                                        }}
                                 >
                              <Image src={`${i.imgcatehot}`}  w="60px" h="60px"     m="auto"  />
                              <Text> {i.name}</Text> 
            </GridItem>
            </Grid>
                                    </Box>
                     </Link>
                    </Box>
                



         
          ))}

      </Box>
      </Box>
  );
};

export default CateFeature;
