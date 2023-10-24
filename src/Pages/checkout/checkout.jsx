import React, { useContext, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Cookies from 'js-cookie';
import {
  useDisclosure,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
  Input,
  Flex,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const Checkout = () => {
  const username = Cookies.get('username');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const address = useRef({});
  const toast = useToast();
  const {
    firstname,
    setfirstname,
    lastname,
    setlastname,
    mobile,
    setmobile,
    flat,
    setflat,
    state,
    setstate,
    street,
    setstreet,
    city,
    setcity,
  } = address;
  const navigate = useNavigate();

  const handleAddress = () => {
    let lastname = address.current.setlastname.value;
    let firstname = address.current.setfirstname.value;
    let flat = address.current.setflat.value;
    let state = address.current.setstate.value;
    let street = address.current.setstreet.value;
    let city = address.current.setcity.value;
    let mobile = address.current.setmobile.value;
  };

  const clearAddress = () => {
   //function get username call to this router using axios to delete user: router.delete('/address/:username'
    const apiUrl = `https://duantn-backend.onrender.com/users/address/${username}`;
    axios
      .delete(apiUrl)
      .then((response) => {
        console.log("Server response:", response.data);
        toast({
          title: "Địa chỉ được xóa thành công.",
          description: "Hãy thêm địa chỉ giao hàng mới.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deleting address:", error);
      });

  };
 
  const handleAddressSubmit = () => {
    const newAddress = {
      username: username,
      firstname: address.current.setfirstname.value,
      lastname: address.current.setlastname.value,
      flat: address.current.setflat.value,
      state: address.current.setstate.value,
      street: address.current.setstreet.value,
      city: address.current.setcity.value,
      mobile: address.current.setmobile.value,
    };

    const apiUrl = "https://duantn-backend.onrender.com/users/address";

    axios
      .put(apiUrl, newAddress)
      .then((response) => {
        console.log("Server response:", response.data);

        toast({
          title: "Địa chỉ được thêm thành công.",
          description: "Chúng tôi sẽ sử dụng thông tin để liên hệ.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error adding address:", error);
      });
  };
  //show address data
  const [addressData, setAddressData] = useState({});

  useEffect(() => {
    axios
      .get(`https://duantn-backend.onrender.com/users/address/${username}`)
      .then((response) => {
        console.log("Server response:", response.data);
        setAddressData(response.data);
      })
      .catch((error) => {
        console.error("Error getting address:", error);
      });
  }, [username]);

  return (
    <div style={{ backgroundColor: "#f1eeee", textAlign: "center" }}>
      <Box width="100%" margin="auto" backgroundColor="white" boxShadow="base">
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="center">
                  <Text fontSize="3xl">Địa chỉ giao hàng</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              pb={4}
              style={{
                margin: "20px 150px",
                border: "2px solid #ccc",
                padding: "20px",
                borderRadius: "5px",
              }}
            >
              {addressData.firstname === "" && <Box>Không tìm thấy địa chỉ nào</Box>}
              {addressData.firstname !== "" && (
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#f1eeee",
                    padding: "20px",
                    borderRadius: "5px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Flex
                    width="100%"
                    justifyContent="space-between"
                    alignItems="center"
                    marginBottom="20px"
                  >
                    <Text fontWeight="bold" fontStyle="italic">
                      Tên: {addressData.firstname} {addressData.lastname}
                    </Text>
                    <Text fontStyle="italic">Sđt: {addressData.mobile}</Text>
                  </Flex>
                  <Flex
                    width="100%"
                    justifyContent="space-between"
                    alignItems="center"
                    marginBottom="20px"
                  >
                    <Text fontStyle="italic">
                      Địa chỉ: {addressData.flat}, {addressData.street}, {addressData.city},{" "}
                      {addressData.state}
                    </Text>
                  </Flex>
                </Box>
              )}
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Địa chỉ giao hàng</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Flex flexDirection="column" gap="1rem">
                      <Input
                        placeholder="Họ*"
                        ref={(e) => (address.current["setfirstname"] = e)}
                      />
                      <Input
                        placeholder="Tên*"
                        ref={(e) => (address.current["setlastname"] = e)}
                      />
                      <Input
                        placeholder="Địa chỉ cụ thể (Tòa nhà)*"
                        ref={(e) => (address.current["setflat"] = e)}
                      />
                      <Input
                        placeholder="Đường*"
                        ref={(e) => (address.current["setstreet"] = e)}
                      />
                      <Input
                        placeholder="Thành phố*"
                        ref={(e) => (address.current["setcity"] = e)}
                      />
                      <Input
                        placeholder="Tỉnh*"
                        ref={(e) => (address.current["setstate"] = e)}
                      />
                      <Input
                        type="number"
                        placeholder="Số điện thoại*"
                        ref={(e) => (address.current["setmobile"] = e)}
                      />
                    </Flex>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        handleAddress();
                        handleAddressSubmit();
                      }}
                    >
                      SUBMIT
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </AccordionPanel>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                margin: "20px",
              }}
            >
              {addressData.firstname === "" && (
                <Button onClick={onOpen} colorScheme="blue" variant="outline">
                  Nhập địa chỉ giao hàng mới
                </Button>
              )}
              {addressData.firstname !== "" && (
                <Button onClick={onOpen} colorScheme="blue" variant="outline">
                  Sửa địa chỉ
                </Button>
              )}
              {addressData.firstname !== "" && (
                <Button
                  onClick={() => navigate("/payments")}
                  colorScheme="blue"
                  variant="outline"
                >
                  Chọn phương thức thanh toán
                </Button>
              )}
              {addressData.firstname !== "" && (
                <Button
                  onClick={clearAddress}
                  colorScheme="red"
                  variant="outline"
                >
                  Xóa
                </Button>
              )}
            </div>
          </AccordionItem>
        </Accordion>
      </Box>
    </div>
  );
};

export default Checkout;
