import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Heading,
  Text,
  Divider,
  Image,
  Center,
  Flex,
  Button,
  Checkbox,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import "react-slideshow-image/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { BsFillCartCheckFill, BsFillTrashFill } from "react-icons/bs";
import { AiFillCreditCard } from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";
import Cookies from "js-cookie";
import axios from "axios";
function MyOrder() {
  const userID = Cookies.get("userID");
  const [products, setProducts] = useState([]);
  const username = Cookies.get("username");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const address = useRef({});
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `https://duantn-backend.onrender.comorders/user/${userID}`,
      );
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  //render product

  const renderProducts = () => {
    const productsByOrderCode = products.reduce((acc, product) => {
      if (!acc[product.orderCode]) {
        acc[product.orderCode] = [product];
      } else {
        acc[product.orderCode].push(product);
      }
      return acc;
    }, {});
    return Object.entries(productsByOrderCode).map(
      ([orderCode, productList]) => (
        <React.Fragment key={orderCode}>
          <tr>
            <td colSpan="8" style={{ fontWeight: "bold" }}>
              Order Code: {orderCode}
            </td>
          </tr>
          {productList.map((product) => (
            <Box padding="10px" bg={"blackAlpha.50"} marginBottom={5}>
              <Box
                mt="5"
                display="flex"
                justifyContent="space-evenly"
                borderWidth="1px"
                borderRadius="md"
                bg={"white"}
              >
                <Box key={product.id} p={4} borderRadius="md" mb={4}>
                  <img src={product.prodImg} width="200px" />
                </Box>
                <Box width="60%">
                  <Text
                    mt="2"
                    height="50px"
                    fontFamily="serif"
                    color="#424245"
                    noOfLines={2}
                    fontSize="20px"
                    fontWeight="700"
                  >
                    Name: {product.prodName} ({product.prodID})
                  </Text>
                  <Text fontWeight="600" fontSize="18px" ml="1" color="red">
                    Giá: {product.prodPrice} VNĐ
                  </Text>
                  <Text fontWeight="600" fontSize="18px" ml="1" color="black">
                    Purchase Time:{" "}
                    {new Date(product.orderDate).toLocaleString()}
                  </Text>
                  <Text fontWeight="600" fontSize="18px" ml="1" color="black">
                    Delivery Time:{" "}
                    {new Date(product.orderDate).toLocaleString()}
                  </Text>
                </Box>
                <Box mt="50">
                  {product.orderStatus === "Đã thanh toán" ? (
                    <Text
                      class="badge bg-success"
                      fontWeight="600"
                      fontSize="18px"
                      ml="1"
                      color="black"
                    >
                      Trạng thái: {product.orderStatus}
                    </Text>
                  ) : (
                    <Text
                      class="badge bg-danger"
                      fontWeight="600"
                      fontSize="18px"
                      ml="1"
                      color="black"
                    >
                      Trạng thái: {product.orderStatus}
                    </Text>
                  )}
                </Box>
              </Box>
              <Box>
                <Box>
                  <Text
                    fontWeight="600"
                    fontSize="18px"
                    ml="1"
                    color="red"
                    _hover={{ color: "red" }}
                  >
                    Thanh toán: {product.prodPrice} VNĐ
                  </Text>
                </Box>
                <Box mt="50">
                  <Button type="submit" colorScheme="blue" marginRight={20}>
                    Mua lại
                  </Button>
                  <Icon
                    as={BsFillTrashFill}
                    w={6}
                    h={6}
                    color="black"
                    margin="auto"
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </React.Fragment>
      ),
    );
  };

  const clearAddress = () => {
    //function get username call to this router using axios to delete user: router.delete('/address/:username'
    const apiUrl = `https://duantn-backend.onrender.comusers/address/${username}`;
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

    const apiUrl = "https://duantn-backend.onrender.comusers/address";

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
      .get(`https://duantn-backend.onrender.comusers/address/${username}`)
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
        <Image
          src="https://example.com/avatar.jpg"
          alt=""
          borderRadius="full"
          boxSize="150px"
          justifyContent="center"
        />
        <hr />
        <VStack spacing="10px" marginTop="20px">
          <Text fontSize="xl">
            {address.firstname} {address.lastname}
          </Text>
          <Text fontSize="md">{user.address}</Text>
          <Text fontSize="md">Số điện thoại</Text>
          <Text fontSize="md">Email</Text>
        </VStack>
      </Flex>
    ));
  };

  const user = {
    name: "Nguyễn Văn B",
    username: "nguyenvana",
    gender: "Nữ",
    birthday: "01/01/1990",
    age: 33,
    country: "Việt Nam",
    province: "Hà Nội",
    address: "Số 123, Đường ABC, Quận XYZ, Hà Nội",
    avatar: "https://example.com/avatar.jpg",
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Box display="flex" justifyContent="center">
      <Box>
        <Box
          textAlign="center"
          padding="50px"
          margin="10px 0px"
          borderWidth="1px"
          width="80%"
          borderRadius="md"
        >
          {renderAddressData()}
        </Box>
      </Box>
      <Box width="70%">
        <Heading as="h2" size="lg" mb={4}>
          My Order
        </Heading>
        {renderProducts()}
        <br />
      </Box>
    </Box>
  );
}

export default MyOrder;
