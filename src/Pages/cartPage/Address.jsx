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
import uuid from "react-uuid";

const Address = () => {
  const breakpoints = {
    base: "320px", // 0px
    sm: "480px", // ~480px. em is a relative unit and is dependant on the font-size.
    md: "600px", // ~768px
    lg: "800px", // ~992px
    xl: "768px", // ~1280px
    "2xl": "1024px", // ~1536px
  };

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Cập nhật state error về giá trị rỗng khi người dùng thay đổi dữ liệu

    if (value.trim() === "") {
      setError("Dữ liệu không được bỏ trống");
    } else if (/[^a-zA-Z0-9]/.test(value)) {
      setError("Dữ liệu không được chứa ký tự đặc biệt");
    } else {
      setError("");
    }
    setInputValue(value);
  };

  const username = Cookies.get("username");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const address = useRef({});
  const toast = useToast();
  const navigate = useNavigate();

  const clearAddress = () => {
    //function get username call to this router using axios to delete user: router.delete('/address/:username'
    const apiUrl = `${process.env.REACT_APP_DATABASE_API_URL}/users/address/${username}`;
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

    const apiUrl = `${process.env.REACT_APP_DATABASE_API_URL}/users/address`;

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
      .get(
        `${process.env.REACT_APP_DATABASE_API_URL}/users/address/${username}`,
      )
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
        <Box w={{ "2xl": "66%", base: "80%" }}>
          <Text
            mt={{ "2xl": "5", base: "0" }}
            fontSize="15px"
            fontWeight="500"
            fontStyle="italic"
            width="100%"
          >
            Bạn chưa có địa chỉ nhận hàng
          </Text>
        </Box>
      );
    }

    return addressData.map((address, index) => (
      <Flex
        key={uuid()}
        w={{ "2xl": "90%", base: "100%" }}
        justifyContent={{ "2xl": "left", base: "left" }}
        flexWrap={{ base: "wrap" }}
      >
        <Flex display={"flex"} width={{ "2xl": "auto", base: "100%" }}>
          <Text mt="5" fontSize="15px" fontWeight="700">
            {address.firstname} {address.lastname}
          </Text>
          <Text mt="5" fontSize="15px" fontWeight="700" ml="2">
            (+84) {address.mobile}
          </Text>
        </Flex>

        <Text
          mt={{ "2xl": "5", base: "-2" }}
          fontSize={{ "2xl": "15px", base: "13px" }}
          ml="2"
        >
          Địa chỉ: {address.flat}, {address.street} - {address.state} -{" "}
          {address.city}
        </Text>
      </Flex>
    ));
  };

  return (
    <Center
      border={"1px solid rgb(224, 224, 225)"}
      width="100%"
      display="flex"
      flexWrap="wrap"
      padding="16px"
    >
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
                        value={inputValue}
                        onChange={handleInputChange}
                        ref={(e) => (address.current["setfirstname"] = e)}
                      />
                      {error && <div style={{ color: "red" }}>{error}</div>}
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
                          <option key={uuid()} value={province.name}>
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
                            key={uuid()}
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

      <Center
        display="flex"
        justifyContent={"space-between"}
        w="100%"
        mt={{ "2xl": "7" }}
      >
        <Text fontSize={{ "2xl": "25px", base: "20px" }} fontWeight="700">
          <Icon
            as={FaMapMarkerAlt}
            w={{ "2xl": "8", base: "4" }}
            h={{ "2xl": "8", base: "4" }}
            color="black"
            marginRight="5px"
          />
          Địa chỉ nhận hàng
        </Text>
        {!addressData ||
        !Array.isArray(addressData) ||
        addressData.length === 0 ? (
          <Button
            onClick={onOpen}
            colorScheme="blue"
            variant="outline"
            h={{ "2xl": "30px", base: "20px" }}
            color="#4a90e2"
            border="1px solid #3788FA"
            borderRadius="5px"
            marginRight="5px"
            fontSize={{ "2xl": "18px", base: "10px" }}
            textAlign={"center"}
            justifyContent={"center"}
          >
            Nhập địa chỉ giao hàng mới
          </Button>
        ) : (
          <Box
            padding={{ "2xl": "0", base: "0" }}
            display="flex"
            justifyContent="space-between"
            w={{ "2xl": "30%", base: "40%" }}
            h={{ "2xl": "auto", base: "auto" }}
          >
            <Button
              h={{ "2xl": "30px", base: "20px" }}
              color="#ff2323"
              border="1px solid red"
              borderRadius="5px"
              marginRight="5px"
              fontSize={{ "2xl": "18px", base: "10px" }}
              textAlign={"center"}
              justifyContent={"center"}
            >
              Mặc định
            </Button>
            <Button
              fontSize={{ "2xl": "18px", base: "10px" }}
              h={{ "2xl": "30px", base: "20px" }}
              color="#4a90e2"
              border="1px solid #3788FA"
              borderRadius="5px"
              onClick={onOpen}
              marginRight="5px"
            >
              Thay đổi
            </Button>
            <Button
              h={{ "2xl": "30px", base: "20px" }}
              fontSize={{ "2xl": "18px", base: "10px" }}
              color="#4a90e2"
              border="1px solid #3788FA"
              borderRadius="5px"
              onClick={clearAddress}
            >
              Xóa
            </Button>
          </Box>
        )}
      </Center>
      {renderAddressData()}
    </Center>
  );
};

export default Address;