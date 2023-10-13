import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputRightElement, Link, Stack, Text, useColorModeValue, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';  // Import Axios

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUserName] = useState("");  // Corrected typo in function name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const toast = useToast();
  const Navigate = useNavigate();

  const HandleSubmit = () => {
    if (!username || !mobile || !email || !password) {
      toast({
        title: "Hãy điền đầy đủ thông tin",
        description: "Hãy kiểm tra lại",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;  // Stop execution if any field is empty
    }
  
    if (email.includes("@") && email.includes(".com")) {
      const payload = {
        username,
        mobile,
        email,
        password,
      };
  
      // Sử dụng Axios để gửi yêu cầu POST
      axios.post("http://localhost:9000/users/register", payload)
        .then((res) => {
          console.log(res.data);
          if (res.data.message === "Username already exists.") {
            toast({
              title: "Username đã tồn tại",
              description: "Vui lòng chọn một tên người dùng khác",
              status: "error",
              duration: 2000,
              isClosable: true,
            });
          } else {
            toast({
              title: "Tạo tài khoản thành công",
              description: "Chào mừng đến với JaguarStore",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
            setTimeout(() => {
              Navigate("/login");
            }, 2200);
          }
        })
        .catch((err) => {
          console.log("err :>> ", err);
          toast({
            title: "Username đã tồn tại",
            description: "Vui lòng đăng nhập",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        });
    } else {
      toast({
        title: "Email không hợp lệ",
        description: "Vui lòng nhập đúng định dạng email",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };
  

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              for great deals and offers ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="firstName" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter Your Name"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </FormControl>
              <FormControl id="tel" isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={HandleSubmit}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <NavLink to="/login">
                    <Link color={"blue.400"}>Login</Link>
                  </NavLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

export default Signup;