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
      <Center width="100%" backgroundColor="" h="60px" display="flex" justifyContent="space-between">
        <Box>
          <Text fontSize="2xl" width="" fontWeight="700" textColor="black" className="headingHome">
            {heading}
          </Text>
        </Box>
        <Box display="flex" justifyItems="space-around">
          <Link to="/computers">
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button
                margin="10px"
                border="2px solid gray"
                borderRadius="10px"
                width="100%"
                fontSize="15px"
                color="#116d93"
                fontFamily="initial"
                _hover={{
                  letterSpacing: 0.5,
                  color: "#c31212",
                  textColor: "#c31212",
                }}
              >
                <Text>
                  Xem tất cả
                </Text>
              </Button>
            </motion.div>
          </Link>
        </Box>
      </Center>
    </Flex>
  );
};

export default Heading;
