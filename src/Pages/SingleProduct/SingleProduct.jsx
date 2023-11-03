import {
  Center,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  ListItem,
  Text,
  UnorderedList,
  useToast,
  border,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../Redux/SingleProduct/SingleProduct.action";
import { RotatingLines } from "react-loader-spinner";
import RelateProduct from "./RelateProduct";
import ComProduct from "./ComProduct";

import ProductTable from "./ProductTable";
import { PrApplePhone } from "../Home/CardDetails";
import RatingBar from "../Products/RatingBar";
import Cookies from "js-cookie";
//add singleData to cart
const postSingleData = async (data) => {
  try {
    // Lấy userID từ sessionStorage
    const userID = Cookies.get("userID");

    // Ensure data.prodID is a valid value, not [object Object]
    const prodID = data.prodID;

    // Tạo dữ liệu gửi đi kết hợp với userID và prodID
    const postData = {
      prodID,
      userID,
    };

    let response = await axios.post(
      `https://duantn-backend.onrender.com/cart/`,
      postData,
    );
    return response.data;
  } catch (error) {
    console.log("Trong hàm postSingleData xảy ra lỗi: ", error.response.data);
  }
};

export const postSingleDataWish = async (data) => {
  try {
    let response = await axios.post(
      `https://duantn-backend.onrender.com/wishlist`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      },
    );
    return response.data;
  } catch (error) {
    console.log(
      "Trong hàm postSingleDataWish xảy ra lỗi: ",
      error.response.data,
    );
  }
};

const SingleProduct = (props) => {
  const { typeOfProduct } = props;

  const params = useParams();
  const toast = useToast();

  // const [singleData, setSingleData] = useState({});

  var navigate = useNavigate();

  const singleData = useSelector((store) => store.singleProduct.data);
  // console.log("in the singleProductPage and the singleData is :-",singleData);
  const loading = useSelector((store) => store.singleProduct.loading);
  const error = useSelector((store) => store.singleProduct.error);

  const dispatch = useDispatch();
  const handlePost = (prodID) => {
    postSingleData({ prodID }).then((res) => navigate("/cart"));
  };

  const handleWish = (data) => {
    let newData = {};
    for (let i in data) {
      if (i === "id") {
        continue;
      }
      newData[i] = data[i];
    }
    postSingleDataWish(newData).then((res) => navigate("/wishlist"));
  };

  useEffect(() => {
    dispatch(getSingleProduct(typeOfProduct, params.id));
  }, [typeOfProduct, params.id]);
  if (error) {
    return (
      <Heading
        size="3xl"
        textAlign="center"
        color="red.500"
        marginTop={10}
        marginBottom="200px"
      >
        Some thing went wrong...
      </Heading>
    );
  }
  return (
    <>
      {loading ? (
        <Center>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </Center>
      ) : (
        // Box tổng
        <Box>
          <Box
            width="100%"
            m="0 0 0 7%"
            p=" 1% 8% "
            justifyContent="center"
            alignitem="center"
          >
            <Text color="gray.500" marginBottom={5}>
              Article ID: {singleData.prodID}
            </Text>
            <Heading size="md" marginBottom={5}>
              {singleData.prodName}
            </Heading>
            <hr />
          </Box>
          <div className="griditem">
            <Grid
              className="grid"
              h={["auto", "auto", "auto"]}
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
                "repeat(10,1fr)",
              ]}
            >
              <GridItem
                rowSpan={[1, 2, 7]}
                colSpan={[6, 6, 5]}
                m="0 0 0 18%"
                p=" 2% 8% "
                justifyContent="center"
                alignitem="center"
                style={{
                  border: "none",
                }}
              >
                <Image
                  className="Image"
                  textAlign="center"
                  w={["65%", "400px", "600px"]}
                  height="auto"
                  justifyContent="center"
                  src={singleData.prodImg}
                  _hover={{ cursor: "crosshair" }}
                />
                <Box
                  display="flex"
                  m={5}
                  css={{ "@media (max-width: 768px)": { display: "none" } }}
                >
                  <Image
                    m={2}
                    p={2}
                    borderRadius={"5px"}
                    border="1px solid #e0e0e0;"
                    textAlign="center"
                    width="25%"
                    src={singleData.prodImg}
                    _hover={{ cursor: "crosshair" }}
                  />
                  <Image
                    m={2}
                    p={2}
                    borderRadius={"5px"}
                    border="1px solid #e0e0e0;"
                    textAlign="center"
                    width="25%"
                    src={singleData.prodImg}
                    _hover={{ cursor: "crosshair" }}
                  />
                  <Image
                    m={2}
                    p={2}
                    borderRadius={"5px"}
                    border="1px solid #e0e0e0;"
                    textAlign="center"
                    width="25%"
                    src={singleData.prodImg}
                    _hover={{ cursor: "crosshair" }}
                  />
                </Box>
                {/* Chi tieet  */}
                <Box
                  className="box-chitiet"
                  css={{ "@media (max-width: 768px)": { display: "none" } }}
                >
                  <Heading size="sm" marginBottom={3}>
                    Thông số kĩ thuật
                  </Heading>
                  <UnorderedList
                    color="gray.600"
                    fontSize="sm"
                    marginBottom={4}
                  >
                    <ListItem>
                      Tên: {singleData.prodName}{" "}
                      <span style={{ color: "#2871c4" }}>Read T&C</span>
                    </ListItem>
                    <ListItem>
                      Ứng dụng phổ biến: Clip TVFPT PlayGalaxy Play
                      (Fim+)MyTVNetflixNhaccuatuiPOPS KidsSpotify Trình duyệt
                      webTV 360 VieON VTVcab ON YouTube YouTube Kids{" "}
                      <span style={{ color: "#2871c4" }}>Read T&C</span>
                    </ListItem>
                    <ListItem>
                      Công nghệ hình ảnh:Active HDRChế độ game HGiG Chế độ hình
                      ảnh phù hợp nội dung Dải màu rộng Nano Color Giảm độ trễ
                      chơi game Auto Low Latency Mode (ALLM)HDR Dynamic Tone
                      MappingHDR10 ProHLGNâng cấp hình ảnh AI Picture Pro 4KNâng
                      cấp độ phân giải 4K AI Upscaling Tương thích bộ mã hóa
                      Video decoder (VP9, AV1)Tương thích HEVC{" "}
                      <span style={{ color: "#2871c4" }}>Read T&C</span>
                    </ListItem>
                  </UnorderedList>
                  <Heading size="sm" marginBottom={3}>
                    Thông tin sản phẩm (1){" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        color: "#2871c4",
                      }}
                    >
                      Read T&C
                    </span>
                  </Heading>
                  <UnorderedList
                    color="gray.600"
                    fontSize="sm"
                    marginBottom={4}
                  >
                    <ListItem>
                      {singleData.prodName} có thiết kế Airslim không viền 3
                      cạnh sang trọng và tinh tế. Mang lại tổng thể cho không
                      gian trưng bày thêm điểm nhấn vô cùng ấn tượng.
                      <br />
                      Màn hình {singleData.prodName} cùng chân đế vững chắc phù
                      hợp trưng bày các không gian như: Phòng khách, phòng ngủ,
                      phòng họp,...{" "}
                      <span style={{ color: "#2871c4" }}>
                        View all Standard Credit Cards EMI options
                      </span>
                    </ListItem>
                  </UnorderedList>
                </Box>
              </GridItem>
              <GridItem
                colSpan={[4, 3, 4]}
                rowSpan={[9, 7]}
                className="thanhtoan"
              >
                <Box>
                  <Box
                    p={7}
                    mt="5%"
                    borderRadius="10px"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
                    }}
                  >
                    <Heading size="md" marginBottom={5}>
                      {singleData.prodName}
                    </Heading>
                    <Heading size="lg" marginBottom={5} color="red">
                      {/* {singleData.prodPrice.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })} */}
                      {singleData.prodPrice.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </Heading>
                    {singleData.prodSale !== 0 && (
                      <>
                        <Text fontSize="lg" marginBottom={3}>
                          Giá gốc: {singleData.prodPriceSale.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                          <span
                            style={{ textDecoration: "line-through" }}
                          ></span>
                          <span style={{ fontSize: "12px", padding: "20px" }}>
                            (Bao gồm tất cả các loại thuế)
                          </span>
                        </Text>
                        <Text
                          fontSize="sm"
                          color="#eb5757"
                          style={{ fontWeight: "bold" }}
                          marginBottom={3}
                        >
                          Giảm tới: {singleData.prodSale}%
                        </Text>
                      </>
                    )}

                    <Text
                      fontSize="sm"
                      style={{ fontWeight: "bold" }}
                      marginBottom={3}
                    >
                      Hỗ trợ trả góp lãi xuất lên đến 0%/tháng |{" "}
                      <span style={{ color: "#2871c4" }}>Xem thêm</span>
                    </Text>

                    <Text
                      fontSize="lg"
                      style={{ fontWeight: "bold" }}
                      marginBottom={3}
                    >
                      Miễn phí vận chuyển!
                    </Text>
                    <Input
                      w="70%"
                      borderRadius="none"
                      placeholder="Enter / Mã giảm giá"
                      p={2}
                      marginBottom={3}
                    ></Input>
                    <Flex w="full" justifyContent="space-between">
                      <Button
                        w="49%"
                        color="white"
                        bg="red"
                        borderRadius="10px"
                        fontSize="lg"
                        p={6}
                        _hover={{ bg: "blue.800" }}
                        onClick={() => handlePost(singleData.prodID)}
                      >
                        Thêm vào giỏ hàng
                      </Button>
                      <Button
                        w="49%"
                        color="white"
                        bg="orangered"
                        borderRadius="10px"
                        fontSize="lg"
                        p={6}
                        _hover={{ backgroundColor: "orangered" }}
                        onClick={() => handleWish(singleData.prodID)}
                      >
                        Mua ngay
                      </Button>
                    </Flex>
                    <Box
                      className="thanhtoan_text"
                      m="5% 0%"
                      border="solid #f7e9f7 2px"
                      borderRadius="5px"
                    >
                      <Heading
                        display="inline-block"
                        position="relative"
                        padding="0 2.5rem 0"
                        margin="0 auto"
                        fontSize="1.3rem"
                      >
                        Các khuyến mãi khác
                      </Heading>
                      <Text margin="2%">
                        .
                        <span style={{ padding: "5%" }}>
                          Giảm giá khi mua trong giờ phát sóng live tream
                        </span>{" "}
                        <br />.
                        <span style={{ padding: "5%" }}>
                          Dùng thử 30 ngày, đổi máy không cần lý do
                        </span>{" "}
                        <br />.
                        <span style={{ padding: "5%" }}>
                          Bảo hành thân máy 12 tháng
                        </span>{" "}
                        <br />.
                        <span style={{ padding: "5%" }}>
                          Giảm 200k - 300k cho Học Sinh/ Sinh Viên/ Giáo Viên
                        </span>{" "}
                        <br />.
                        <span style={{ padding: "5%" }}>
                          Giao hàng toàn quốc (miễn phí nội thành HCM)
                        </span>{" "}
                        <br />.
                        <span style={{ padding: "5%" }}>
                          Mã giảm 100.000đ áp dụng đơn hàng từ 500.000đ
                        </span>{" "}
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box className="box-table" mt={5}>
                  <ProductTable />
                </Box>
              </GridItem>
            </Grid>
          </div>
          <Box className="box-slide">
            <br />
            <hr />
            <RelateProduct type={PrApplePhone} />
            <ComProduct prodID={singleData.prodID} />
          </Box>
        </Box>
      )}
    </>
  );
};
export default SingleProduct;
