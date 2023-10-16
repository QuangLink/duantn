import React from "react";
import { Flex, Text, Center, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import './stylehome.css';
const Heading = ({ heading }) => {
  return (
    <Flex gap="2" >
      <Center width="100%" backgroundColor="" h="60px" display="flex" justifyContent="space-between">
        <Box  >
          <Text fontSize="2xl" width="" fontWeight="700" textColor="black"
            className="headingHome"


          > {heading} </Text>
        </Box>
        <Box display="flex" justifyItems="space-around">
          <Link to="/computers" >
            <Text



              margin="10px"

              width="100%"
              fontSize="̀50px"
              fontWeight="500px"
              color="#116d93"


              fontFamily="inherit"


              _hover={{
                letterSpacing: 0.5,
                color: "#c31212",
                textColor: "#c31212",
              }}



            >
              Lượt mua
            </Text >
          </Link>
          <Link to="/computers" >
            <Text

              margin="10px"

              width="100%"
              fontSize="̀50px"
              fontWeight="500px"
              color="#116d93"


              fontFamily="inherit"


              _hover={{
                letterSpacing: 0.5,
                color: "#c31212",
                textColor: "#c31212",
              }}




            >
              Yêu thích
            </Text >
          </Link>
          <Link to="/computers" >
            <Text

              margin="10px"

              width="100%"
              fontSize="̀50px"
              fontWeight="500px"
              color="#116d93"


              fontFamily="inherit"


              _hover={{
                letterSpacing: 0.5,
                color: "#c31212",
                textColor: "#c31212",
              }}




            >
              Giảm giá
            </Text >
          </Link>
          <Link to="/computers" >
            <Text

              margin="10px"

              width="100%"
              fontSize="̀50px"
              fontWeight="500px"
              color="#116d93"


              fontFamily="inherit"


              _hover={{
                letterSpacing: 0.5,
                color: "#c31212",
                textColor: "#c31212",
              }}




            >
              Xem tất cả
            </Text >
          </Link>
        </Box>


      </Center>
    </Flex>
  );
};

export default Heading;
