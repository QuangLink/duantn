import React from "react";
import { Flex, Text, Center, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./stylehome.css";

const Heading = ({ heading }) => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <Flex gap="2">
      <Center
        width="100%"
        backgroundColor=""
        h="60px"
        display="flex"
        justifyContent="space-between"
      >
        <Box>
          <Text
            mt="2"
            height="70px"
            fontFamily={"Arial"}
            color="#424245"
            noOfLines={2}
            textAlign="center"
            fontSize="20px"
            _hover={{ color: "blue" }}
            fontWeight="700"
            
          >
            {heading}
          </Text>
        </Box>
        
      </Center>
    </Flex>
  );
};

export default Heading;
