import React from "react";
import { Box, Flex, Image, Menu, MenuButton, MenuList, Grid, Text, Heading, Link, } from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import uuid from "react-uuid";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const ItemCard1 = ({ type }) => {
  return (
    <Box cursor="pointer">
      <Slide>
        {type.map((i) => (
          <Box key={uuid()}>
            <Image src={`${i.img}`} alt={i.caption} w="100%" />
          </Box>
        ))}
      </Slide>

    </Box>
  );
};

export default ItemCard1;
