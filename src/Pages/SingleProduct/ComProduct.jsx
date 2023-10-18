
import React, { useState } from 'react';
import { Center, Box, Button, Flex, Grid, GridItem, Heading, Image, Input, ListItem, Text, UnorderedList, useToast, color, Textarea } from '@chakra-ui/react';

const ComProduct = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() !== '') {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };
    return (
        <Box
            justifyContent="center" w="75%" m="auto" mt="6" cursor="pointer"
            backgroundColor="blackAlpha.50"
            borderRadius="10px"
            height="auto"
        >
            <Box
                onSubmit={handleCommentSubmit}
            >
                <Heading
                    mt={5}
                    ml={5}
                    p={5}
                    fontSize={"25px"}
                >Bình Luận</Heading>
                <Textarea 
                    value={newComment}
                    onChange={handleCommentChange}
                    type="tex"
                    width="94%"
                    ml="3%"
                    // padding={2}
                    fontSize={"10x"}
                    borderRadius={"5px"}
                    backgroundColor="white"
                    placeholder="Nhập bình luận của bạn..."
                    />
             
                <Button 
                    m="2% 3%"
                    fontSize={"10x"}
                    borderRadius={"5px"}
                    backgroundColor="blue.400"
                    color="whiteAlpha.900"
                    type="submit">Submit</Button>
                <br />
                <hr
                />
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
                        Mai Văn Hưng
                    </Text>
                    <Text
                        padding={2}
                    >
                        <p>Sản phẩm như c</p>
                    </Text>
                    <Flex justifyContent="end">
                        <a href="">Thích</a>
                        <a href="">Trả lời</a>
                    </Flex>
                </Box>
                <br />
            </Box>
        </Box>
        // <div>
        //     <h2>Comment Section</h2>
        //     <form onSubmit={handleCommentSubmit}>
        //         <textarea
        //             value={newComment}
        //             onChange={handleCommentChange}
        //             placeholder="Write a comment..."
        //         ></textarea>
        //         <button type="submit">Submit</button>
        //     </form>
        //     <div>
        //         {comments.map((comment, index) => (
        //             <p key={index}>{comment}</p>
        //         ))}
        //     </div>
        // </div>
    );
};

export default ComProduct;
