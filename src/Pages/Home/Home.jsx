import React, { lazy, Suspense } from "react";
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

// Sử dụng React.lazy() cho các thành phần bạn muốn lazy load
const LazyItemCard1 = lazy(() => import("./ItemCard1"));
const LazyItemCard2 = lazy(() => import("./ItemCard2"));
const LazyItemCard5 = lazy(() => import("./ItemCard5"));
const LazyItemCard6 = lazy(() => import("./ItemCard6"));
const LazyItemCard7 = lazy(() => import("./ItemCard7"));
const LazyItemCard9 = lazy(() => import("./ItemCard9"));
const LazyCateFeature = lazy(() => import("./CateFeature"));
const LazyBannerLeft = lazy(() => import("./BannerLeft"));
const LazyBannerCenter = lazy(() => import("./BannerCenter"));
const LazyTimeDeal = lazy(() => import("./TimeDeal"));
const LazyPrDeal = lazy(() => import("./PrDeal"));
const LazyBtn = lazy(() => import("./Btn"));

const Home = () => {
  return (
    <Box>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyBannerCenter type={BannersCenter} />
        <br />

        <LazyItemCard1 type={ItemDetails1} />
        <br />
        <hr />
        <LazyCateFeature type={CateFeatures} />
        <br />
        <hr />

        <LazyTimeDeal type={PrSale} />
        <br />
        <hr />

        <LazyItemCard5 type={PrLenovo} heading="MÁY TÍNH NỔI BẬT " />
        <br />
        <hr />
        <LazyPrDeal type={PrSale} />

        <br />
        <hr />
        <LazyItemCard2
          type={PrApplePhone}
          linked={"/personalcare"}
          heading="Iphone "
          src="https://i.imgur.com/8pxYJUB.png"
        />
        <hr />

        <LazyItemCard9 type={ItemDetails7} />
        <LazyItemCard6 type={ItemDetails9} heading="DỊCH VỤ CỦA CHÚNG TÔI" />
        <br />
        <hr />
        <LazyItemCard7 type={PrAsus} heading="SẢN PHẨM ASUS  " />
        <br />
        <hr />
        <LazyBtn />
      </Suspense>
    </Box>
  );
};

export default Home;
