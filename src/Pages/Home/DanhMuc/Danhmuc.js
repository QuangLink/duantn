import React, { useState, useEffect } from "react";
import axios from "axios";

import {
    Box,
    Flex,
    Text,
    Image,
    Square,
    Badge,
    Heading,
    useToast,
    Center,
    Button,
} from "@chakra-ui/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'


const Danhmuc = ({ type, heading }) => {


    return (
        <Center>
            <Box w={'80%'} mt={10} mb={10}>
                <Flex justifyContent={'space-between'} mb={5}>
                    <Box >
                        <Heading
                            fontSize="32px"

                            textColor="black"
                        >
                            {heading}
                        </Heading>
                    </Box>
                    <Box>
                        <Button border='1px' mr={2} borderRadius={20} className="custom-prev"><ArrowBackIcon fontSize={30} /></Button>
                        <Button border='1px' borderRadius={20} className="custom-next"><ArrowForwardIcon fontSize={30} /></Button>
                    </Box>

                </Flex>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    speed={1000}
                    effect="fade" // Hiệu ứng chuyển slide
                    navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
                    // navigation
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 5,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 5,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 6,
                        },
                        1366: {
                            slidesPerView: 6,
                            spaceBetween: 6,
                        },
                    }}
                >
                    {type.map((i) => (
                        <Box Box key={uuid()} >
                            <SwiperSlide >
                                <Link to={`/${i.prodType}`}>
                                    <Center>
                                        <Box w={'80%'} textAlign={'center'}>
                                            <Square
                                                borderRadius={100}
                                                m="auto"
                                                w={200}
                                                h={200}
                                                bgColor={'white'}

                                            >
                                                <Image
                                                    borderRadius={50}
                                                    src={`${i.imgcatehot}`}
                                                    maxW={200}
                                                    maxH={150}
                                                    objectFit={"cover"}
                                                    transition="transform 0.3s ease-in-out"
                                                    _hover={{ transform: "scale(1.1)" }}
                                                />
                                            </Square>
                                            <Text fontSize={18} mt={5} color={'black'}>{i.name}</Text>
                                        </Box>


                                    </Center>
                                </Link>
                            </SwiperSlide>
                        </Box>
                    ))
                    }
                </Swiper >
            </Box></Center>

    );
};

export default Danhmuc;
