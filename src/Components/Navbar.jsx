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
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FcSearch } from "react-icons/fc";
import { ImLocation2 } from "react-icons/im";
import { BiNetworkChart, BiSearch } from "react-icons/bi";
import { BsFillCartFill, BsPhone, BsSmartwatch } from "react-icons/bs";
import { MdConnectWithoutContact } from "react-icons/md";
import { AiOutlineLaptop, AiOutlineTablet } from "react-icons/ai"
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
          justifyContent="space-around"
          alignItems={"center"}
          m="auto"
          bgImage={require('./Images/bghaeder2.png')}
          p="10px"
          px="3%"
          gap="30px"
        >
          <Link to="/">
            <Box>
              <Image src={require('./Images/logo.jpg')} alt="logo" w="150px" h="100px" />
            </Box>
          </Link>
          <Flex
            bg="white"
            borderRadius={"10px"}
            w="450px"
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
          <Flex cursor={"pointer"}>
            <ImLocation2 color="white" fontSize="20px" />
            <Heading
              cursor={"pointer"}
              fontSize={"17px"}
              color="white"
              _hover={{ textDecoration: "underlie" }}
            >
              73/14 Tân Sơn Nhì, Tân Sơn Nhì, Tân Bình, TP HCM
            </Heading>
          </Flex>
          <Link to="/cart">
            <Flex cursor={"pointer"}>
              <BsFillCartFill color="white" fontSize="20px" />
              <Heading
                cursor={"pointer"}
                fontSize={"17px"}
                color="white"
                _hover={{ textDecoration: "underline" }}
              >
                Giỏ hàng
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
                  _hover={{ textDecoration: "underline" }}
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
        </Flex>

        <Flex
          w="100%"
          textAlign={"center"}
          justifyContent="space-between"
          alignItems={"center"}
          m="auto"
          bg="#636363"
          px="20%"
        >
          <Menu >
            <Link to="mobilesandtablets" >
              <MenuButton

                px={4}
                py={2}
                color="white"
                transition="all 0.1s"
                _hover={{ bg: "#4f4f4f", color: "white", fontSize: 20 }}
                _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
              >
                Điện Thoại
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
                _hover={{ bg: "#4f4f4f", color: "white", fontSize: 20 }}
                _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
              >
                Laptop
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
                _hover={{ bg: "#4f4f4f", color: "white", fontSize: 20 }}
                _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
              >
                Tablet
              </MenuButton>
            </Link>
          </Menu>

          {/* Phụ kiện */}
          <Menu>
            <MenuButton

              px={4}
              py={2}
              color="white"
              transition="all 0.2s"
              _hover={{ bg: "#4f4f4f", color: "white", fontSize: 20 }}
              _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
            >
              Phụ kiện <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#636363">
              <Link to="headphones">
                <Grid
                  p="15px"
                  gridTemplateColumns={"repeat(4,1fr)"}
                  gap="20px"
                  justifyContent="space-around"
                  alignContent={"center"}
                  textAlign="center"
                  color="white"
                >
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      textDecoration="underline"
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
                      textDecoration="underline"
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
                      textDecoration="underline"
                      my="8px"
                      fontSize={"18px"}
                    >
                      Thiết bị âm thanh
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
                      Loa
                    </Text>
                    <Text
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                    >
                      Micro
                    </Text>

                  </Box>
                  <Box>
                    <Heading
                      _hover={{
                        textDecoration: "underline",

                        cursor: "pointer",
                      }}
                      textDecoration="underline"
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
                </Grid>
              </Link>
            </MenuList>
          </Menu>

          <Menu>
            <Link to="mobilesandtablets">
              <MenuButton
                px={4}
                py={2}
                color="white"
                transition="all 0.2s"
                _hover={{ bg: "#4f4f4f", color: "white", fontSize: 20 }}
                _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
              >
                Smartwatch
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
                _hover={{ bg: "#4f4f4f", color: "white", fontSize: 20 }}
                _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
              >
                Đồng hồ
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
                _hover={{ bg: "#4f4f4f", color: "white", fontSize: 20 }}
                _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
              >
                Máy cũ giá rẻ
              </MenuButton>
            </Link>
          </Menu>
        </Flex>
      </Box>
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
                      _hover={{ bg: "#4f4f4f", color: "white" }}
                    >
                      Điện thoại
                      <Heading
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="white"
                        _hover={{ bg: "#4f4f4f", color: "white" }}
                      />
                    </Heading>
                  </Link>
                  <Link to="homeappliances">
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
                  <Link to="computers">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "#4f4f4f", color: "white" }}
                    >
                      Phụ kiện
                    </Heading>
                  </Link>
                  <Link to="kitchen">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "#4f4f4f", color: "white" }}
                    >
                      Smartwatch
                    </Heading>
                  </Link>
                  <Link to="personalcare">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "#4f4f4f", color: "white" }}
                    >
                      Đồng hồ
                    </Heading>
                  </Link>
                  <Link to="accessories">
                    <Heading
                      cursor={"pointer"}
                      fontSize={"17px"}
                      color="white"
                      _hover={{ bg: "#4f4f4f", color: "white" }}
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
