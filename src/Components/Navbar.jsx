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
} from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import React, { useState } from "react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { BiSearch } from "react-icons/bi";
import { BsPhone, BsSmartwatch, BsCart2, BsFillPersonFill } from "react-icons/bs";
import { AiOutlineLaptop, AiOutlineTablet } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Redux/Auth/auth.action";
import './Navbar.css';
function Navbar() {
  const [isLargerThan1100] = useMediaQuery("(min-width: 1100px)");
  const [isLargerThan750px] = useMediaQuery("(min-width: 750px)");
  const [islesserThan740px] = useMediaQuery("(max-width: 750px)");
  const [input, setInput] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { isAuth } = useSelector((store) => store.AuthManager);
  const { username } = useSelector((store) => store.AuthManager);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState([]);
  const [isSearchVisible, setIsSearchVisible] = useState(true);


  const handleInputFocus = () => {
    setIsFocused(true);
  };
  const handleInputBlur = () => {
    setIsFocused(false);
  };
  const fetchData = (value) => {
    fetch("http://localhost:9000/products/search")
      .then((response) => response.json())
      .then((json) => {
        // console.log('check data', json);
        const filteredResults = json.filter((search) => {
          return search && search.prodName && search.prodName.toLowerCase().includes(input.toLowerCase());
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
    setIsSearchVisible(false);
  };
  const handleChange = (event) => {
    const inputValue = event.target.value;
    setIsSearchVisible(true);
    setInput(inputValue);
    if (inputValue === '') {
      setResults([]);
    } else {
      fetchData(inputValue);
    }
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
          <Box><Image src={(require('../Components/Images/1200-44-1200x44-5.webp'))} /></Box>
        </Flex>
        <Flex className="flex-container" px="15%">
          <Link to="/">
            <Box>
              <Image src={require('./Images/logo.jpg')} alt="logo" w="130px" h="70px" />
            </Box>
          </Link>
          <Box>
            <Flex bg="white" borderRadius={"5px"} w="250px" h={10} p="5px" m="auto" textAlign={"center"}
              className={`input-bar ${isFocused ? 'focused' : ''}`}
            >
              <Input border={"none"} fontSize={"14px"} borderRadius={"2px"} placeholder="Bạn tìm gì..." h={7} value={input}
                ref={btnRef}
                onClick={onOpen}
                onChange={handleChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <BiSearch color="#555" fontSize={"28px"} />
            </Flex>
            {isSearchVisible && <Box bg={'#fff'} width="744px" height="auto" position={'fixed'} marginTop={5} borderRadius={15}
              isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}
            >
              {results.slice(0, 5).map((results, id) => {
                return (
                  <Link to={`/proudtc/${results.prodID}`} onClick={handleProductClick} >
                    <Flex key={id} direction="row" align="flex-start" borderBottom={'1px solid #555'} justify="center" _hover={{ bg: '#9ecdf2' }}>
                      <Box mb={6} margin={5} marginRight={10}>
                        <Image src={results.prodImg} w={70} h={50} alt="Memory Card" />
                      </Box>
                      <Box mb={6}>
                        <Text fontSize="xl" fontWeight="600">
                          {results.prodName}
                        </Text>
                        <Text fontSize="lg" color="gray.500">
                          <span className="prodPrice">{results.prodPrice} <sup>đ</sup></span>
                          <span className="prodPriceSale" >{results.prodPriceSale}<sup>đ</sup> </span>
                        </Text>
                      </Box>
                    </Flex>
                  </Link>
                )
              })}
            </Box>}
          </Box>
          {!isAuth ? (
            <Flex cursor={"pointer"} borderRadius={5} _hover={{ bg: "#0077ff" }}>
              <Icon w={4} h={4} color={'#fff'} margin={2} as={BsFillPersonFill} />
              <Link to="login">
                <Heading fontWeight={400} m="2" cursor={"pointer"} fontSize={"14px"} color="#fff"
                  className={`header-bar ${isFocused ? 'focused' : ''}`}
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
            <Flex cursor={"pointer"} textAlign={'center'} borderRadius={5} _hover={{
              bg: "#0077ff"
            }} > <Icon as={BsCart2} w={4} h={4} color={'#fff'} margin={2} />
              <Heading fontWeight={400} m='2' cursor={"pointer"} fontSize={"14px"} color="#fff" flexDirection={'row'}
                className={`header-bar ${isFocused ? 'focused' : ''}`}
              >
                Giỏ hàng
              </Heading>
            </Flex>
          </Link>
          <Link to="/cart">
            <Flex cursor={"pointer"} className={`header-bar ${isFocused ? 'focused' : ''}`} _hover={{ bg: "#0077ff" }} >
              <Heading fontWeight={400} m="2" cursor={"pointer"} fontSize={"14px"} color="#fff" >
                Khuyến mãi
              </Heading>
            </Flex>
          </Link>
          <Link to="/cart">
            <Flex cursor={"pointer"} _hover={{ bg: "#0077ff" }} className={`header-bar ${isFocused ? 'focused' : ''}`}>
              <Heading fontWeight={400} m="2" cursor={"pointer"} fontSize={"14px"} color="#fff">
                Chăm Sóc khách hàng
              </Heading>
            </Flex>
          </Link>
          <Link to="/cart">
            <Flex cursor={"pointer"} bg={'#fff'} textAlign={'center'} borderRadius={15} _hover={{ bg: "#fff" }}
              className={`header-bar ${isFocused ? 'focused' : ''}`}
            >
              <Heading fontWeight={700} m='2' cursor={"pointer"} fontSize={"14px"} color="red" flexDirection={'row'} >
                0362956071
              </Heading>
            </Flex>
          </Link>
        </Flex>
        <Flex w="95%" h="40px" textAlign={"center"} justifyContent="center" alignItems={"center"} m="auto" bg="#4a90e2" px="15%" >
          <Menu>
            <MenuButton px={4} py={2} color="#fff" alignContent={"center"}
              _hover={{ color: "white", fontSize: 18 }}
              _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
            >
              <HamburgerIcon w={50} h={7} paddingBottom={1} />Tất cả danh mục<ChevronDownIcon />
            </MenuButton>
            <MenuList bg="#FFF">
              <Link to="headphones">
                <Grid p="15px" gridTemplateColumns={"repeat(5,1fr)"} gap="20px" justifyContent="space-around" alignContent={"center"}
                  textAlign="center"
                  color="#55555"
                >
                  <Box>
                    <Heading my="8px" fontSize={"18px"} _hover={{ textDecoration: "underline", }}  >
                      <Image w={20} marginLeft={10} src={(require('../Components/Images/Laptop-129x129.webp'))} />
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
                      <Image w={20} marginLeft={10} src={(require('../Components/Images/dien-thoai-doc-quyen-128x128.webp'))} />
                      <Text>Điện thoại</Text>
                    </Heading>
                    <Text className="hoverText">Apple</Text>
                    <Text className="hoverText">Samsung</Text>
                    <Text className="hoverText">Xiaomi</Text>
                    <Text className="hoverText"> Oppo</Text>
                  </Box>
                  <Box>
                    <Heading className="hoverText" my="8px" fontSize={"18px"}>
                      <Image w={20} marginLeft={10} src={(require('../Components/Images/Tablet-128x129.webp'))} />
                      <Text> Tablet</Text>
                    </Heading>
                    <Text className="hoverText">IPad </Text>
                    <Text className="hoverText"> Samsung </Text>
                    <Text className="hoverText" >Xiaomi</Text>
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
                      <Image w={20} marginLeft={10} src={(require('../Components/Images/Bo-phu-kien-di-dong-Yealink-cho-WH6367-2.png'))} />
                      <Text>   Phụ kiện di động</Text>
                    </Heading>
                    <Text className="hoverText" >  Sạc dự phòng  </Text>
                    <Text className="hoverText" > Cáp, sạc </Text>
                    <Text className="hoverText"> Bàn phím , bút tablet</Text>
                    <Text className="hoverText">  Miếng dán</Text>
                    <Text className="hoverText"> Túi đựng AriPods</Text>
                  </Box>
                  <Box>
                    <Heading className="hoverText" my="8px" fontSize={"18px"}>
                      <Image w={20} marginLeft={10} src={(require('../Components/Images/icon-moi-128x129.webp'))} />
                      <Text>Đồng hồ </Text>
                    </Heading>
                    <Text className="hoverText" > Đồng hồ nam </Text>
                    <Text className="hoverText" > Đồng hồ nữ</Text>
                    <Text className="hoverText">  Đồng hồ Casio </Text>
                    <Text className="hoverText"> Đồng hồ Orient </Text>
                    <Text className="hoverText" >  Đồng hồ Citizen </Text>
                  </Box>
                  <Box>
                    <Heading className="hoverText" my="8px" fontSize={"18px"}>Thiết bị lưu trữ </Heading>
                    <Text className="hoverText"> Ổ cứng di động</Text>
                    <Text className="hoverText"  >  Thẻ nhớ </Text>
                    <Text className="hoverText"  >   USB </Text>
                  </Box>
                  <Box>
                    <Heading className="hoverText" my="8px" fontSize={"18px"}> Smartwatch</Heading>
                    <Text className="hoverText"> Apple Watch</Text>
                    <Text className="hoverText"  >  Samsung </Text>
                    <Text className="hoverText" >BiFit </Text>
                    <Text className="hoverText" > Xiaomi </Text>
                  </Box>
                  <Box>
                    <Heading className="hoverText" my="8px" fontSize={"18px"} > Phụ kiện laptop </Heading>
                    <Text className="hoverText"> Chuột, bàn phím </Text>
                    <Text className="hoverText" > Thiết bị mạng  </Text>
                  </Box>
                  <Box>
                    <Heading className="hoverText" my="8px" fontSize={"18px"} >  Phụ kiện điện thoại  </Heading>
                    <Text className="hoverText" > Tai nghe </Text>
                    <Text className="hoverText"> Pin dự phòng </Text>
                    <Text className="hoverText" > Cáp sạc </Text>
                    <Text className="hoverText"> Loa nghe nhạc </Text>
                    <Text className="hoverText">Thẻ nhớ </Text>
                  </Box>
                  <Box>
                    <Heading className="hoverText" my="8px" fontSize={"18px"}>Thiết bị Mạng</Heading>
                    <Text className="hoverText"> Thiết bị mạng Asus </Text>
                    <Text className="hoverText">Thiết bị mạng Xiaomi</Text>
                    <Text className="hoverText"  > Thiết bị mạng TotoLink </Text>
                    <Text className="hoverText"> Thiết bị mạng TP-LINK </Text>
                  </Box>
                </Grid>
              </Link>
            </MenuList>
          </Menu>
          <Menu >
            <Link to="phone" >
              <MenuButton px={4} py={2} color="#fff" transition="all 0.1s"
                _hover={{ color: "white", fontSize: 18 }}
                _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
              >
                <Icon as={BsPhone} />  Điện Thoại
              </MenuButton>

            </Link>
          </Menu>
          <Menu>
            <Link to="laptop">
              <MenuButton px={4} py={2} color="#fff" transition="all 0.2s"
                _hover={{ color: "white", fontSize: 18 }}
                _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
              >
                <Icon boxSize={5} h={5} as={AiOutlineLaptop} />  Laptop
              </MenuButton>
            </Link>
          </Menu>
          <Menu>
            <Link to="tablet">
              <MenuButton px={4} py={2} color="#fff" transition="all 0.2s"
                _hover={{ color: "white", fontSize: 18 }}
                _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
              >
                <Icon as={AiOutlineTablet} /> Tablet
              </MenuButton>
            </Link>
          </Menu>
          <Menu >
            <Link to="accessories">
              <MenuButton px={4} py={2} color="#fff" transition="all 0.2s"
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
              <MenuButton px={4} py={2} color="#fff" transition="all 0.2s"
                _hover={{ color: "white", fontSize: 18 }}
                _focus={{ boxShadow: "0px 3px 0px  rgba(56, 169, 240, 0.75)" }}
              >
                <Icon as={BsSmartwatch} />  Đồng hồ
              </MenuButton>
            </Link>
          </Menu>
          <Menu>
            <Link to="mobilesandtablets">
              <MenuButton px={4} py={2} color="#fff" transition="all 0.2s"
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
      <Flex className="flex-container" px='10%' bg='#4a90e2' justifyContent="center" >
        <Link to="/">
          <Box>
            <Image src={require('./Images/logo.jpg')} alt="logo" w="120px" h="70px" />
          </Box>
        </Link>
        <Box>
          <Flex bg="white" borderRadius={"5px"} w="250px" h={10} p="5px" m="auto" textAlign={"center"}>
            <Input border={"none"} fontSize={"14px"} borderRadius={"2px"} placeholder="Bạn tìm gì..." h={7} value={input}
              onChange={handleChange}
            />
            <BiSearch color="#555" fontSize={"28px"} />
          </Flex>
          {isSearchVisible && <Box bg={'#fff'} width="70%" height="auto" position={'fixed'} marginTop={5} borderRadius={15}
            isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}
          >
            {results.slice(0, 5).map((results, id) => {
              return (
                <Link to={`/proudtc/${results.prodID}`} onClick={handleProductClick} >
                  <Flex key={id} direction="row" align="flex-start" borderBottom={'1px solid #555'} justify="center" _hover={{ bg: '#9ecdf2' }}>
                    <Box mb={6} margin={5} marginRight={10}>
                      <Image src={results.prodImg} w={70} h={50} alt="Memory Card" />
                    </Box>
                    <Box mb={6}>
                      <Text fontSize="xl" fontWeight="600">
                        {results.prodName}
                      </Text>
                      <Text fontSize="lg" color="gray.500">
                        <span className="prodPrice">{results.prodPrice} <sup>đ</sup></span>
                        <span className="prodPriceSale" >{results.prodPriceSale}<sup>đ</sup> </span>
                      </Text>
                    </Box>
                  </Flex>
                </Link>
              )
            })}
          </Box>}
        </Box>
        <Link to="/cart">
          <Flex cursor={"pointer"} borderRadius={10} _hover={{ bg: "#0077ff" }} >
            <Heading m='3' cursor={"pointer"} fontSize={"16px"} color="white" >
              <Icon as={BsCart2} w={6} h={6} color={'#fff'} margin={2} />
            </Heading>
          </Flex>
        </Link>
        {!isAuth ? (
          <Flex cursor={"pointer"} borderRadius={10} _hover={{ bg: "#0077ff" }}>
            <Link to="login">
              <Heading m={3} cursor={"pointer"} fontSize={"17px"} color="white" _hover={{ textDecoration: "underline" }} >
                <Icon w={6} h={6} color={'#fff'} margin={2} as={BsFillPersonFill} />
              </Heading>
            </Link>
          </Flex>
        ) : (
          <Menu>
            <MenuButton color="black" as={Button} rightIcon={<ChevronDownIcon />} >
              Hi {username}
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
          <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}        >
            <DrawerOverlay />
            <DrawerContent bg="#FFFFFF" color="#55555">
              <DrawerCloseButton />
              <DrawerHeader fontSize={"22px"} fontWeight="bold">  Menu </DrawerHeader>
              <DrawerBody>
                <VStack justifyContent={"space-around"} alignContent="center" gap="25px" m="auto" p="auto"  >
                  <Link to="mobilesandtablets">
                    <Heading cursor={"pointer"} fontSize={"17px"} color="#55555" _hover={{ color: "#55555" }} >
                      Điện thoại
                      <Heading cursor={"pointer"} fontSize={"17px"} color="#55555" _hover={{ color: "#55555" }} />
                    </Heading>
                  </Link>
                  <Link to="phone">
                    <Heading cursor={"pointer"} fontSize={"17px"} color="#55555" _hover={{ color: "#55555" }}  >
                      Laptop
                    </Heading>
                  </Link>
                  <Link to="laptop">
                    <Heading cursor={"pointer"} fontSize={"17px"} color="#55555" _hover={{ color: "#55555" }} > Tablet  </Heading>
                  </Link>
                  <Link to="tablet">
                    <Heading cursor={"pointer"} fontSize={"17px"} color="#55555" _hover={{ color: "#55555" }}  >
                      Phụ kiện
                    </Heading>
                  </Link>
                  <Link to="kitchen">
                    <Heading cursor={"pointer"} fontSize={"17px"} color="#55555" _hover={{ color: "#55555" }}          >
                      Smartwatch
                    </Heading>
                  </Link>
                  <Link to="personalcare">
                    <Heading cursor={"pointer"} fontSize={"17px"} color="#55555" _hover={{ color: "#55555" }}  >
                      Đồng hồ
                    </Heading>
                  </Link>
                  <Link to="accessories">
                    <Heading cursor={"pointer"} fontSize={"17px"} color="#55555" _hover={{ color: "#55555" }}  >
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
      <Flex className="flex-container" px='10%' bg='#4a90e2' justifyContent="center">
        <Link to="/">
          <Box>
            <Image src={require('./Images/logo.jpg')} alt="logo" w="120px" h="70px" />
          </Box>
        </Link>
        <Box>
          <Flex bg="white" borderRadius={"5px"} w="200px" h={10} p="5px" m="auto" textAlign={"center"}>
            <Input border={"none"} fontSize={"14px"} borderRadius={"2px"} placeholder="Bạn tìm gì..." h={7} value={input}
              onChange={handleChange}
            />
            <BiSearch color="#555" fontSize={"28px"} />
          </Flex>
          {isSearchVisible && <Box bg={'#fff'} width="70%" height="auto" position={'fixed'} marginTop={5} borderRadius={15}
            isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}
          >
            {results.slice(0, 5).map((results, id) => {
              return (
                <Link to={`/proudtc/${results.prodID}`} onClick={handleProductClick} >
                  <Flex key={id} direction="row" align="flex-start" borderBottom={'1px solid #555'} justify="center" _hover={{ bg: '#9ecdf2' }}>
                    <Box mb={6} margin={5} marginRight={10}>
                      <Image src={results.prodImg} w={70} h={50} alt="Memory Card" />
                    </Box>
                    <Box mb={6}>
                      <Text fontSize="l" fontWeight="600">
                        {results.prodName}
                      </Text>
                      <Text fontSize="l" color="gray.500">
                        <span className="prodPrice">{results.prodPrice} <sup>đ</sup></span>
                        <span className="prodPriceSale" >{results.prodPriceSale}<sup>đ</sup> </span>
                      </Text>
                    </Box>
                  </Flex>
                </Link>
              )
            })}
          </Box>}
        </Box>
        <Box mx="20px">
          <Box ref={btnRef} color="white" colorScheme="teal" onClick={onOpen}>
            <GiHamburgerMenu fontSize={"55px"} />
          </Box>
          <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} >
            <DrawerOverlay />
            <DrawerContent bg="#FFFFFF" color="#55555">
              <DrawerCloseButton />
              <DrawerBody>
                <VStack justifyContent={"space-around"} alignContent="center" gap="25px" m="auto" p="auto"    >
                  {isAuth ? (
                    <Link to="profile">
                      <Heading cursor={"pointer"} fontSize={"24px"} fontWeight="bold" color="#55555" mt="35px" >
                        Hi {username}
                      </Heading>
                    </Link>
                  ) : (
                    <Link to="profile">
                      <Heading cursor={"pointer"} fontSize={"24px"} fontWeight="bold" color="#55555" mt="35px" >
                        Profile
                      </Heading>
                    </Link>
                  )}

                  {!isAuth ? (
                    <Link to="/login">
                      <Heading cursor={"pointer"} fontSize={"24px"} fontWeight="bold" color="#55555"  >
                        Login
                      </Heading>
                    </Link>
                  ) : (
                    <Link to="/login">
                      <Heading cursor={"pointer"} fontSize={"24px"} fontWeight="bold" color="#55555"
                        onClick={handleLogout}
                      >
                        Logout
                      </Heading>
                    </Link>
                  )}

                  <Link to="/cart">
                    <Heading cursor={"pointer"} fontSize={"24px"} fontWeight="bold" color="#55555"  >
                      Cart
                    </Heading>
                  </Link>

                  <DrawerHeader color="black" fontSize={"22px"} fontWeight="bold">
                    <Divider color={"black"} />
                    Product Category
                    <Divider color={"black"} />
                  </DrawerHeader>

                  <Link to="mobilesandtablets">
                    <Heading cursor={"pointer"} fontSize={"17px"} color="#55555"   >
                      Điện thoại
                    </Heading>
                  </Link>
                  <Link to="televisions">
                    <Heading cursor={"pointer"} fontSize={"17px"} color="#55555"   >
                      Laptop
                    </Heading>
                  </Link>
                  <Link to="homeappliances">
                    <Heading cursor={"pointer"} fontSize={"17px"} color="#55555"   >
                      Tablet
                    </Heading>
                  </Link>
                  <Link to="headphones">
                    <Heading cursor={"pointer"} fontSize={"17px"} color="#55555" >
                      Phụ kiện
                    </Heading>
                  </Link>
                  <Link to="computers">
                    <Heading cursor={"pointer"} fontSize={"17px"} color="#55555" >
                      Smartwatch
                    </Heading>
                  </Link>
                  <Link to="kitchen">
                    <Heading cursor={"pointer"} fontSize={"17px"} color="#55555" >
                      Đồng hồ
                    </Heading>
                  </Link>
                  <Link to="personalcare">
                    <Heading cursor={"pointer"} fontSize={"17px"} color="#55555" >
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
