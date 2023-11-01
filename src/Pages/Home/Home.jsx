import React, { useEffect, useState, lazy, Suspense } from "react";
import CateFeature from "./CateFeature";
import BannerCenter from "./BannerCenter";
import Btn from "./Btn";
import { Box } from "@chakra-ui/react";
import {
  BannersCenter,
  ItemDetails1,
  PrSale,
  PrApplePhone,
  CateFeatures,
  ItemDetails9,
  // PrAppleTablet,
  // PrSamsungPhone,
  // PrSamsungTablet,
  // PrXiaomi,
  // PrHp,
  PrAsus,
  // PrLenovo,
  PrAcer,
  loadPrSale,
  loadPrApplePhone,
  // loadPrAppleTablet,
  // loadPrSamsung,
  // loadPrXiaomi,
  // loadPrHp,
  loadPrAsus,
  // loadPrLenovo,
  loadPrAcer,
} from "./CardDetails";

const ItemCard1 = lazy(() => import("./ItemCard1"));
const ItemCard2 = lazy(() => import("./ItemCard2"));
const ItemCard5 = lazy(() => import("./ItemCard5"));
const ItemCard6 = lazy(() => import("./ItemCard6"));
const ItemCard7 = lazy(() => import("./ItemCard7"));
const TimeDeal = lazy(() => import("./TimeDeal"));
const PrDeal = lazy(() => import("./PrDeal"));

const Home = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // Load data for each product category before rendering the components.
    Promise.all([
      loadPrSale(),
      loadPrApplePhone(),
      // loadPrAppleTablet(),
      // loadPrSamsungPhone(),
      // loadPrSamsungTablet(),
      // loadPrXiaomi(),
      // loadPrHp(),
      loadPrAsus(),
      // loadPrLenovo(),
      loadPrAcer(),
    ]).then(() => {
      // Set dataLoaded to true when all data is loaded.
      setDataLoaded(true);
    });
  }, []);

  return (
    <Box>
      <Suspense fallback={<div>Loading...</div>}>
        <BannerCenter type={BannersCenter} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        {dataLoaded && <ItemCard1 type={ItemDetails1} />}
      </Suspense>

      <CateFeature type={CateFeatures} />

      <Suspense fallback={<div>Loading...</div>}>
        {dataLoaded && <TimeDeal type={PrSale} />}
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        {dataLoaded && (
          <ItemCard5 type={PrApplePhone} heading="MÁY TÍNH NỔI BẬT " />
        )}
      </Suspense>

      <br />
      <hr />

      <Suspense fallback={<div>Loading...</div>}>
        {dataLoaded && <PrDeal type={PrAsus} />}
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <ItemCard2
          type={PrApplePhone}
          linked={"/personalcare"}
          heading="Iphone "
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        {dataLoaded && (
          <ItemCard6 type={ItemDetails9} heading="DỊCH VỤ CỦA CHÚNG TÔI" />
        )}
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        {dataLoaded && <ItemCard7 type={PrAcer} heading="SẢN PHẨM ASUS  " />}
      </Suspense>

      <br />
      <hr />

      <Suspense fallback={<div>Loading...</div>}>
        <Btn />
      </Suspense>
    </Box>
  );
};

export default Home;
