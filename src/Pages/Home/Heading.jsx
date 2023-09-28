import React from "react";
import { Flex, Text, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Heading = ({ heading }) => {
  return (
    <Flex gap="2" >
      <Center width="100%" backgroundColor="black" h="60px">
        <Text fontSize="2xl" display="flex" justifyContent="center" textAlign="center" width=""  textColor="white"> {heading} </Text>
        <Link to="/" >
          <Text 
           
            style={
              {
              width:"100%",
              fontSize: "20px",
              fontWeight: "500",
              color: "#eed92d",
              textAlign: "right",
              marginRight:"25px",
              
            }
            
          }
          _hover={{
            letterSpacing: 0.5,
            color: "blue",
             textColor:"blue", }}

             
            
          >
            VIEW ALL 
          </Text >
        </Link>
      </Center>
    </Flex>
  );
};

export default Heading;
