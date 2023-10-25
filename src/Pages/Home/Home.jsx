import React from "react";
import ItemCard1 from "./ItemCard1";
import ItemCard2 from "./ItemCard2";
import ItemCard5 from "./ItemCard5";
import ItemCard6 from "./ItemCard6";
import ItemCard7 from "./ItemCard7";

import ItemCard9 from "./ItemCard9";
import CateFeature from "./CateFeature";
import BannerLeft from "./BannerLeft";

import BannerCenter from "./BannerCenter";
import TimeDeal from "./TimeDeal";
import PrDeal from "./PrDeal";
import Btn from "./Btn";



import {
  ItemDetails1,
 

  ItemDetails7,

  ItemDetails9,

  CateFeatures,
  BannersLeft,
  BannersCenter,
  TimeDeals,
  PrAll,
  PrDeals,
  PrSales,
  PrApplePhone,
  PrAppleTablet,
  PrSamsung,
  PrAsus,
  PrLenovo,
  PrAcer,
  PrHp,
  PrXiaomi,
} from "./CardDetails";

import { Box } from "@chakra-ui/react";
import Banners from "./BannerLeft";
const Home = () => {
  return (
    <Box>
      <BannerCenter type={BannersCenter} />
      <br />

      <ItemCard1 type={ItemDetails1} />
      <br />
      <hr />
      <CateFeature type={CateFeatures} />
      <br />
      <hr />

      <TimeDeal type={PrHp}  />
      <br />
      <hr />

      {/* <ItemCard1 type={ItemDetails2} /> */}
      <ItemCard5 type={PrApplePhone} heading="MÁY TÍNH NỔI BẬT " />
      <br />
      <hr />
      <PrDeal type={PrApplePhone} />

      <br />
      <hr />
      <ItemCard2
        type={PrApplePhone}
        linked={"/personalcare"}
        heading="Iphone "
       
      />
      <hr />
   
      <ItemCard9 type={ItemDetails7} />
      <ItemCard6 type={ItemDetails9} heading="DỊCH VỤ CỦA CHÚNG TÔI" />
      <br />
      <hr />
      <ItemCard7
        type={PrAsus}
        heading="SẢN PHẨM ASUS  "
        
      />
       <br />
      <hr />
       <Btn/>
      
      
    </Box>
  );
};

export default Home;
