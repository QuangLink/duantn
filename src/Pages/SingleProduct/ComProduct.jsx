
import React, { useState, useEffect } from "react";
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
  color,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
import RatingBar from "../Products/RatingBar";
import { FaStar } from "react-icons/fa";

const ComProduct = ({ prodID }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [userID, setUserID] = useState(Cookies.get("userID") || "");
  const [prodRate, setProdRate] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim() !== "" && prodID && userID && prodRate) {
      const feedbackData = {
        prodID,
        userID,
        prodRate,
        comment: newComment,
      };

      try {
        const response = await axios.post(
          "https://duantn-backend.onrender.com/feedback",
          feedbackData
        );

        if (response.status === 200) {
          // Update the comments state with the new comment
            window.location.reload();
        } else {
          console.error("Thêm phản hồi thất bại");
        }
      } catch (error) {
        console.error("Lỗi khi gửi phản hồi:", error);
      }
    }
  };

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await axios.get(
          `https://duantn-backend.onrender.com/feedback/${prodID}`
        );
        if (response.status === 200) {
          const data = response.data;
          setComments(data);
        } else {
          console.error("Lấy bình luận thất bại");
        }
      } catch (error) {
        console.error("Lỗi khi lấy bình luận:", error);
      }
    }
    fetchComments();
  }, [prodID]);

  return (
    <Box
      justifyContent="center"
      w="75%"
      m="auto"
      mt="6"
      cursor="pointer"
      backgroundColor="blackAlpha.50"
      borderRadius="10px"
      height="auto"
    >
      <Box>
        <div
          style={{ borderTop: "1px solid #ccc", borderRadius: "5px", padding: "10px" }}
        >
          <h3
            style={{
              marginBottom: "10px",
              fontFamily: "Arial",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Đánh giá sản phẩm:
          </h3>
          <div style={{ display: "flex", alignItems: "center" }}>
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <label
                  key={index}
                  style={{ marginRight: "5px", cursor: "pointer" }}
                >
                  <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={() => setProdRate(ratingValue)}
                    style={{ display: "none" }}
                  />
                  <FaStar
                    color={ratingValue <= prodRate ? "#ffc107" : "#ccc"}
                    style={{ marginRight: "2px" }}
                  />
                </label>
              );
            })}
          </div>
        </div>
        <Textarea value={newComment} onChange={handleCommentChange} />
        <Button 
        m="2% 3%"
        fontSize={"10x"}
        borderRadius={"5px"}
        backgroundColor="blue.400"
        color="whiteAlpha.900"
        type="submit"
        onClick={handleCommentSubmit}>Nhận xét</Button>

        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <hr />
              <Box
                m={5}
                p={2}
                borderRadius="5px"
                fontWeight="bold.800"
                fontSize="0.7rem"
                backgroundColor="#FFFFFF"
                boxShadow="rgba(0, 0, 0, 0.15) 0px 0px 3px"
                width="auto"
              >
                <Text
                  text-transform="capitalize"
                  color="#222b45"
                  display=" inline"
                  fontWeight="bold"
                  fontSize="14px"
                  line-height="16px"
                  mr="10px"
                  textDecoration="underline"
                >
                  {comment.firstname} {comment.lastname}
                </Text>
                <Text padding={2}>
                  <p>{comment.comment}</p>
                </Text>
                <Text padding={2}>
                  <RatingBar rating={comment.prodRate || 0.5} />
                </Text>
                <Flex justifyContent="end">
                  <a href="">Thích</a>
                  <a href="">Trả lời</a>
                </Flex>
              </Box>
              <br />
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );

};

export default ComProduct;
