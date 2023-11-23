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
  Input,
  Accordion,
  AccordionItem,
  AccordionPanel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Select,
} from "@chakra-ui/react";
import "react-slideshow-image/dist/styles.css";
import { useNavigate } from "react-router-dom";
import { Icon } from "@chakra-ui/react";

import "react-slideshow-image/dist/styles.css";
import { ArrowBackIcon } from "@chakra-ui/icons";

import { BsFillCartCheckFill, BsFillTrashFill } from "react-icons/bs";
import { AiFillCreditCard } from "react-icons/ai";
import { RiProfileLine } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import Cookies from "js-cookie";
import axios from "axios";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
const MyOrder = () => {
  const userID = Cookies.get("userID");
  const [products, setProducts] = useState([]);
  const username = Cookies.get("username");

  const address = useRef({});
  const toast = useToast();

  const [selectedOrderCode, setSelectedOrderCode] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/orders/user/${userID}`,
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

    const handleOrderCodeClick = (orderCode) => {
      setSelectedOrderCode((prevOrderCode) =>
        prevOrderCode === orderCode ? null : orderCode,
      );
    };

    const formatCurrency = (amount) => {
      // Format the amount as currency, you may want to use a library for this
      // Example: using Intl.NumberFormat
      const formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      });

      return formatter.format(amount);
    };
    const processedOrderCodes = new Set();
    const totalExpenditure = Object.values(productsByOrderCode)
      .flat()
      .reduce((total, product) => {
        if (!processedOrderCodes.has(product.orderCode)) {
          processedOrderCodes.add(product.orderCode);
          return total + product.totalPay;
        }
        return total;
      }, 0);

    return (
      <Box>
        <React.Fragment>
          {Object.entries(productsByOrderCode).map(
            ([orderCode, productList]) => (
              <Box
                borderWidth="1px"
                borderRadius="md"
                margin="10px"
                padding="10px"
              >
                <React.Fragment key={orderCode}>
                  <tr>
                    <td
                      colSpan="8"
                      style={{ fontWeight: "bold", cursor: "pointer" }}
                      onClick={() => handleOrderCodeClick(orderCode)}
                    >
                      Order Code: {orderCode}{" "}
                      {selectedOrderCode === orderCode ? (
                        <Icon as={FaChevronUp} />
                      ) : (
                        <Icon as={FaChevronDown} />
                      )}
                    </td>
                  </tr>
                  {selectedOrderCode === orderCode &&
                    productList.map((product) => (
                      <Box padding="10px">
                        <hr />
                        <Box
                          mt="5"
                          display="flex"
                          justifyContent="space-evenly"
                        >
                          <Box key={product.id} p={4} borderRadius="md" mb={4}>
                            <img src={product.prodImg} width="200px" />
                          </Box>
                          <Box width="60%" padding="10px">
                            <Text
                              height="60px"
                              fontFamily="serif"
                              color="#424245"
                              noOfLines={2}
                              fontSize="20px"
                              fontWeight="700"
                            >
                              Name: {product.prodName} {product.color} {product.storage_value}
                            </Text>

                            <Text
                              fontWeight="600"
                              fontSize="18px"
                              ml="1"
                              color="red"
                            >
                              Giá: {product.prodPrice}VNĐ
                            </Text>
                            <Text
                              fontWeight="600"
                              fontSize="18px"
                              ml="1"
                              color="red"
                            >
                              Số lượng: {product.quantity}
                            </Text>

                            <Text
                              fontWeight="600"
                              fontSize="18px"
                              ml="1"
                              color="black"
                            >
                              Ngày đặt hàng:{" "}
                              {new Date(product.orderDate).toLocaleString()}
                            </Text>
                          </Box>
                          <Box width="23%">
                            <Box mt="12px">
                              {product.payment === "Banking" ? (
                                <Text
                                  class="badge bg-success"
                                  fontWeight="600"
                                  fontSize="18px"
                                  ml="1"
                                  color="black"
                                >
                                  Phương thức: {product.payment}
                                </Text>
                              ) : (
                                <Text
                                  class="badge bg-danger"
                                  fontWeight="600"
                                  fontSize="18px"
                                  ml="1"
                                  color="black"
                                >
                                  Phương thức: {product.payment}
                                </Text>
                              )}
                            </Box>
                            <Box mt="10px">
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
                            <Box display="flex" mt="60px">
                              <Link to={`/${product.prodID}`}>
                                <Button
                                  type="submit"
                                  colorScheme="blue"
                                  marginRight="10px"
                                  borderRadius={"2px"}
                                >
                                  Mua lại
                                </Button>
                              </Link>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    ))}
                </React.Fragment>
                <Box>
                  <Text
                    fontWeight="600"
                    fontSize="18px"
                    ml="1"
                    color="red"
                    _hover={{ color: "red" }}
                  >
                    Thanh toán: {formatCurrency(productList[0].totalPay)}
                  </Text>
                </Box>
              </Box>
            ),
          )}
          <Box mt="4">
            <Text fontWeight="600" fontSize="18px" ml="1" color="green">
              Tổng chi tiêu: {formatCurrency(totalExpenditure)}
            </Text>
          </Box>
        </React.Fragment>
      </Box>
    );
  };
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
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
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
        <Box
          textAlign="center"
          p="50px"
          borderWidth="1px"
          width="100%"
          borderRadius="md"
          w="300px"
        >
          <Center>
            <Image
              src="https://icon-library.com/images/free-avatar-icon/free-avatar-icon-10.jpg"
              alt=""
              borderRadius="full"
              boxSize="150px"
            />
          </Center>
          <Divider my="20px" />
          <VStack spacing="10px">
            <Text fontSize="2xl" fontWeight="bold">
              {username}
            </Text>
            <Text fontSize="md">Bạn chưa có địa chỉ giao hàng</Text>
            <Button onClick={onOpen} colorScheme="blue" variant="outline">
              Nhập địa chỉ giao hàng mới
            </Button>
          </VStack>
        </Box>
      );
    }

    return addressData.map((address, index) => (
      <Box
        key={index}
        textAlign="center"
        p="50px"
        borderWidth="1px"
        width="100%"
        borderRadius="md"
        w="300px"
      >
        <Center>
          <Image
            src="https://icon-library.com/images/free-avatar-icon/free-avatar-icon-10.jpg"
            alt=""
            borderRadius="full"
            boxSize="150px"
          />
        </Center>
        <Divider my="20px" />
        <VStack spacing="10px">
          <Text fontSize="2xl" fontWeight="bold">
            {address.firstname} {address.lastname}
          </Text>
          <Text fontSize="md">Username: {address.username}</Text>
          <Text fontSize="md">Đường: {address.street}</Text>

          <Text fontSize="md">Địa chỉ: {address.flat}</Text>
          <Text fontSize="md">Quận huyện: {address.state}</Text>
          <Text fontSize="md">Tỉnh thành: {address.city}</Text>

          <Text fontSize="md">Phone: {address.mobile}</Text>
          <Text fontSize="md">Email: {address.email}</Text>
        </VStack>
      </Box>
    ));
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
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Box
      display="flex"
      maxW="30̀%"
      mt="20px"
      p="20px"
      borderWidth="1px"
      borderRadius="md"
      className="profile-container"
    >
      <Center>
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
        <Box p="20px">{renderAddressData()}</Box>
      </Center>
      <Box w={"80%"}>
        <Heading as="h2" size="lg" mb={4}>
          My Order
        </Heading>
        {renderProducts()}
        <br />
      </Box>
    </Box>
  );
};

export default MyOrder;
