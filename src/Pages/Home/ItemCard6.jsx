import React from "react";
import { Box, Grid, Flex, Text, Image, Center } from "@chakra-ui/react";
import uuid from "react-uuid";

const ItemCard6 = ({ type, heading }) => {
  return (
    <Box mb="2" cursor="pointer" w="75%" m="center" ml="12.5%">
      <Center>
        <Text fontSize="xl" color="#003380" fontWeight="700" p="4">
          {heading}
        </Text>
      </Center>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
          "2xl": "repeat(4,1fr)",
        }}
        gap={6}
        w="100%"
        m="center"
      >
        {type.map((i) => (
          <Flex
            height="100px"
            key={uuid()}
            border="2px"
            borderColor="gray.500"
            flexDirection="column"
            backgroundColor="#71717a"
            borderRadius="md"
            p="1"
          >
            <Center>
              <Image boxSize="40px" width="70px" src={`${i.img}`} alt={i.name} />
            </Center>
            <Center>
              <Text color="#003380" fontSize="sm" fontWeight="700">
                {i.title}
              </Text>
            </Center>
            <Center>
              <Text fontSize="10px" color="gray.600">
                {i.desc}
              </Text>
            </Center>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemCard6;
