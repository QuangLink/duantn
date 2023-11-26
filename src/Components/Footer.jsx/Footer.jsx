import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import { FooterCard1, FooterCard2, FooterCard4, FooterCard3 } from "./FooterCard";
import {
  ProductCategories,
  SiteInfo,
  ResourcesCenter,
  Policies,
} from "./FooterDetail";
const Footer = () => {
  return (
    <Box bg="#FFFFFF" color="#55555" justifyContent="space-between" mt={20} w={'100%'} alignItems={'center'}>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(4,1fr)",
          "2xl": "repeat(4,1fr)",
        }}
        gap={6}
        justifyContent="space-evenly"
        m="auto"
        w="73%"
        p="2"
        lineHeight="32px"
      >
        <FooterCard1 type={ProductCategories} heading="Danh mục sản phẩm" />
        <FooterCard2 type={SiteInfo} heading="Về chúng tôi" />
        <FooterCard3 type={ResourcesCenter} heading="Hỗ trợ khách hàng" />
        <FooterCard4 type={Policies} heading="Chính sách mua hàng" />
        <br />
      </Grid>
    </Box>
  );
};

export default Footer;
