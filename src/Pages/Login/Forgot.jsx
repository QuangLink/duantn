import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://duantn-backend.onrender.com/users/forgot",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

      if (response.status === 404) {
        toast({
          title: "Email không tồn tại hoặc chưa được xác minh",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else if (response.status === 500) {
        toast({
          title: "Lỗi server",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Email đã được gửi, hãy kiểm tra email của bạn",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb={4}>
          <FormLabel>Địa chỉ Email</FormLabel>
          <Input
            type="email"
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" w="full">
          Reset Password
        </Button>
      </form>
    </Box>
  );
};

export default Forgot;