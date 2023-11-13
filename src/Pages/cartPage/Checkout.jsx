import "./cartstyle.css";

import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie";
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
  Center,
  Heading,
  Select,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

import "react-slideshow-image/dist/styles.css";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { BsFillCartCheckFill, BsFillTrashFill } from "react-icons/bs";
import { AiFillCreditCard } from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";

const Checkout = () => {
  const username = Cookies.get("username");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const address = useRef({});
  const toast = useToast();
  const navigate = useNavigate();

  const clearAddress = () => {
    //function get username call to this router using axios to delete user: router.delete('/address/:username'
    const apiUrl = `http://localhost:9000/users/address/${username}`;
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

    const apiUrl = "http://localhost:9000/users/address";

    if (
      !addressData ||
      !Array.isArray(addressData) ||
      addressData.length === 0
    ) {
      // If the address does not exist, perform a POST request
      axios
        .post(apiUrl, newAddress)
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
    } else {
      // If the address exists, perform a PUT request
      axios
        .put(apiUrl, newAddress)
        .then((response) => {
          console.log("Server response:", response.data);

          toast({
            title: "Địa chỉ được cập nhật thành công.",
            description: "Chúng tôi sẽ sử dụng thông tin để liên hệ.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error updating address:", error);
        });
    }
  };
  //show address data
  const [addressData, setAddressData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/users/address/${username}`)
      .then((response) => {
        console.log("Server response:", response.data);
        setAddressData(response.data);
      })
      .catch((error) => {
        console.error("Error getting address:", error);
      });
  }, [username]);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  useEffect(() => {
    fetchData(2, setProvinces);
  }, []);

  const fetchData = (depth, setData, parentCode = null) => {
    axios
      .get(
        `https://provinces.open-api.vn/api/?depth=${depth}&parent_code=${parentCode}`,
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleProvinceChange = (e) => {
    const provinceName = e.target.value; // Giữ value là name
    setSelectedProvince(provinceName);

    if (provinceName) {
      const selectedProvinceData = provinces.find(
        (province) => province.name === provinceName,
      );
      setDistricts(selectedProvinceData.districts || []);
    } else {
      // Clear districts when no province is selected
      setDistricts([]);
    }
    setSelectedDistrict(""); // reset selected district when province changes
  };

  const handleDistrictChange = (e) => {
    const districtName = e.target.value;
    const selectedDistrictData = districts.find(
      (district) => district.name === districtName,
    );

    setSelectedDistrict(selectedDistrictData || {});
  };
  const renderAddressData = () => {
    if (
      !addressData ||
      !Array.isArray(addressData) ||
      addressData.length === 0
    ) {
      return (
        <Flex w="100%">
          <Text mt="5" fontSize="15px" fontWeight="500" fontStyle="italic">
            Bạn chưa có địa chỉ nhận hàng
          </Text>
        </Flex>
      );
    }

    return addressData.map((address, index) => (
      <Flex key={index} w="100%">
        <Text mt="5" fontSize="15px" fontWeight="700">
          {address.firstname} {address.lastname}
        </Text>
        <Text mt="5" fontSize="15px" fontWeight="700" ml="2">
          (+84) {address.mobile} |
        </Text>
        <Text mt="5" fontSize="15px" ml="2">
          Địa chỉ: {address.flat}, {address.street} - {address.state} -{" "}
          {address.city}
        </Text>
      </Flex>
    ));
  };

  return (
    <Center className="cartPage">
      <div>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionPanel>
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

                      <Select
                        id="provinces"
                        onChange={handleProvinceChange}
                        value={selectedProvince || ""}
                        ref={(e) => (address.current["setcity"] = e)}
                      >
                        <option value="">Chọn tỉnh / thành phố</option>
                        {provinces.map((province) => (
                          <option key={province.code} value={province.name}>
                            {province.name}
                          </option>
                        ))}
                      </Select>

                      <Select
                        id="districts"
                        onChange={handleDistrictChange}
                        value={selectedDistrict.name || ""}
                        ref={(e) => (address.current["setstate"] = e)}
                      >
                        <option value="">Chọn quận / huyện</option>
                        {districts.map((district) => (
                          <option
                            key={district.code}
                            value={district.name}
                            data-code={district.code} // Lưu trữ code trong một thuộc tính tùy chỉnh
                          >
                            {district.name}
                          </option>
                        ))}
                      </Select>
                      <Input
                        type="number"
                        placeholder="Số điện thoại*"
                        ref={(e) => (address.current["setmobile"] = e)}
                      />
                      <Button
                        colorScheme="blue"
                        mr={3}
                        onClick={() => {
                          handleAddressSubmit();
                        }}
                      >
                        SUBMIT
                      </Button>
                      <Button
                        variant="ghost"
                        colorScheme="blue"
                        mr={3}
                        onClick={onClose}
                      >
                        Cancel
                      </Button>
                    </Flex>
                  </ModalBody>
                </ModalContent>
              </Modal>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <Heading
        textAlign="center"
        display="flex"
        justifyContent="space-around"
        w="95%"
        m="15p% 10% 10% 10%"
        mt="5"
      >
        <Box className="headingCart">
          <Text className="textHeader">
            <ArrowBackIcon w={6} h={6} color="red.500" /> Trang chủ{" "}
          </Text>
          <Center fontSize="30px" fontWeight="600" color="red.500">
            GIỎ HÀNG
          </Center>
        </Box>
      </Heading>
      <Center
        mt="5px"
        width="100%"
        border="1px solid pink"
        w="95%"
        borderRadius="20px"
        display="flex"
        flexWrap="wrap"
        h="auto"
      >
        <Center className="">
          <Box alignItems="center" justifyContent="center">
            <Box
              border="1px solid red"
              borderRadius="50%"
              w="50px"
              h="50px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              ml="30"
              marginTop="10px"
            >
              {" "}
              <Icon as={BsFillCartCheckFill} w={6} h={6} color="red.500" />{" "}
            </Box>
            <Text>Chọn sản phẩm</Text>
          </Box>
          <span style={{ color: "red" }}>--------------------------</span>
          <Box alignItems="center" justifyContent="center">
            <Box
              border="1px solid red"
              borderRadius="50%"
              w="50px"
              h="50px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              ml="48px"
              marginTop="10px"
            >
              {" "}
              <Icon as={RiProfileLine} w={6} h={6} color="red.500" />{" "}
            </Box>
            <Text>Thông tin đơn hàng</Text>
          </Box>
          <span style={{ color: "red" }}>---------------</span>
          <span style={{ color: "black" }}>---------------</span>

          <Box alignItems="center" justifyContent="center">
            <Box
              border="1px solid black"
              borderRadius="50%"
              w="50px"
              h="50px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              ml="15px"
              marginTop="10px"
            >
              {" "}
              <Icon as={AiFillCreditCard} w={6} h={6} color="black" />{" "}
            </Box>
            <Text>Thanh toán</Text>
          </Box>
        </Center>

        <Flex w="710px " display="flex" flexWrap="wrap" p="10">
          <Box className="BgImg"></Box>
          <Box mt="5" display="flex" justifyContent="space-between" w="100%">
            <Text fontSize="25px" fontWeight="700">
              <Icon
                as={FaMapMarkerAlt}
                w={8}
                h={8}
                color="black"
                marginRight="5px"
              />
              Địa chỉ nhận hàng
            </Text>
            {!addressData ||
            !Array.isArray(addressData) ||
            addressData.length === 0 ? (
              <Button onClick={onOpen} colorScheme="blue" variant="outline">
                Nhập địa chỉ giao hàng mới
              </Button>
            ) : (
              <Box
                display="flex"
                justifyContent="space-between"
                w="30%"
                h="auto"
                mt="2"
              >
                <Button
                  color="red.400"
                  border="1px solid red"
                  borderRadius="5px"
                >
                  Mặc định
                </Button>
                <Button
                  color="blue.400"
                  border="1px solid #3788FA"
                  borderRadius="5px"
                  onClick={onOpen}
                >
                  Thay đổi
                </Button>
                <Button
                  color="blue.400"
                  border="1px solid #3788FA"
                  borderRadius="5px"
                  onClick={clearAddress}
                >
                  Xóa
                </Button>
              </Box>
            )}
          </Box>
          {renderAddressData()}
          <Box w="100%">
            <Text fontSize="25px" fontWeight="700">
              Thông tin bổ sung:
            </Text>
            <Box w="100%" h="100px">
              <input
                placeholder="Lời nhắn cho người bán..."
                className="inputCheckout"
                type="text"
              />
            </Box>
          </Box>
        </Flex>
      </Center>
      <Center w="710px" mt="5" display="flex" flexWrap="wrap">
        <Flex justifyContent="space-between" w="710px">
          <Text
            mt="2"
            height="50px"
            fontFamily="inherit"
            color="#424245"
            noOfLines={2}
            fontSize="25px"
            _hover={{ color: "red" }}
            fontWeight="700"
          >
            Tổng tiền tạm tính:
          </Text>

          <Text fontWeight="700" fontSize="25px" mt="2" color="red">
            12.000.000 VNĐ
          </Text>
        </Flex>

        <Button
          w="710px"
          h="50px"
          border="1px solid  red.600"
          borderRadius="10px"
          backgroundColor="red.600"
          _hover={{ color: "red.600" }}
        >
          <Text color="white">Tiến hành đặt hàng</Text>
        </Button>
        <Button
          mt="2"
          w="710px"
          h="50px"
          border="1px solid red"
          borderRadius="10px"
          backgroundColor="white"
          _hover={{ color: "white" }}
        >
          <Text color="red.600">Chọn thêm sản phẩm khác</Text>
        </Button>
      </Center>
    </Center>
  );
};

export default Checkout;
