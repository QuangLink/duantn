import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useDisclosure,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from "react";
import { AiOutlineLaptop, AiOutlineTablet } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import {
  BsCart2,
  BsFillPersonFill,
  BsPhone,
  BsSmartwatch,
  BsLaptop,
} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/Auth/auth.action";
import "./Navbar.css";
import useScrollListener from "./useScroll";
import { UserAuth } from "../context/AuthContext";
function Navbar() {
  const { user, logOut } = UserAuth();
  const [isLargerThan1100] = useMediaQuery("(min-width: 1100px)");
  const [isLargerThan750px] = useMediaQuery("(min-width: 750px)");
  const [islesserThan740px] = useMediaQuery("(max-width: 750px)");
  const [input, setInput] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { isAuth } = useSelector((store) => store.AuthManager);
  const { username } = useSelector((store) => store.AuthManager);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState([]);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isBoxVisible, setIsBoxVisible] = useState(true);
  const [isMenuFixed, setIsMenuFixed] = useState(false);
  const [direction, setDirection] = useState("");
  const scroll = useScrollListener();
  const searchRef = useRef(null);
  const navbar = {
    active: {
      visibility: "visible",
      transition: "all 0.5s",
      position: "fixed",
      top: "0px",
      width: "100%",
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)",
    },
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsSearchVisible(false);
    }
  };

  useEffect(() => {
    if (scroll.y > 100 && scroll.y - scroll.lastY > 0) {
      setDirection("down");
    } else {
      setDirection("up");
    }
  }, [scroll.y, scroll.lastY]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsBoxVisible(false);
      } else {
        setIsBoxVisible(true);
      }
      if (scrollY > 100) {
        setIsMenuFixed(true);
      } else {
        setIsMenuFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleInputFocus = () => {
    setIsFocused(true);
  };
  const handleInputBlur = () => {
    setIsFocused(false);
  };
  const fetchData = (value) => {
    fetch("https://duantn-backend.onrender.com/products/search")
      .then((response) => response.json())
      .then((json) => {
        // console.log('check data', json);
        const filteredResults = json.filter((search) => {
          return (
            search &&
            search.prodName &&
            search.prodName.toLowerCase().includes(input.toLowerCase())
          );
        });
        setResults(filteredResults);
        console.log(filteredResults);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleProductClick = () => {
    setInput("");
    // setIsSearchVisible(false);
  };
  const handleChange = (event) => {
    const inputValue = event.target.value;
    setIsSearchVisible(true);
    setInput(inputValue);
    if (inputValue === "") {
      setResults([]);
      setIsSearchVisible(true);
    } else {
      fetchData(inputValue);
    }
  };
  const handleLogout = async () => {
    try {
      await logOut();
      dispatch(logout());
      navigate("/login");
      toast({
        title: "Logout  success.",
        description: "We will miss you 😭",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Logout failed.",
        description: "Please try again later.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const Closesearch = () => {
    if (results.length === 0) {
      return <Box></Box>;
    } else {
      return (
        <>
          {isSearchVisible && isBoxVisible && (
            <Box
              bg={"#fff"}
              width="744px"
              height="auto"
              position={"absolute"}
              marginTop={5}
              borderRadius={15}
              isOpen={isOpen}
              onClose={onClose}
              finalFocusRef={btnRef}
              ref={searchRef}
            >
              <Box overflowY={"scroll"} h={450}>
                {results.slice(0, 10).map((results, id) => {
                  return (
                    <Link
                      to={`/${results.prodType}/${results.prodID}`}
                      onClick={handleProductClick}
                    >
                      <Flex
                        key={id}
                        direction="row"
                        align="flex-start"
                        borderBottom={"1px solid #555"}
                        justifyContent={"flex-start"}
                        _hover={{ bg: "#9ecdf2" }}
                      >
                        <Box
                          mb={6}
                          margin={5}
                          paddingLeft={20}
                          marginRight={10}
                        >
                          <Image
                            src={results.prodImg}
                            w={70}
                            h={50}
                            alt="Memory Card"
                          />
                        </Box>
                        <Box mb={6}>
                          <Text fontSize="xl" fontWeight="600">
                            {results.prodName}
                          </Text>
                          <Text fontSize="lg" color="gray.500">
                            <span className="prodPrice">
                              {results.prodPrice} <sup>đ</sup>
                            </span>
                            <span className="prodPriceSale">
                              {results.prodPriceSale}
                              <sup>đ</sup>{" "}
                            </span>
                          </Text>
                        </Box>
                      </Flex>
                    </Link>
                  );
                })}
              </Box>
            </Box>
          )}
        </>
      );
    }
  };
  const Closesearch1 = () => {
    if (results.length === 0) {
      return <Box></Box>;
    } else {
      return (
        <>
          {isSearchVisible && isBoxVisible && (
            <Box
              bg={"#fff"}
              width="90%"
              height="auto"
              position={"fixed"}
              marginTop={500}
              borderRadius={15}
              overflowY={"scroll"}
              h={400}
              isOpen={isOpen}
              onClose={onClose}
              finalFocusRef={btnRef}
              ref={searchRef}
            >
              {results.slice(0, 5).map((results, id) => {
                return (
                  <Link
                    to={`/${results.prodType}/${results.prodID}`}
                    onClick={handleProductClick}
                  >
                    <Flex
                      key={id}
                      direction="row"
                      align="flex-start"
                      borderBottom={"1px solid #555"}
                      justify="center"
                      _hover={{ bg: "#9ecdf2" }}
                    >
                      <Box mb={6} margin={5} marginRight={10}>
                        <Image
                          src={results.prodImg}
                          w={70}
                          h={50}
                          alt="Memory Card"
                        />
                      </Box>
                      <Box mb={6}>
                        <Text fontSize="xl" fontWeight="600">
                          {results.prodName}
                        </Text>
                        <Text fontSize="lg" color="gray.500">
                          <span className="prodPrice">
                            {results.prodPrice} <sup>đ</sup>
                          </span>
                          <span className="prodPriceSale">
                            {results.prodPriceSale}
                            <sup>đ</sup>{" "}
                          </span>
                        </Text>
                      </Box>
                    </Flex>
                  </Link>
                );
              })}
            </Box>
          )}
        </>
      );
    }
  };
  const Closesearch2 = () => {
    if (results.length === 0) {
      return <Box></Box>;
    } else {
      return (
        <>
          {isSearchVisible && isBoxVisible && (
            <Box
              bg={"#fff"}
              width="95%"
              height="auto"
              position={"fixed"}
              marginTop={500}
              borderRadius={15}
              overflowY={"scroll"}
              h={400}
              isOpen={isOpen}
              onClose={onClose}
              finalFocusRef={btnRef}
              ref={searchRef}
            >
              {results.slice(0, 5).map((results, id) => {
                return (
                  <Link
                    to={`/${results.prodType}/${results.prodID}`}
                    onClick={handleProductClick}
                  >
                    <Flex
                      key={id}
                      direction="row"
                      align="flex-start"
                      borderBottom={"1px solid #555"}
                      justifyContent={"flex-start"}
                      _hover={{ bg: "#9ecdf2" }}
                    >
                      <Box mb={6} margin={5} marginRight={10}>
                        <Image
                          src={results.prodImg}
                          w={70}
                          h={50}
                          alt="Memory Card"
                        />
                      </Box>
                      <Box mb={6}>
                        <Text fontSize="l" fontWeight="600">
                          {results.prodName}
                        </Text>
                        <Text fontSize="l" color="gray.500">
                          <span className="prodPrice">
                            {results.prodPrice} <sup>đ</sup>
                          </span>
                          <span className="prodPriceSale">
                            {results.prodPriceSale}
                            <sup>đ</sup>{" "}
                          </span>
                        </Text>
                      </Box>
                    </Flex>
                  </Link>
                );
              })}
            </Box>
          )}
        </>
      );
    }
  };

  // console.log(name);
  if (isLargerThan1100) {
    return (
      <Box backgroundColor="#4a90e2" position={"relative"} zIndex={2}>
        <Flex w="100%" alignItems="center" m="auto" justifyContent="center">
          <Box></Box>
        </Flex>
        <Flex className="flex-container" px="15%">
          <Link to="/">
            <Box>
              <Image
                src={require("./Images/logodesktop.png")}
                alt="logo"
                w="200px"
              />
            </Box>
          </Link>
          <Box>
            <Flex
              bg="white"
              borderRadius={"5px"}
              w="450px"
              h={10}
              p="5px"
              m="auto"
              textAlign={"center"}
              className={`input-bar ${isFocused ? "focused" : ""}`}
            >
              <Input
                border={"none"}
                fontSize={"14px"}
                borderRadius={"2px"}
                placeholder="Bạn tìm gì..."
                h={7}
                value={input}
                ref={btnRef}
                onClick={onOpen}
                onChange={handleChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <BiSearch color="#555" fontSize={"28px"} />
            </Flex>
            <Closesearch ref={searchRef} />
          </Box>
          {!isAuth ? (
            <Flex
              cursor={"pointer"}
              borderRadius={5}
              _hover={{ bg: "#0077ff" }}
            >
              <Icon
                w={4}
                h={4}
                color={"#fff"}
                margin={2}
                as={BsFillPersonFill}
              />
              <Link to="login">
                <Heading
                  fontWeight={400}
                  m="2"
                  cursor={"pointer"}
                  fontSize={"14px"}
                  color="#fff"
                  className={`header-bar ${isFocused ? "focused" : ""}`}
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
                Hi {username}
              </MenuButton>
              <MenuList>
                <Link to="/myprofile">
                  <MenuItem>Profile</MenuItem>
                </Link>
                <Link to="/wishlist">
                  <MenuItem>Wishlist</MenuItem>
                </Link>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          )}
          <Link to="/cart">
            <Flex
              cursor={"pointer"}
              textAlign={"center"}
              borderRadius={5}
              _hover={{
                bg: "#0077ff",
              }}
            >
              {" "}
              <Icon as={BsCart2} w={4} h={4} color={"#fff"} margin={2} />
              <Heading
                fontWeight={400}
                m="2"
                cursor={"pointer"}
                fontSize={"14px"}
                color="#fff"
                flexDirection={"row"}
                className={`header-bar ${isFocused ? "focused" : ""}`}
              >
                Giỏ hàng
              </Heading>
            </Flex>
          </Link>
          <Link to="/cart">
            <Flex
              cursor={"pointer"}
              className={`header-bar ${isFocused ? "focused" : ""}`}
              _hover={{ bg: "#0077ff" }}
            ></Flex>
          </Link>
          <Link to="/cart">
            <Flex
              cursor={"pointer"}
              _hover={{ bg: "#0077ff" }}
              className={`header-bar ${isFocused ? "focused" : ""}`}
            ></Flex>
          </Link>
          <Link to="/cart">
            <Flex
              cursor={"pointer"}
              bg={"#fff"}
              textAlign={"center"}
              borderRadius={15}
              _hover={{ bg: "#fff" }}
              className={`header-bar ${isFocused ? "focused" : ""}`}
            >
              <Heading
                fontWeight={700}
                m="2"
                cursor={"pointer"}
                fontSize={"14px"}
                color="red"
                flexDirection={"row"}
              >
                0362956071
              </Heading>
            </Flex>
          </Link>
        </Flex>
        <Flex
          w="100%"
          h="40px"
          textAlign={"center"}
          justifyContent="center"
          alignItems={"center"}
          m="auto"
          bg="#4a90e2"
          px="15%"
          style={{
            position: isMenuFixed ? "fixed" : "static",
            top: "0px",
            width: "100%",
          }}
        >
          <Menu>
            <MenuButton
              px={4}
              py={2}
              color="#fff"
              alignContent={"center"}
              _hover={{ color: "white", fontSize: 18 }}
              _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
            >
              <HamburgerIcon w={50} h={7} paddingBottom={1} />
              Tất cả danh mục
              <ChevronDownIcon />
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
                      my="8px"
                      fontSize={"18px"}
                      _hover={{ textDecoration: "underline" }}
                    >
                      <Image
                        w={20}
                        marginLeft={10}
                        src={require("../Components/Images/Laptop-129x129.webp")}
                      />
                      <Text> LapTop</Text>
                    </Heading>
                    <Text className="hoverText">Asus</Text>
                    <Text className="hoverText"> Lenovo</Text>
                    <Text className="hoverText">Acer</Text>
                    <Text className="hoverText">Hp</Text>
                    <Text className="hoverText">MacBook</Text>
                  </Box>
                  <Box>
                    <Heading className="hoverText" my="8px" fontSize={"18px"}>
                      <Image
                        w={20}
                        marginLeft={10}
                        src={require("../Components/Images/dien-thoai-doc-quyen-128x128.webp")}
                      />
                      <Text>Điện thoại</Text>
                    </Heading>
                    <Text className="hoverText">Apple</Text>
                    <Text className="hoverText">Samsung</Text>
                    <Text className="hoverText">Xiaomi</Text>
                    <Text className="hoverText"> Oppo</Text>
                  </Box>
                  <Box>
                    <Heading className="hoverText" my="8px" fontSize={"18px"}>
                      <Image
                        w={20}
                        marginLeft={10}
                        src={require("../Components/Images/Tablet-128x129.webp")}
                      />
                      <Text> Tablet</Text>
                    </Heading>
                    <Text className="hoverText">IPad </Text>
                    <Text className="hoverText"> Samsung </Text>
                    <Text className="hoverText">Xiaomi</Text>
                    <Text className="hoverText"> Nokia </Text>
                    <Text className="hoverText">Lenovo</Text>
                    <Text className="hoverText"> Readme</Text>
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
                      <Image
                        w={20}
                        marginLeft={10}
                        src={require("../Components/Images/Bo-phu-kien-di-dong-Yealink-cho-WH6367-2.png")}
                      />
                      <Text> Phụ kiện di động</Text>
                    </Heading>
                    <Text className="hoverText"> Sạc dự phòng </Text>
                    <Text className="hoverText"> Cáp, sạc </Text>
                    <Text className="hoverText"> Bàn phím , bút tablet</Text>
                    <Text className="hoverText"> Miếng dán</Text>
                    <Text className="hoverText"> Túi đựng AriPods</Text>
                  </Box>
                  <Box>
                    <Heading className="hoverText" my="8px" fontSize={"18px"}>
                      <Image
                        w={20}
                        marginLeft={10}
                        src={require("../Components/Images/icon-moi-128x129.webp")}
                      />
                      <Text>Đồng hồ </Text>
                    </Heading>
                    <Text className="hoverText"> Đồng hồ nam </Text>
                    <Text className="hoverText"> Đồng hồ nữ</Text>
                    <Text className="hoverText"> Đồng hồ Casio </Text>
                    <Text className="hoverText"> Đồng hồ Orient </Text>
                    <Text className="hoverText"> Đồng hồ Citizen </Text>
                  </Box>
                  <Box>
                    <Heading className="hoverText" my="8px" fontSize={"18px"}>
                      Thiết bị lưu trữ{" "}
                    </Heading>
                    <Text className="hoverText"> Ổ cứng di động</Text>
                    <Text className="hoverText"> Thẻ nhớ </Text>
                    <Text className="hoverText"> USB </Text>
                  </Box>
                  <Box>
                    <Heading className="hoverText" my="8px" fontSize={"18px"}>
                      {" "}
                      Smartwatch
                    </Heading>
                    <Text className="hoverText"> Apple Watch</Text>
                    <Text className="hoverText"> Samsung </Text>
                    <Text className="hoverText">BiFit </Text>
                    <Text className="hoverText"> Xiaomi </Text>
                  </Box>
                  <Box>
                    <Heading className="hoverText" my="8px" fontSize={"18px"}>
                      {" "}
                      Phụ kiện laptop{" "}
                    </Heading>
                    <Text className="hoverText"> Chuột, bàn phím </Text>
                    <Text className="hoverText"> Thiết bị mạng </Text>
                  </Box>
                  <Box>
                    <Heading className="hoverText" my="8px" fontSize={"18px"}>
                      {" "}
                      Phụ kiện điện thoại{" "}
                    </Heading>
                    <Text className="hoverText"> Tai nghe </Text>
                    <Text className="hoverText"> Pin dự phòng </Text>
                    <Text className="hoverText"> Cáp sạc </Text>
                    <Text className="hoverText"> Loa nghe nhạc </Text>
                    <Text className="hoverText">Thẻ nhớ </Text>
                  </Box>
                  <Box>
                    <Heading className="hoverText" my="8px" fontSize={"18px"}>
                      Thiết bị Mạng
                    </Heading>
                    <Text className="hoverText"> Thiết bị mạng Asus </Text>
                    <Text className="hoverText">Thiết bị mạng Xiaomi</Text>
                    <Text className="hoverText"> Thiết bị mạng TotoLink </Text>
                    <Text className="hoverText"> Thiết bị mạng TP-LINK </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>
          <Menu>
            <Link to="phone">
              <MenuButton
                px={4}
                py={2}
                color="#fff"
                transition="all 0.1s"
                _hover={{ color: "white", fontSize: 18 }}
                _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
              >
                <Icon as={BsPhone} /> Điện Thoại
              </MenuButton>
            </Link>
          </Menu>
          <Menu>
            <Link to="laptop">
              <MenuButton
                px={4}
                py={2}
                color="#fff"
                transition="all 0.2s"
                _hover={{ color: "white", fontSize: 18 }}
                _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
              >
                <Icon boxSize={5} h={5} as={AiOutlineLaptop} /> Laptop
              </MenuButton>
            </Link>
          </Menu>
          <Menu>
            <Link to="tablet">
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
          <Menu>
            <Link to="smartwatch">
              <MenuButton
                px={4}
                py={2}
                color="#fff"
                transition="all 0.2s"
                _hover={{ color: "white", fontSize: 18 }}
                _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
                display="flex"
              >
                <Icon as={BsSmartwatch} /> Smartwatch
              </MenuButton>
            </Link>
          </Menu>
        </Flex>
      </Box>
    );
  } else if (isLargerThan750px) {
    return (
      <Flex
        zIndex={2}
        className="flex-container"
        px="5%"
        bg="#4a90e2"
        justifyContent="space-between"
        style={direction === "up" ? navbar.active : navbar.hidden}
      >
        <Link to="/">
          <Box>
            <Image src={require("./Images/logo.png")} alt="logo" w="120px" />
          </Box>
        </Link>
        <Box>
          <Flex
            bg="white"
            borderRadius={"5px"}
            w="330px"
            h={10}
            p="5px"
            m="auto"
            textAlign={"center"}
            className={`input-bar-talest ${isFocused ? "focused" : ""}`}
          >
            <Input
              border={"none"}
              fontSize={"14px"}
              borderRadius={"2px"}
              placeholder="Bạn tìm gì..."
              h={7}
              value={input}
              onChange={handleChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <BiSearch color="#555" fontSize={"28px"} />
          </Flex>
        </Box>
        <Closesearch1 />
        <Link to="/cart">
          <Flex
            cursor={"pointer"}
            borderRadius={10}
            _hover={{ bg: "#0077ff" }}
            className={`header-bar ${isFocused ? "focused" : ""}`}
          >
            <Heading m="3" cursor={"pointer"} fontSize={"16px"} color="white">
              <Icon as={BsCart2} w={6} h={6} color={"#fff"} margin={2} />
            </Heading>
          </Flex>
        </Link>
        {!isAuth ? (
          <Flex
            cursor={"pointer"}
            borderRadius={10}
            _hover={{ bg: "#0077ff" }}
            className={`header-bar ${isFocused ? "focused" : ""}`}
          >
            <Link to="login">
              <Heading
                m={3}
                cursor={"pointer"}
                fontSize={"17px"}
                color="white"
                _hover={{ textDecoration: "underline" }}
              >
                <Icon
                  w={6}
                  h={6}
                  color={"#fff"}
                  margin={2}
                  as={BsFillPersonFill}
                />
              </Heading>
            </Link>
          </Flex>
        ) : (
          <Menu className={`header-bar ${isFocused ? "focused" : ""}`}>
            <MenuButton
              color="black"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Hi {username}
            </MenuButton>
            <MenuList>
              <Link to="/myprofile">
                <MenuItem>My Profile</MenuItem>
              </Link>
              <Link to="/myorder">
                <MenuItem>My Order</MenuItem>
              </Link>
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
            <DrawerContent bg="#FFFFFF" color="#55555" w={100}>
              <DrawerCloseButton fontSize={20} margin={5} />
              <DrawerBody>
                <VStack
                  justifyContent={"space-around"}
                  alignItems="flex-start"
                  gap="25px"
                  m="auto"
                  p="auto"
                  paddingLeft={10}
                  paddingTop={20}
                >
                  <Box borderBottom={"1px solid #555"}>
                    <Link to="Phone">
                      <Heading
                        w={"200px"}
                        alignItems="center"
                        marginBottom={5}
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="#55555"
                      >
                        Điện thoại
                      </Heading>
                    </Link>
                  </Box>
                  <Box borderBottom={"1px solid #555"}>
                    <Link to="Laptop">
                      <Heading
                        w={"200px"}
                        marginBottom={5}
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="#55555"
                      >
                        Laptop
                      </Heading>
                    </Link>
                  </Box>
                  <Box borderBottom={"1px solid #555"}>
                    <Link to="Tablets">
                      <Heading
                        w={"200px"}
                        marginBottom={5}
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="#55555"
                      >
                        Tablet
                      </Heading>
                    </Link>
                  </Box>
                  <Box borderBottom={"1px solid #555"}>
                    <Link to="headphones">
                      <Heading
                        w={"200px"}
                        marginBottom={5}
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="#55555"
                      >
                        Phụ kiện
                      </Heading>
                    </Link>
                  </Box>
                  <Box borderBottom={"1px solid #555"}>
                    <Link to="computers">
                      <Heading
                        w={"200px"}
                        marginBottom={5}
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="#55555"
                      >
                        Smartwatch
                      </Heading>
                    </Link>
                  </Box>
                  <Box borderBottom={"1px solid #555"}>
                    <Link to="kitchen" alignItems="center">
                      <Heading
                        w={"200px"}
                        marginBottom={5}
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="#55555"
                      >
                        Đồng hồ
                      </Heading>
                    </Link>
                  </Box>
                  <Box borderBottom={"1px solid #555"}>
                    <Link to="personalcare">
                      <Heading
                        w={"200px"}
                        marginBottom={5}
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="#55555"
                      >
                        Máy cũ giá rẻ
                      </Heading>
                    </Link>
                  </Box>
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
        className="flex-container"
        gap={0}
        px="0%"
        bg="#4a90e2"
        justifyContent="center"
        h={20}
        zIndex={2}
        style={direction === "up" ? navbar.active : navbar.hidden}
      >
        <Link to="/" className={`header-bar ${isFocused ? "focused" : ""}`}>
          <Box marginLeft={0}>
            <Image src={require("./Images/logo.png")} alt="logo" w="120px" />
          </Box>
        </Link>
        <Box paddingLeft={2}>
          <Flex
            bg="white"
            borderRadius={"5px"}
            w="auto"
            h={10}
            p="5px"
            m="auto"
            textAlign={"center"}
            className={`input-bar-mobie ${isFocused ? "focused" : ""}`}
          >
            <Input
              border={"none"}
              fontSize={"14px"}
              borderRadius={"2px"}
              placeholder="Bạn tìm gì..."
              h={7}
              value={input}
              onChange={handleChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <BiSearch color="#555" fontSize={"28px"} />
          </Flex>
        </Box>
        <Closesearch2 />
        <Box mx="20px" className={`header-bar ${isFocused ? "focused" : ""}`}>
          <Box ref={btnRef} color="white" colorScheme="teal" onClick={onOpen}>
            <GiHamburgerMenu fontSize={"50px"} />
          </Box>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent
              bg="#FFFFFF"
              color="#55555"
              justifyContent={"flex-end"}
            >
              <DrawerCloseButton fontSize={20} margin={5} />
              <DrawerBody>
                <VStack
                  justifyContent={"space-around"}
                  alignItems="flex-start"
                  gap="5px"
                  m="auto"
                  p="auto"
                  paddingLeft={10}
                  paddingTop={10}
                >
                  {isAuth ? (
                    <Box borderBottom={"1px solid #555"}>
                      <Link to="profile">
                        <Heading
                          w={"200px"}
                          marginBottom={5}
                          cursor={"pointer"}
                          fontSize={"17px"}
                          fontWeight="bold"
                          color="#55555"
                          mt="35px"
                        >
                          Hi {username}
                        </Heading>
                      </Link>
                    </Box>
                  ) : (
                    <Box borderBottom={"1px solid #555"}>
                      <Link to="login">
                        <Heading
                          w={"200px"}
                          marginBottom={5}
                          cursor={"pointer"}
                          fontSize={"17px"}
                          fontWeight="bold"
                          color="#55555"
                          mt="35px"
                        >
                          Đăng nhập
                        </Heading>
                      </Link>
                    </Box>
                  )}
                  <Box borderBottom={"1px solid #555"}>
                    <Link to="/cart">
                      <Heading
                        w={"200px"}
                        marginBottom={5}
                        cursor={"pointer"}
                        fontSize={"17px"}
                        fontWeight="bold"
                        color="#55555"
                      >
                        Giỏ hàng
                      </Heading>
                    </Link>
                  </Box>
                  <Box borderBottom={"1px solid #555"}>
                    <Link to="phone">
                      <Heading
                        w={"200px"}
                        alignItems="center"
                        marginBottom={5}
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="#55555"
                      >
                        Điện thoại
                      </Heading>
                    </Link>
                  </Box>
                  <Box borderBottom={"1px solid #555"}>
                    <Link to="laptop">
                      <Heading
                        w={"200px"}
                        marginBottom={5}
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="#55555"
                      >
                        Laptop
                      </Heading>
                    </Link>
                  </Box>
                  <Box borderBottom={"1px solid #555"}>
                    <Link to="tablet">
                      <Heading
                        w={"200px"}
                        marginBottom={5}
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="#55555"
                      >
                        Tablet
                      </Heading>
                    </Link>
                  </Box>
                  <Box borderBottom={"1px solid #555"}>
                    <Link to="headphones">
                      <Heading
                        w={"200px"}
                        marginBottom={5}
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="#55555"
                      >
                        Phụ kiện
                      </Heading>
                    </Link>
                  </Box>
                  <Box borderBottom={"1px solid #555"}>
                    <Link to="computers">
                      <Heading
                        w={"200px"}
                        marginBottom={5}
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="#55555"
                      >
                        Smartwatch
                      </Heading>
                    </Link>
                  </Box>
                  <Box borderBottom={"1px solid #555"}>
                    <Link to="kitchen" alignItems="center">
                      <Heading
                        w={"200px"}
                        marginBottom={5}
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="#55555"
                      >
                        Đồng hồ
                      </Heading>
                    </Link>
                  </Box>
                  <Box borderBottom={"1px solid #555"}>
                    <Link to="personalcare">
                      <Heading
                        w={"200px"}
                        marginBottom={5}
                        cursor={"pointer"}
                        fontSize={"17px"}
                        color="#55555"
                      >
                        Máy cũ giá rẻ
                      </Heading>
                    </Link>
                  </Box>
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
