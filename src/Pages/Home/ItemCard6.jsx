import React from "react";
import { Box, Grid, Flex, Text, Image, Center } from "@chakra-ui/react";
import uuid from "react-uuid";

const ItemCard6 = ({ type, heading }) => {


  return (
    <Center>
       <Center mb="2"  w="73%" display="flex" flexWrap="wrap"  >
      <Center>
        <Text fontSize="xl" color="#003380" fontWeight="700" p="4">
          {heading}
        </Text>
      </Center>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(2,1fr)",
          xl: "repeat(4,1fr)",
          "2xl": "repeat(4,1fr)",
        }}
        gap={6}
        w="100%"
        m="center"
      >
        {type.map((i) => (
          <Flex
            height="auto"
            key={uuid()}
            border="2px"
            borderColor="gray.500"
            flexDirection="column"
            backgroundColor="#fff"
            borderRadius="md"
            p="1"
            _hover={{ backgroundColor: "fd8002" }}
          >
            <Center>
              <Image
                boxSize="40px"
                width="70px"
                src={`${i.img}`}
                alt={i.name}
                _hover={{ backgroundColor: "fd8002" }}
              />
            </Center>
            <Center>
              <Text color="#424245" fontSize="sm" fontWeight="700">
                {i.title}
              </Text>
            </Center>
            <Center>
              <Text fontSize="15px" color="gray.600" className="descDV" p="1">
                {i.desc}
              </Text>
            </Center>
          </Flex>
        ))}
      </Grid>
    </Center>
    </Center>
   
  );
};

export default ItemCard6;
