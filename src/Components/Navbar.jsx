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
import React, { useState } from "react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FcSearch } from "react-icons/fc";
import { ImLocation2 } from "react-icons/im";
import { BiNetworkChart, BiSearch } from "react-icons/bi";
import { BsFillCartFill, BsPhone, BsSmartwatch, BsCart2, BsFillPersonFill } from "react-icons/bs";
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
  const [input, setInput] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openMenu, setOpenMenu] = React.useState(false);
  const btnRef = React.useRef();
  const { isAuth } = useSelector((store) => store.AuthManager);
  const { name } = useSelector((store) => store.AuthManager);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const fetchData = (value) => {
    fetch("http://localhost:9000/products/search")
      .then((response) => response.json())
      .then((json) => {
        // console.log('check data', json);
        const results = json.filter((search) => {
          return search && search.prodName && search.prodName.toLowerCase().includes(input);
        })
        console.log(results);
      })
  }

  const handleChange = (event) => {
    setInput(event.target.value);
    fetchData(event.target.value);

  }


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
  // console.log(name);
  if (isLargerThan1100) {
    return (
      <Box backgroundColor='#4a90e2' >
        <Flex w="100%" alignItems={"center"} m="auto" justifyContent="space-around">
          <Box>
            <Image src={(require('../Components/Images/1200-44-1200x44-5.webp'))} />
          </Box>

        </Flex>
        <Flex
          w="100%"
          h='90px'
          justifyContent="space-around"
          alignItems={"center"}
          m="auto"
          backgroundColor='#4a90e2'
          // bgImage={require('./Images/bghaeder2.png')}
          p="5px"
          px="15%"
          gap="10px"
        >
          <Link to="/">
            <Box
            >
              <Image src={require('./Images/logo.jpg')} alt="logo" w="130px" h="70px" />
            </Box>
          </Link>
          <Box>
            <Flex
              bg="white"
              borderRadius={"5px"}
              w="350px"
              h={10}
              p="5px"
              m="auto"
              textAlign={"center"}
            >
              <Input
                border={"none"}
                fontSize={"14px"}
                borderRadius={"2px"}
                placeholder="Bạn tìm gì..."
                h={7}
                value={input}
                onChange={handleChange}

              />
              <BiSearch color="#555" fontSize={"28px"} />

            </Flex>
            <Box w={100}
              backgroundColor="#FFFFFF"
              display="flex"
              flexDirection={'column'}
              boxShadow="0x 0x 8px #ddd"
              borderRadius={10}
              maxHeight={300}
              overflowY={'scroll'}
            >
              {/* {results.map((results, id) => {
                return <Text key={id}>{results.prodName}</Text>
              })} */}

            </Box>
          </Box>
          {!isAuth ? (
            <Flex cursor={"pointer"} border={'1px solid rgba(168,208,255,.38)'} borderRadius={5} _hover={{
              bg: "#0077ff"
            }}><Icon w={5} h={5} color={'#fff'} margin={2} as={BsFillPersonFill} />
              <Link to="login">
                <Heading
                  fontWeight={400}
                  m="2"
                  cursor={"pointer"}
                  fontSize={"16px"}
                  color="#fff"

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
          <Link to="/cart">
            <Flex cursor={"pointer"} border={'1px solid rgba(168,208,255,.38)'} textAlign={'center'} borderRadius={5} _hover={{
              bg: "#0077ff"
            }} > <Icon as={BsCart2} w={5} h={5} color={'#fff'} margin={2} />
              <Heading
                fontWeight={400}
                m='2'
                cursor={"pointer"}
                fontSize={"16px"}
                color="#fff"
                flexDirection={'row'}
              >
                Giỏ hàng
              </Heading>
            </Flex>
          </Link>
          <Link to="/cart">
            <Flex cursor={"pointer"} borderRight={'1px solid rgba(168,208,255,.38)'}
              _hover={{
                bg: "#0077ff"
              }}
            >
              <Heading
                fontWeight={400}
                m="2"
                cursor={"pointer"}
                fontSize={"16px"}
                color="#fff"
              >
                Khuyến mãi
              </Heading>
            </Flex>
          </Link>
          <Link to="/cart">
            <Flex cursor={"pointer"} borderLeft={'1px solid rgba(168,208,255,.38)'} _hover={{
              bg: "#0077ff"
            }}>
              <Heading
                fontWeight={400}
                m="2"
                cursor={"pointer"}
                fontSize={"16px"}
                color="#fff"
              >
                Chăm Sóc khách hàng
              </Heading>
            </Flex>
          </Link>



        </Flex>
        <Flex
          w="95%"
          h="40px"
          textAlign={"center"}
          justifyContent="space-between"
          alignItems={"center"}
          m="auto"
          bg="#4a90e2"
          px="15%"
        >


          <Menu>
            <MenuButton

              px={4}
              py={2}

              color="#fff"
              // transition="all 0.2s"
              _hover={{ color: "white", fontSize: 18 }}
              _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
              alignContent={"center"}
            >
              <HamburgerIcon w={50} h={7} paddingBottom={1} />Tất cả danh mục<ChevronDownIcon />
            </MenuButton>

            <MenuList bg="#FFF">
              <Link to="headphones">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(5,1fr)"}
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
                      <Image w={20} marginLeft={10} src={(require('../Components/Images/Laptop-129x129.webp'))} />
                      <Text> LapTop</Text>

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
                      <Image w={20} marginLeft={10} src={(require('../Components/Images/dien-thoai-doc-quyen-128x128.webp'))} />
                      <Text>Điện thoại</Text>
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
                      <Image w={20} marginLeft={10} src={(require('../Components/Images/Tablet-128x129.webp'))} />
                      <Text> Tablet</Text>
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
                      <Image w={20} marginLeft={10} src={(require('../Components/Images/Bo-phu-kien-di-dong-Yealink-cho-WH6367-2.png'))} />

                      <Text>   Phụ kiện di động</Text>
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
                    ><Image w={20} marginLeft={10} src={(require('../Components/Images/icon-moi-128x129.webp'))} />

                      <Text>Đồng hồ </Text>

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
                color="#fff"
                transition="all 0.1s"
                _hover={{ color: "white", fontSize: 18 }}
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
                color="#fff"
                transition="all 0.2s"
                _hover={{ color: "white", fontSize: 18 }}
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
                color="#fff"
                transition="all 0.2s"
                _hover={{ color: "white", fontSize: 18 }}
                _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
              >
                <Icon as={AiOutlineTablet} /> Tablet
              </MenuButton>
            </Link>
          </Menu>
          <Menu >
            <Link to="accessories">

              <MenuButton
                px={4}
                py={2}
                color="#fff"
                transition="all 0.2s"
                _hover={{ color: "white", fontSize: 18 }}
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
                color="#fff"
                transition="all 0.2s"
                _hover={{ color: "white", fontSize: 18 }}
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
                color="#fff"
                transition="all 0.2s"
                _hover={{ color: "white", fontSize: 18 }}
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
        backgroundColor='#4a90e2'
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
            placeholder="Bạn tìm gì..."
            value={input}
            onChange={(e) => setInput(e.target.value)}

          />
          <BiSearch fontSize={"42px"} />
        </Flex>
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
                m={3}
                cursor={"pointer"}
                fontSize={"17px"}
                color="white"
                _hover={{ bg: "red", textDecoration: "underline" }}
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
            <DrawerContent bg="#FFFFFF" color="#55555">
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
                      color="#55555"
                      _hover={{ color: "#55555" }}
                    >
                      Điện thoại
                      <Heading
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="#55555"
                        _hover={{ color: "#55555" }}
                      />
                    </Heading>
                  </Link>
                  <Link to="homeappliances">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="#55555"
                      _hover={{ color: "#55555" }}
                    >
                      Laptop
                    </Heading>
                  </Link>
                  <Link to="homeappliances">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="#55555"
                      _hover={{ color: "#55555" }}
                    >
                      Tablet
                    </Heading>
                  </Link>
                  <Link to="computers">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="#55555"
                      _hover={{ color: "#55555" }}
                    >
                      Phụ kiện
                    </Heading>
                  </Link>
                  <Link to="kitchen">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="#55555"
                      _hover={{ color: "#55555" }}
                    >
                      Smartwatch
                    </Heading>
                  </Link>
                  <Link to="personalcare">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="#55555"
                      _hover={{ color: "#55555" }}
                    >
                      Đồng hồ
                    </Heading>
                  </Link>
                  <Link to="accessories">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="#55555"
                      _hover={{ color: "#55555" }}
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
        w="1280px"
        justifyContent="space-around"
        alignItems={"center"}
        m="auto"
        backgroundColor='#4a90e2'
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
            placeholder="Bạn tìm gì..."


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
            <DrawerContent bg="#FFFFFF" color="#55555">
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

                        fontWeight="bold"
                        color="#55555"
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

                        fontWeight="bold"
                        color="#55555"
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

                        fontWeight="bold"
                        color="#55555"
                      >
                        Login
                      </Heading>
                    </Link>
                  ) : (
                    <Link to="/login">
                      <Heading
                        cursor={"pointer"}
                        fontSize={"24px"}

                        fontWeight="bold"
                        color="#55555"
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
                      fontWeight="bold"
                      color="#55555"
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
                      color="#55555"

                    >
                      Điện thoại
                    </Heading>
                  </Link>
                  <Link to="televisions">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="#55555"
                    >
                      Laptop
                    </Heading>
                  </Link>
                  <Link to="homeappliances">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="#55555"
                    >
                      Tablet
                    </Heading>
                  </Link>
                  <Link to="headphones">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="#55555"
                    >
                      Phụ kiện
                    </Heading>
                  </Link>
                  <Link to="computers">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="#55555"
                    >
                      Smartwatch
                    </Heading>
                  </Link>
                  <Link to="kitchen">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="#55555"
                    >
                      Đồng hồ
                    </Heading>
                  </Link>
                  <Link to="personalcare">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="#55555"
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
