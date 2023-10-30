import React from "react";
import ItemCard1 from "./ItemCard1";
import ItemCard2 from "./ItemCard2";
import ItemCard5 from "./ItemCard5";
import ItemCard6 from "./ItemCard6";
import ItemCard7 from "./ItemCard7";
import CateFeature from "./CateFeature";
import BannerCenter from "./BannerCenter";
import TimeDeal from "./TimeDeal";
import PrDeal from "./PrDeal";
import Btn from "./Btn";
import {
  ItemDetails1,
  ItemDetails9,
  CateFeatures,
  BannersCenter,
  TimeDeals,
  PrAll,
  PrDeals,
  PrSale,
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

const Home = () => {
  return (
    <Box>
      <BannerCenter type={BannersCenter} />

      <ItemCard1 type={ItemDetails1} />

      <CateFeature type={CateFeatures} />

      <TimeDeal type={PrSale} />

      <ItemCard5 type={PrApplePhone} heading="MÁY TÍNH NỔI BẬT " />
      <br />
      <hr />
      <PrDeal type={PrAsus} />

      <ItemCard2
        type={PrApplePhone}
        linked={"/personalcare"}
        heading="Iphone "
      />
      <ItemCard6 type={ItemDetails9} heading="DỊCH VỤ CỦA CHÚNG TÔI" />
      <ItemCard7 type={PrAcer} heading="SẢN PHẨM ASUS  " />
      <br />
      <hr />
      <Btn />
    </Box>
  );
};
export default Home;
