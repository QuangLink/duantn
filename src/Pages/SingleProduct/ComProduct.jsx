import React from "react";
import {
  Center,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  ListItem,
  Text,
  UnorderedList,
  useToast,
  color,
} from "@chakra-ui/react";

const ComProduct = () => {
  return (
    <Box
      justifyContent="center"
      w="75%"
      m="auto"
      mt="6"
      cursor="pointer"
      backgroundColor="blackAlpha.50"
      borderRadius="10px"
      height="auto"
    >
      <Box>
        <Heading mt={5} ml={5} p={5} fontSize={"25px"}>
          Bình Luận
        </Heading>
        <Input
          type="text"
          width="90%"
          ml="3%"
          // padding={2}
          fontSize={"10x"}
          borderRadius={"5px"}
          backgroundColor="white"
          placeholder="Nhập bình luận của bạn..."
        />
        <Grid
          m={5}
          p={2}
          gridTemplateColumns={"repeat(2,1fr)"}
          gap="20px"
          justifyContent="space-around"
          alignContent={"center"}
          textAlign="center"
        >
          <Input
            type="text"
            width="90%"
            margin="2%"
            // padding={2}
            fontSize={"10x"}
            borderRadius={"5px"}
            backgroundColor="white"
            placeholder="Họ và tên"
          />
          <Input
            type="email"
            width="90%"
            margin="2%"
            // padding={2}
            fontSize={"10x"}
            borderRadius={"5px"}
            backgroundColor="white"
            placeholder="Email"
          />
          <Input
            type="number"
            width="90%"
            margin="2%"
            // padding={2}
            fontSize={"10x"}
            borderRadius={"5px"}
            backgroundColor="white"
            placeholder="Nhập số điện thoại"
          />
          <Button
            width="90%"
            margin="2%"
            // padding={2}
            fontSize={"10x"}
            borderRadius={"5px"}
            backgroundColor="blue.400"
            color="whiteAlpha.900"
            _hover={{ bg: "whiteAlpha.900", color: "blue.400", fontSize: 20 }}
          >
            Gửi
          </Button>
        </Grid>
        <br />
        <hr />
        <Box
          m={5}
          p={2}
          borderRadius="5px"
          fontWeight="bold.800"
          fontSize="0.7rem"
          backgroundColor="#FFFFFF"
          boxShadow="rgba(0, 0, 0, 0.15) 0px 0px 3px"
          width="auto"
        >
          <Text
            text-transform="capitalize"
            color="#222b45"
            display=" inline"
            fontWeight="bold"
            fontSize="14px"
            line-height="16px"
            mr="10px"
            textDecoration="underline"
          >
            Mai Văn Hưng
          </Text>
          <Text padding={2}>
            <p>Sản phẩm như c</p>
          </Text>
          <Flex justifyContent="end">
            <a href="">Thích</a>
            <a href="">Trả lời</a>
          </Flex>
        </Box>
        <Box
          m={5}
          p={2}
          borderRadius="5px"
          fontWeight="bold.800"
          fontSize="0.7rem"
          backgroundColor="#FFFFFF"
          boxShadow="rgba(0, 0, 0, 0.15) 0px 0px 3px"
          width="auto"
        >
          <Text
            text-transform="capitalize"
            color="#222b45"
            display=" inline"
            fontWeight="bold"
            fontSize="14px"
            line-height="16px"
            mr="10px"
            textDecoration="underline"
          >
            Bùi Trọng Đại
          </Text>
          <Text padding={2}>
            <p>
              Tôi thấy chất lượng sản phẩm khá là tốt ,nhân viên khá là nhiệt
              tình
            </p>
          </Text>
          <Flex justifyContent="end">
            <a href="">Thích</a>
            <a href="">Trả lời</a>
          </Flex>
        </Box>
        <br />
      </Box>
    </Box>
  );
};

export default ComProduct;
