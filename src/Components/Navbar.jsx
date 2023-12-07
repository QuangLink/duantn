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
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Redux/Auth/auth.action";
import "./Navbar.css";
import useScrollListener from "./useScroll";
import { UserAuth } from "../context/AuthContext";
import { BsPersonCircle } from "react-icons/bs";
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
  const { admin } = useSelector((store) => store.AuthManager);
  const { dataLength } = useSelector((store) => store.cart);
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
    fetch(`${process.env.REACT_APP_DATABASE_API_URL}/products/search`)
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
                              {results.prodPrice &&
                                results.prodPrice.toLocaleString("vi-VN", {})}
                              đ
                            </span>

                            {results.prodPriceSale !== 0 && (
                              <span className="prodPriceSale">
                                {results.prodPriceSale &&
                                  results.prodPriceSale.toLocaleString(
                                    "vi-VN",
                                    {},
                                  )}
                              </span>
                            )}
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
      <Box
        w={"100%"}
        backgroundColor="#FFFFFF"
        position={"relative"}
        zIndex={2}
      >
        <Flex w="100%" alignItems="center" m="auto" justifyContent="center">
          <Box></Box>
        </Flex>
        <Flex className="flex-container">
          <Box w="29%">
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Link to="/">
                <Box>
                  <Image
                    src={require("./Images/logodesktop.png")}
                    alt="logo"
                    w="200px"
                  />
                </Box>
              </Link>

              {admin === 1 && (
                <Link to="/admin/dashboard">
                  <Flex
                    cursor={"pointer"}
                    textAlign={"center"}
                    borderRadius={5}
                    bg="#F5F5F5"
                  >
                    {" "}
                    <Icon
                      as={BsPersonCircle}
                      w={5}
                      h={5}
                      color={"#555"}
                      margin={2}
                    />
                    <Heading
                      fontWeight={400}
                      m="2"
                      cursor={"pointer"}
                      fontSize={"18px"}
                      color="#555"
                      flexDirection={"row"}
                      // className={`header-bar ${isFocused ? "focused" : ""}`}
                    >
                      Admin
                    </Heading>
                  </Flex>
                </Link>
              )}
            </Flex>
          </Box>

          {/* {admin === 1 && (
            <Link to="/admin/dashboard">
              <Flex
                cursor={"pointer"}
                textAlign={"center"}
                borderRadius={5}
                _hover={{
                  bg: "#0077ff",
                }}
              >
                {" "}
                <Icon
                  as={BsPersonCircle}
                  w={5}
                  h={5}
                  color={"#fff"}
                  margin={2}
                />
                <Heading
                  fontWeight={400}
                  m="2"
                  cursor={"pointer"}
                  fontSize={"18px"}
                  color="#fff"
                  flexDirection={"row"}
                // className={`header-bar ${isFocused ? "focused" : ""}`}
                >
                  Admin
                </Heading>
              </Flex>
            </Link>
          )} */}
          <Box w="40%">
            <Flex
              bg="#F5F5F5"
              borderRadius={"15px"}
              w="100%"
              h={10}
              p="5px"
              textAlign={"center"}
            >
              <Input
                border={"none"}
                fontSize={"14px"}
                // borderRadius={"2px"}
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
          <Box w="29%">
            <Flex justifyContent={"flex-end"} alignItems={"center"}>
              {!isAuth ? (
                <Link to="login">
                  <Flex
                    cursor={"pointer"}
                    borderRadius={5}
                    w={180}
                    mr={2}
                    _hover={{ bg: "#F5F5F5" }}
                  >
                    <Icon
                      fontSize={40}
                      color={"#555"}
                      m={3}
                      as={BsFillPersonFill}
                    />

                    <Text
                      // fontWeight={400}
                      m="2"
                      // cursor={"pointer"}
                      fontSize={"16px"}
                      color="#555"
                    >
                      Đăng nhập Đăng ký
                    </Text>
                  </Flex>
                </Link>
              ) : (
                <Box>
                  <Menu>
                    <MenuButton
                      bg="#FFFFFF"
                      h={50}
                      pt={5}
                      fontSize={16}
                      color="#55555"
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                    >
                      <Flex>
                        <Icon
                          fontSize={46}
                          color={"#555"}
                          as={BsFillPersonFill}
                        />
                        <Box pt={1}>
                          Xin chào ,<Text fontSize={16}> {username}</Text>
                        </Box>
                      </Flex>
                    </MenuButton>
                    <MenuList>
                      <Link to="/myprofile">
                        <MenuItem>My Profile</MenuItem>
                      </Link>
                      <Link to="/myorder">
                        <MenuItem>My Order</MenuItem>
                      </Link>
                      <MenuItem>My Address</MenuItem>
                      <Link to="/wishlist">
                        {" "}
                        <MenuItem>My Wishlist</MenuItem>
                      </Link>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              )}
              <Link to="/cart">
                <Flex
                  // cursor={"pointer"}
                  textAlign={"center"}
                  borderRadius={5}
                  mr={2}
                  w={160}
                  _hover={{
                    bg: "#F5F5F5",
                  }}
                >
                  {" "}
                  <Box position="relative" display="inline-block">
                    <Icon
                      as={BsCart2}
                      fontSize={40}
                      color={"#555"}
                      m={3}
                      position="relative"
                    />

                    <Box
                      h={5}
                      w={5}
                      position="absolute"
                      top="6px"
                      right="5px"
                      color="white"
                      bg="red"
                      borderRadius="100%"
                      p={1}
                    >
                      <Text
                        fontSize={15}
                        position="absolute"
                        top="-2px"
                        left={1.5}
                      >
                        {dataLength}
                      </Text>
                    </Box>
                  </Box>
                  <Text
                    fontWeight={400}
                    m="2"
                    // cursor={"pointer"}

                    fontSize={"16px"}
                    color="#555"
                    flexDirection={"row"}
                  >
                    Giỏ hàng của bạn
                  </Text>
                </Flex>
              </Link>
            </Flex>
          </Box>
        </Flex>
        <Flex
          w="80%"
          h="70px"
          borderWidth={1}
          textAlign={"center"}
          justifyContent="center"
          alignItems={"center"}
          m="auto"
          bg="#FFFFFF"
          // px="15%"
          style={{
            position: isMenuFixed ? "fixed" : "static",
            top: "0px",
            width: "100%",
          }}
        >
          <Menu>
            <MenuButton
              // px={4}
              // py={2}
              color="#55555"
              alignContent={"center"}
              _hover={{ color: "55555", fontSize: 18 }}
              _focus={{ boxShadow: "0px 3px 0px  #555" }}
            >
              <HamburgerIcon w={50} h={7} paddingBottom={1} />
              Tất cả danh mục
              <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#FFF">
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
                      marginLeft={8}
                      src={require("../Components/Images/Laptop-129x129.webp")}
                    />
                    <Link to="/laptop">
                      {" "}
                      <Text> Laptop</Text>
                    </Link>
                  </Heading>
                  <Link to="/asus">
                    {" "}
                    <Text className="hoverText">Asus</Text>
                  </Link>
                  <Link to="lenovo">
                    <Text className="hoverText"> Lenovo</Text>
                  </Link>
                  <Link to="acer">
                    <Text className="hoverText">Acer</Text>
                  </Link>
                  <Link to="hp">
                    {" "}
                    <Text className="hoverText">Hp</Text>
                  </Link>
                </Box>
                <Box>
                  <Heading className="hoverText" my="8px" fontSize={"18px"}>
                    <Image
                      w={20}
                      marginLeft={8}
                      src={require("../Components/Images/dien-thoai-doc-quyen-128x128.webp")}
                    />
                    <Link to="phone">
                      {" "}
                      <Text>Điện thoại</Text>
                    </Link>
                  </Heading>
                  <Link to="apple/phone">
                    <Text className="hoverText">Apple</Text>
                  </Link>
                  <Link to="samsung">
                    {" "}
                    <Text className="hoverText">Samsung</Text>
                  </Link>
                  <Link to="xiaomi">
                    {" "}
                    <Text className="hoverText">Xiaomi</Text>
                  </Link>
                  <Link to="oppo">
                    {" "}
                    <Text className="hoverText"> Oppo</Text>
                  </Link>
                </Box>
                <Box>
                  <Heading className="hoverText" my="8px" fontSize={"18px"}>
                    <Link to="tablet">
                      <Image
                        w={20}
                        marginLeft={8}
                        src={require("../Components/Images/Tablet-128x129.png")}
                      />
                      <Text> Tablet</Text>
                    </Link>
                  </Heading>
                  <Link to="tablet">
                    {" "}
                    <Text className="hoverText">IPad </Text>
                  </Link>
                  <Link to="tablet">
                    {" "}
                    <Text className="hoverText"> Samsung </Text>
                  </Link>
                  <Link to="tablet">
                    {" "}
                    <Text className="hoverText">Xiaomi</Text>
                  </Link>
                  <Link to="tablet">
                    {" "}
                    <Text className="hoverText"> Nokia </Text>
                  </Link>
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
                      marginLeft={8}
                      src={require("../Components/Images/Bo-phu-kien-di-dong-Yealink-cho-WH6367-2.png")}
                    />
                    <Text> Phụ kiện di động</Text>
                  </Heading>
                  <Link to="Battery">
                    {" "}
                    <Text className="hoverText"> Sạc dự phòng </Text>
                  </Link>
                  <Link to="cable">
                    {" "}
                    <Text className="hoverText"> Cáp, sạc </Text>
                  </Link>
                  <Link to="EarPhone">
                    {" "}
                    <Text className="hoverText"> Tai nghe AriPods</Text>
                  </Link>
                </Box>
                <Box>
                  <Heading className="hoverText" my="8px" fontSize={"18px"}>
                    <Image
                      w={20}
                      marginLeft={8}
                      src={require("../Components/Images/Phukiengaming.png")}
                    />
                    <Text> Phụ kiện PC</Text>
                  </Heading>
                  <Link to="mouse">
                    {" "}
                    <Text className="hoverText"> Chuột</Text>
                  </Link>
                  <Link to="keyboard">
                    {" "}
                    <Text className="hoverText">Bàn phím </Text>
                  </Link>
                  <Link to="LoudSpeaker">
                    {" "}
                    <Text className="hoverText">Loa Bluetooth </Text>
                  </Link>
                </Box>
              </Grid>
            </MenuList>
          </Menu>
          <Menu>
            <Link to="phone">
              <MenuButton
                px={4}
                py={2}
                color="#55555"
                _hover={{ color: "#555", fontSize: 18 }}
                _focus={{ boxShadow: "0px 3px 0px  #555" }}
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
                color="#55555"
                _hover={{ color: "#555", fontSize: 18 }}
                _focus={{ boxShadow: "0px 3px 0px  #555" }}
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
                color="#55555"
                _hover={{ color: "#555", fontSize: 18 }}
                _focus={{ boxShadow: "0px 3px 0px  #555" }}
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
                color="#55555"
                _hover={{ color: "#555", fontSize: 18 }}
                _focus={{ boxShadow: "0px 3px 0px  #555" }}
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
                    <Link to="smartwatch">
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
                    <Link to="smartwatch">
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
