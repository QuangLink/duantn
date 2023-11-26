import React, { useEffect, useState, lazy, Suspense } from "react";
import CateFeature from "./CateFeature";
import BannerCenter from "./BannerCenter";
import BackToTopButton from "./BackToTopButton";
import { Box } from "@chakra-ui/react";
import {
  BannersCenter,
  PrSale,
  PrApplePhone,
  CateFeatures,
  ItemDetails9,
  // PrAppleTablet,
  // PrSamsung,
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
  loadPrSmartWatch,
  PrSmartWatch,
} from "./CardDetails";

const ItemCard2 = lazy(() => import("./ItemCard2"));
const ItemCard5 = lazy(() => import("./ItemCard5"));
const ItemCard6 = lazy(() => import("./ItemCard6"));
const ItemCard7 = lazy(() => import("./ItemCard7"));
const TimeDeal = lazy(() => import("./TimeDeal"));
const PrDeal = lazy(() => import("./PrDeal"));
const ItemCardTest = lazy(() => import("./Test/ItemCardTest"));
const Home = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // Load data for each product category before rendering the components.
    Promise.all([
      loadPrSale(),
      loadPrApplePhone(),
      // loadPrAppleTablet(),
      // loadPrSamsung(),
      // loadPrXiaomi(),
      // loadPrHp(),
      loadPrAsus(),
      // loadPrLenovo(),
      loadPrAcer(),
      loadPrSmartWatch(),
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

      <CateFeature type={CateFeatures} />

      <Suspense fallback={<div>Loading...</div>}>
        {dataLoaded && <TimeDeal />}
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        {dataLoaded && (
          <ItemCardTest type={PrSmartWatch} heading="MÁY TÍNH NỔI BẬT " />
        )}
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        {dataLoaded && (
          <ItemCard5 type={PrApplePhone} heading="MÁY TÍNH NỔI BẬT " />
        )}
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        {dataLoaded && <PrDeal type={PrAsus} />}
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <ItemCard2
          type={PrApplePhone}
          linked={"/personalcare"}
          heading="IPHONE"
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

      <BackToTopButton />
    </Box>
  );
};

export default Home;
