import React from 'react';
import { Box, Flex, Text, Button, Menu, MenuButton, MenuList, MenuItem, Link, Grid } from '@chakra-ui/react';

const ProductFilter = () => {
  
  return (
    <Box>
      <Flex p={2} bg="#f5f5f5" borderRadius="3px" boxShadow="rgba(0, 0, 0, 0.15) 0px 0px 2px">
        <Menu>
          <MenuButton bg="white" borderRadius="3px" border="1px solid #e0e0e0" p={2} fontSize="12px">
            Giá
          </MenuButton>
          <MenuList bg="white">
            <Link to="#">
              <Grid templateColumns="repeat(3, 1fr)" gap={2} p={2}>
                <Box>
                  <Text>Dưới 2 triệu</Text>
                </Box>
                <Box>
                  <Text>Từ 2 - 4 triệu</Text>
                </Box>
                <Box>
                  <Text>Từ 4 - 6 triệu</Text>
                </Box>
              </Grid>
            </Link>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton bg="white" borderRadius="3px" border="1px solid #e0e0e0" p={2} fontSize="12px">
            Hãng
          </MenuButton>
          <MenuList bg="white">
            <Link to="#">
              <Grid templateColumns="repeat(3, 1fr)" gap={2} p={2}>
                {/* Các mục hãng */}
              </Grid>
            </Link>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton bg="white" borderRadius="3px" border="1px solid #e0e0e0" p={2} fontSize="12px">
            Loại
          </MenuButton>
          <MenuList bg="white">
            <Link to="#">
              <Grid templateColumns="repeat(3, 1fr)" gap={2} p={2}>
                {/* Các mục loại */}
              </Grid>
            </Link>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton bg="white" borderRadius="3px" border="1px solid #e0e0e0" p={2} fontSize="12px">
            Nhu cầu
          </MenuButton>
          <MenuList bg="white">
            <Link to="#">
              <Grid templateColumns="repeat(3, 1fr)" gap={2} p={2}>
                {/* Các mục nhu cầu */}
              </Grid>
            </Link>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton bg="white" borderRadius="3px" border="1px solid #e0e0e0" p={2} fontSize="12px">
            Ram
          </MenuButton>
          <MenuList bg="white">
            <Link to="#">
              <Grid templateColumns="repeat(3, 1fr)" gap={2} p={2}>
                {/* Các mục Ram */}
              </Grid>
            </Link>
          </MenuList>
        </Menu>
        <Button bg="#FFFFFF" fontWeight="bold.500" p="15px" borderRadius="5px" border="1px solid #e0e0e0">
          Yêu thích
        </Button>
      </Flex>
      <Flex p={2} bg="#FFFFFF" justifyContent="space-between" alignItems="center">
        <Text fontSize="1rem">Sắp xếp theo</Text>
        <Menu>
          <MenuButton bg="#FFFFFF" fontWeight="bold.500" p="15px" borderRadius="5px" border="1px solid #e0e0e0">
            Sắp xếp theo
          </MenuButton>
          <MenuList>
            <MenuItem>Giảm giá</MenuItem>
            <MenuItem>Xem nhiều nhất</MenuItem>
            <MenuItem>Từ thấp đến cao</MenuItem>
            <MenuItem>Từ cao đến thấp</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default ProductFilter;
