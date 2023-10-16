import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,

  Grid,
  Heading,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useDisclosure,
  useMediaQuery,
  VStack,
  MenuItem,
  Button,
  useToast,
  Alert,
} from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React from "react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FcSearch } from "react-icons/fc";
import { ImLocation2 } from "react-icons/im";
import { BiNetworkChart, BiSearch } from "react-icons/bi";
import { BsFillCartFill, BsPhone, BsSmartwatch } from "react-icons/bs";
import { MdConnectWithoutContact } from "react-icons/md";
import { AiOutlineLaptop, AiOutlineTablet, AiOutlineMenu } from "react-icons/ai"
import { CiHeadphones } from "react-icons/ci";
import { FaTruck, FaComputer } from "react-icons/fa";

import { GiHamburgerMenu, GiWatch } from "react-icons/gi";
import { GrLogin, GrReturn, GrServices } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/Auth/auth.action";

function Navbar() {
  const [isLargerThan1100] = useMediaQuery("(min-width: 1100px)");
  const [isLargerThan750px] = useMediaQuery("(min-width: 750px)");
  const [islesserThan740px] = useMediaQuery("(max-width: 750px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openMenu, setOpenMenu] = React.useState(false);
  const btnRef = React.useRef();
  const { isAuth } = useSelector((store) => store.AuthManager);
  const { name } = useSelector((store) => store.AuthManager);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    toast({
      title: "Logout  success.",
      description: "We will miss you 😭",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  console.log(name);
  if (isLargerThan1100) {
    return (
      <Box>

        <Flex
          w="100%"
          h='90px'
          justifyContent="space-around"
          alignItems={"center"}
          m="auto"
          backgroundColor='#4a90e2'
          // bgImage={require('./Images/bghaeder2.png')}
          p="10px"
          px="13%"
          gap="30px"
        >
          <Link to="/">
            <Box
            >
              <Image src={require('./Images/logo.jpg')} alt="logo" w="150px" h="100px" />
            </Box>
          </Link>
          <Flex
            bg="white"
            borderRadius={"10px"}
            w="300px"
            p="5px"
            m="auto"
            textAlign={"center"}
          >
            <Input
              border={"none"}
              fontSize={"18px"}
              borderRadius={"5px"}
              placeholder="Bạn tìm gì..."
            />
            <BiSearch fontSize={"42px"} />
          </Flex>
          <Link to="/cart">
            <Flex cursor={"pointer"} border={'1px solid #FFFFFF'} borderRadius={10}
              _hover={{
                bg: "#0077ff"
              }}
            >
              <Heading
                m="3"
                cursor={"pointer"}
                fontSize={"16px"}
                color="white"
              >
                Khuyến mãi
              </Heading>
            </Flex>
          </Link>
          <Link to="/cart">
            <Flex cursor={"pointer"} border={'1px solid #FFFFFF'} borderRadius={10} _hover={{
              bg: "#0077ff"
            }}>
              <Heading
                m="3"
                cursor={"pointer"}
                fontSize={"16px"}
                color="white"
              >
                Chăm Sóc khách hàng
              </Heading>
            </Flex>
          </Link>
          <Link to="/cart">
            <Flex cursor={"pointer"} border={'1px solid #FFFFFF'} borderRadius={10} _hover={{
              bg: "#0077ff"
            }} >
              <Heading
                m='3'
                cursor={"pointer"}
                fontSize={"16px"}
                color="white"
              >
                Giỏ hàng
              </Heading>
            </Flex>
          </Link>

          {!isAuth ? (
            <Flex cursor={"pointer"} border={'1px solid #FFFFFF'} borderRadius={10} _hover={{
              bg: "#0077ff"
            }}>
              <Link to="login">
                <Heading
                  m="3"
                  cursor={"pointer"}
                  fontSize={"16px"}
                  color="white"

                >
                  Đăng nhập
                </Heading>
              </Link>
            </Flex>
          ) : (
            <Menu>
              <MenuButton
                color="black"
                as={Button}
                rightIcon={<ChevronDownIcon />}
              >
                Hi {name}
              </MenuButton>
              <MenuList>
                <MenuItem>My Profile</MenuItem>
                <MenuItem>My Order</MenuItem>
                <MenuItem>My Address</MenuItem>
                <Link to="whishlist">
                  {" "}
                  <MenuItem>My Wishlist</MenuItem>
                </Link>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
        <Flex
          w="100%"
          h="40px"
          textAlign={"center"}
          justifyContent="space-between"
          alignItems={"center"}
          m="auto"
          bg="#4a90e2"
          px="13%"
        >


          <Menu>
            <MenuButton

              px={4}
              py={2}

              color="white"
              // transition="all 0.2s"
              _hover={{ color: "white" }}
              _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
              alignContent={"center"}
            >
              <HamburgerIcon w={50} h={7} paddingBottom={1} />Tất cả danh mục<ChevronDownIcon />
            </MenuButton>

            <MenuList bg="#FFFFFF">
              <Link to="headphones">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(6,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="#55555"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",
                      }}
                      my="8px"
                      fontSize={"18px"}
                    >
                      LapTop

                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Asus
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Lenovo
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Acer
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Hp
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      MacBook
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}

                      my="8px"
                      fontSize={"18px"}
                    >
                      Điện thoại
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Apple
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Samsung
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Xiaomi
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Oppo
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}

                      my="8px"
                      fontSize={"18px"}
                    >
                      Tablet
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      IPad
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Samsung
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Xiaomi
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Nokia
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Lenovo
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Readme
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}

                      my="8px"
                      fontSize={"18px"}
                    >
                      Thiết bị lưu trữ
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Ổ cứng di động
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Thẻ nhớ
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      USB
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}

                      my="8px"
                      fontSize={"18px"}
                    >
                      Đồng hồ
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Đồng hồ nam
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Đồng hồ nữ
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Đồng hồ Casio
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Đồng hồ Orient
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Đồng hồ Citizen
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}

                      my="8px"
                      fontSize={"18px"}
                    >
                      Smartwatch
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Apple Watch
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Samsung
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      BiFit
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Xiaomi
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}

                      my="8px"
                      fontSize={"18px"}
                    >
                      Phụ kiện di động
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Sạc dự phòng
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Cáp, sạc
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Bàn phím , bút tablet
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Miếng dán
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Túi đựng AriPods
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}

                      my="8px"
                      fontSize={"18px"}
                    >
                      Phụ kiện laptop
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Chuột, bàn phím
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Thiết bị mạng
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}

                      my="8px"
                      fontSize={"18px"}
                    >
                      Phụ kiện điện thoại
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Tai nghe
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Pin dự phòng
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Cáp sạc
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Loa nghe nhạc
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Thẻ nhớ
                    </Text>

                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}

                      my="8px"
                      fontSize={"18px"}
                    >
                      Phụ kiện điện máy
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Cáp HDMI, Cáp tivi
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Khung treo tivi
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Điều kiển tivi
                    </Text>
                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}

                      my="8px"
                      fontSize={"18px"}
                    >
                      Thiết bị Mạng
                    </Heading>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Thiết bị mạng Asus
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Thiết bị mạng Xiaomi
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Thiết bị mạng TotoLink
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Thiết bị mạng TP-LINK
                    </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>
          <Menu >
            <Link to="accessories" >
              <MenuButton

                px={4}
                py={2}
                color="white"
                transition="all 0.1s"
                _hover={{ color: "white" }}
                _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
              >
                <Icon as={BsPhone} />  Điện Thoại
              </MenuButton>

            </Link>
          </Menu>
          <Menu>
            <Link to="computers">
              <MenuButton
                px={4}
                py={2}
                color="white"
                transition="all 0.2s"
                _hover={{ color: "white" }}
                _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
              >
                <Icon boxSize={5} h={5} as={AiOutlineLaptop} />  Laptop
              </MenuButton>
            </Link>
          </Menu>
          <Menu>
            <Link to="mobilesandtablets">
              <MenuButton
                px={4}
                py={2}
                color="white"
                transition="all 0.2s"
                _hover={{ color: "white" }}
                _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
              >
                <Icon as={AiOutlineTablet} /> Tablet
              </MenuButton>
            </Link>
          </Menu>


          <Menu>
            <MenuButton

              px={5}
              py={2}

              color="white"
              transition="all 0.2s"
              _hover={{ color: "white" }}
              _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
            >
              Phụ kiện <ChevronDownIcon />
            </MenuButton>
          </Menu>
          <Menu >
            <Link to="accessories">

              <MenuButton
                px={4}
                py={2}
                color="white"
                transition="all 0.2s"
                _hover={{ color: "white" }}
                _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
                display="flex"
              >
                <Icon as={BsSmartwatch} />  Smartwatch
              </MenuButton>
            </Link>
          </Menu >

          <Menu>
            <Link to="mobilesandtablets">
              <MenuButton
                px={4}
                py={2}
                color="white"
                transition="all 0.2s"
                _hover={{ color: "white" }}
                _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
              >
                <Icon as={BsSmartwatch} />  Đồng hồ
              </MenuButton>
            </Link>
          </Menu>
          <Menu>
            <Link to="mobilesandtablets">
              <MenuButton
                px={4}
                py={2}
                color="white"
                transition="all 0.2s"
                _hover={{ color: "white" }}
                _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
              >
                Máy cũ giá rẻ
              </MenuButton>
            </Link>
          </Menu>
        </Flex >
      </Box >
    );
  } else if (isLargerThan750px) {
    return (
      <Flex
        w="100%"
        justifyContent="space-around"
        alignItems={"center"}
        m="auto"
        bgImage={require('./Images/bghaeder2.png')}
        p="20px"
        px="2%"
        gap="10px"
      >
        <Link to="/">
          <Box>
            <Image src={require('./Images/logo.jpg')} alt="logo" w="120px" h="70px" />
          </Box>
        </Link>
        <Flex
          bg="white"
          borderRadius={"10px"}
          w="300px"
          p="5px"
          m="auto"
          textAlign={"center"}
        >
          <Input
            border={"none"}
            fontSize={"18px"}
            borderRadius={"5px"}
            fontWeight="bold"
            placeholder="Search"
          />
          <BiSearch fontSize={"42px"} />
        </Flex>
        <Link to="/cart">
          <Flex cursor={"pointer"}>
            <BsFillCartFill color="white" fontSize="20px" />
            <Heading
              cursor={"pointer"}
              fontSize={"17px"}
              color="white"
              _hover={{ bg: "red", textDecoration: "underline" }}
            >
              Cart
            </Heading>
          </Flex>
        </Link>
        {!isAuth ? (
          <Flex cursor={"pointer"}>
            <GrLogin color="white" fontSize="20px" />
            <Link to="login">
              <Heading
                cursor={"pointer"}
                fontSize={"17px"}
                color="white"
                _hover={{ bg: "red", textDecoration: "underline" }}
              >
                Login
              </Heading>
            </Link>
          </Flex>
        ) : (
          <Menu>
            <MenuButton
              color="black"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Hi {name}
            </MenuButton>
            <MenuList>
              <MenuItem>My Profile</MenuItem>
              <MenuItem>My Order</MenuItem>
              <MenuItem>My Address</MenuItem>
              <Link to="whishlist">
                {" "}
                <MenuItem>My Wishlist</MenuItem>
              </Link>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        )}
        <Box mx="20px">
          <Box ref={btnRef} color="white" colorScheme="teal" onClick={onOpen}>
            <GiHamburgerMenu fontSize={"55px"} />
          </Box>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}

          >
            <DrawerOverlay />
            <DrawerContent bg="#656565">
              <DrawerCloseButton />
              <DrawerHeader fontSize={"22px"} fontWeight="bold">
                Menu
              </DrawerHeader>

              <DrawerBody>
                <VStack
                  justifyContent={"space-around"}
                  alignContent="center"
                  gap="25px"
                  m="auto"
                  p="auto"
                >
                  <Link to="mobilesandtablets">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ color: "white" }}
                    >
                      Điện thoại
                      <Heading
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="white"
                        _hover={{ color: "white" }}
                      />
                    </Heading>
                  </Link>
                  <Link to="homeappliances">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ color: "white" }}
                    >
                      Laptop
                    </Heading>
                  </Link>
                  <Link to="homeappliances">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ color: "white" }}
                    >
                      Tablet
                    </Heading>
                  </Link>
                  <Link to="computers">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ color: "white" }}
                    >
                      Phụ kiện
                    </Heading>
                  </Link>
                  <Link to="kitchen">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ color: "white" }}
                    >
                      Smartwatch
                    </Heading>
                  </Link>
                  <Link to="personalcare">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ color: "white" }}
                    >
                      Đồng hồ
                    </Heading>
                  </Link>
                  <Link to="accessories">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ color: "white" }}
                    >
                      Mua máy cũ giá rẻ
                    </Heading>
                  </Link>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    );
  } else if (islesserThan740px) {
    return (
      <Flex
        w="100%"
        justifyContent="space-around"
        alignItems={"center"}
        m="auto"
        bgImage={require('./Images/bghaeder2.png')}
        p="20px"
        px="2%"
        gap="10px"
      >
        <Link to="/">
          <Box>
            <Image src={require('./Images/logo.jpg')} alt="logo" w="120px" h="70px" />
          </Box>
        </Link>
        <Flex
          bg="white"
          borderRadius={"10px"}
          w="300px"
          p="5px"
          m="auto"
          textAlign={"center"}
        >
          <Input
            border={"none"}
            fontSize={"18px"}
            borderRadius={"5px"}
            fontWeight="bold"
            placeholder="Search"
          />
          <BiSearch fontSize={"42px"} />
        </Flex>
        <Box mx="20px">
          <Box ref={btnRef} color="white" colorScheme="teal" onClick={onOpen}>
            <GiHamburgerMenu fontSize={"55px"} />
          </Box>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bg="#656565">
              <DrawerCloseButton />

              <DrawerBody>
                <VStack
                  justifyContent={"space-around"}
                  alignContent="center"
                  gap="25px"
                  m="auto"
                  p="auto"
                >
                  {isAuth ? (
                    <Link to="profile">
                      <Heading
                        cursor={"pointer"}
                        fontSize={"24px"}
                        _hover={{ bg: "#4f4f4f", color: "white" }}
                        fontWeight="bold"
                        color="black"
                        mt="35px"
                      >
                        Hi {name}
                      </Heading>
                    </Link>
                  ) : (
                    <Link to="profile">
                      <Heading
                        cursor={"pointer"}
                        fontSize={"24px"}
                        _hover={{ bg: "#4f4f4f", color: "white" }}
                        fontWeight="bold"
                        color="white"
                        mt="35px"
                      >
                        Profile
                      </Heading>
                    </Link>
                  )}

                  {!isAuth ? (
                    <Link to="/login">
                      <Heading
                        cursor={"pointer"}
                        fontSize={"24px"}
                        _hover={{ bg: "#4f4f4f", color: "white" }}
                        fontWeight="bold"
                        color="white"
                      >
                        Login
                      </Heading>
                    </Link>
                  ) : (
                    <Link to="/login">
                      <Heading
                        cursor={"pointer"}
                        fontSize={"24px"}
                        _hover={{ bg: "#4f4f4f", color: "white" }}
                        fontWeight="bold"
                        color="white"
                        onClick={handleLogout}
                      >
                        Logout
                      </Heading>
                    </Link>
                  )}

                  <Link to="/cart">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"24px"}
                      _hover={{ bg: "#4f4f4f", color: "white" }}
                      fontWeight="bold"
                      color="white"
                    >
                      Cart
                    </Heading>
                  </Link>

                  <DrawerHeader color="black" fontSize={"22px"} fontWeight="bold">
                    <Divider color={"black"} />
                    Product Category
                    <Divider color={"black"} />
                  </DrawerHeader>

                  <Link to="mobilesandtablets">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "#4f4f4f", color: "white" }}
                    >
                      Điện thoại
                    </Heading>
                  </Link>
                  <Link to="televisions">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "#4f4f4f", color: "white" }}
                    >
                      Laptop
                    </Heading>
                  </Link>
                  <Link to="homeappliances">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "#4f4f4f", color: "white" }}
                    >
                      Tablet
                    </Heading>
                  </Link>
                  <Link to="headphones">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "#4f4f4f", color: "white" }}
                    >
                      Phụ kiện
                    </Heading>
                  </Link>
                  <Link to="computers">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "#4f4f4f", color: "white" }}
                    >
                      Smartwatch
                    </Heading>
                  </Link>
                  <Link to="kitchen">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "#4f4f4f", color: "white" }}
                    >
                      Đồng hồ
                    </Heading>
                  </Link>
                  <Link to="personalcare">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "#4f4f4f", color: "white" }}
                    >
                      Máy cũ giá rẻ
                    </Heading>
                  </Link>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    );
  }
}

export default Navbar;
