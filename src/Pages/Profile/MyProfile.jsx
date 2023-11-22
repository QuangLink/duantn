"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Input,
  FormLabel,
  Avatar,
  Stack,
  Radio,
  RadioGroup,
  Alert,
  AlertIcon,
  Textarea,
  Text,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
} from "@chakra-ui/react";
import "react-slideshow-image/dist/styles.css";

import MyOrder from "./MyOrder";
import { useToast } from "@chakra-ui/react";

const ChangePass = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra mật khẩu hiện tại
    if (currentPassword !== "currentPassword123") {
      setErrorMessage("Mật khẩu hiện tại không chính xác");
      setSuccessMessage("");
      return;
    }

    // Kiểm tra mật khẩu mới và xác nhận mật khẩu
    if (newPassword !== confirmPassword) {
      setErrorMessage("Mật khẩu mới và xác nhận mật khẩu không khớp");
      setSuccessMessage("");
      return;
    }

    // Thực hiện đổi mật khẩu
    // Gửi request đổi mật khẩu tới server

    setErrorMessage("");
    setSuccessMessage("Đổi mật khẩu thành công");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };
  return (
    <>
      <Box
        id="chang-pwd"
        maxW="30̀%"
        mx="auto"
        mt="40px"
        p="20px"
        borderWidth="1px"
        borderRadius="md"
        className="profile-container"
      >
        <Heading mb="20px">Đổi mật khẩu</Heading>

        {errorMessage && (
          <Alert status="error" mb="20px">
            <AlertIcon />
            {errorMessage}
          </Alert>
        )}
        {successMessage && (
          <Alert status="success" mb="20px">
            <AlertIcon />
            {successMessage}
          </Alert>
        )}
        <form onSubmit={handleSubmit}>
          <FormControl mb="20px">
            <FormLabel>Mật khẩu hiện tại</FormLabel>
            <Input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </FormControl>

          <FormControl mb="20px">
            <FormLabel>Mật khẩu mới</FormLabel>
            <Input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </FormControl>

          <FormControl mb="20px">
            <FormLabel>Xác nhận mật khẩu</FormLabel>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </FormControl>

          <Button type="submit" colorScheme="blue">
            Đổi mật khẩu
          </Button>
        </form>
      </Box>
    </>
  );
};

export default function MyProfile() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  const handleFormChange = (newStep) => {
    setStep(newStep);
    setProgress((newStep - 1) * 33.33);
  };

  const handleSubmit = () => {
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <>
      <Box width="80%" p={6} m="5px auto" as="form">
        <ButtonGroup w="100%">
          <Flex w="100%" justifyContent="center">
            <Flex>
              <Button
                onClick={() => handleFormChange(1)}
                isDisabled={step === 1}
                bg="#4a90e2"
                color="white"
                variant="solid"
                fontSize="20px"
                w="300px"
                height="50px"
                mr="5%"
              >
                Đơn hàng
              </Button>
              <Button
                onClick={() => handleFormChange(2)}
                isDisabled={step === 2}
                bg="#4a90e2"
                color="white"
                variant="solid"
                fontSize="20px"
                w="300px"
                height="50px"
                mr="5%"
              >
                Đổi mật khẩu
              </Button>
            </Flex>
          </Flex>
        </ButtonGroup>
        {step === 1 ? <MyOrder /> : <ChangePass />}
      </Box>
    </>
  );
}
