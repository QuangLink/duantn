import React, { useEffect, useState, lazy, Suspense } from "react";

import BackToTopButton from "./BackToTopButton";
import { Box, Select, Button, Heading, Text } from "@chakra-ui/react";
import {
  PrApplePhone,
  CateFeatures,
  ItemDetails9,
  PrPhone,
  PrTablet,
  PrLaptop,
  PrKeyboard,
  PrMouse,
  PrCable,
  PrBattery,
  PrLoudSpeaker,
  PrEarPhone,
  PrSmartWatch,
  loadPrSale,
  loadPrApplePhone,
  loadPrKeyboard,
  loadPrMouse,
  loadPrCable,
  loadPrBattery,
  loadPrLoudSpeaker,
  loadPrEarPhone,
  loadPrSmartWatch,
  loadPrLaptop,
  loadPrPhone,
  loadPrTablet,
  BannerHomePage,
} from "./CardDetails";
import BannerHome from "./BannerHomePage/BannerHome";
import Danhmuc from "./DanhMuc/Danhmuc";
import ItemCardTest2 from "./SmartWatchSlider";
const ItemList = lazy(() => import("./ItemList"));

const ItemCard6 = lazy(() => import("./ItemCard6"));

const TimeDeal = lazy(() => import("./TimeDeal"));

const ItemCardTest = lazy(() => import("./DynamicSlider"));
const Home = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedAssessories, setSelectedAssessories] = useState();
  const RenderCategoryPhone = () => {
    switch (selectedCategory) {
      case "Phone":
        return <ItemList type={PrPhone} heading="phone" />;
      case "Tablet":
        return <ItemList type={PrTablet} heading="tablet" />;
      case "Laptop":
        return <ItemList type={PrLaptop} heading="laptop" />;
      default:
        return <ItemList type={PrPhone} heading="phone" />;
    }
  };
  const RenderCategoryAssessories = () => {
    switch (selectedAssessories) {
      case "Battery":
        return <ItemList type={PrBattery} heading="Battery" />;
      case "Cable":
        return <ItemList type={PrCable} heading="Cable" />;
      case "Earphone":
        return <ItemList type={PrEarPhone} heading="Earphone" />;
      case "LoudSpeaker":
        return <ItemList type={PrLaptop} heading="LoudSpeaker" />;
      case "Keyboard":
        return <ItemList type={PrKeyboard} heading="Keyboard" />;
      case "Mouse":
        return <ItemList type={PrMouse} heading="Mouse" />;
      default:
        return <ItemList type={PrBattery} heading="Battery" />;
    }
  };

  useEffect(() => {
    // Load data for each product category before rendering the components.
    Promise.all([
      loadPrSale(),
      loadPrApplePhone(),
      loadPrSmartWatch(),
      loadPrLaptop(),
      loadPrPhone(),
      loadPrTablet(),
      loadPrKeyboard(),
      loadPrMouse(),
      loadPrCable(),
      loadPrBattery(),
      loadPrLoudSpeaker(),
      loadPrEarPhone(),
    ]).then(() => {
      // Set dataLoaded to true when all data is loaded.
      setDataLoaded(true);
    });
  }, []);

  return (
    <Box bg={"#F1F3F7"}>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <BannerCenter type={BannersCenter} /> */}
        <BannerHome type={BannerHomePage} heading=" " />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        {dataLoaded && <TimeDeal />}
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <BannerCenter type={BannersCenter} /> */}
        <Danhmuc heading="DANH MỤC" type={CateFeatures} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Box width="80%" margin="auto">
          <div className="option-select">
            <Text className="heading">DANH MỤC NỔI BẬT</Text>
            <div className="options">
              <button
                className={selectedCategory === "Phone" ? "selected" : ""}
                onClick={() => setSelectedCategory("Phone")}
              >
                Điện Thoại
              </button>
              <button
                className={selectedCategory === "Tablet" ? "selected" : ""}
                onClick={() => setSelectedCategory("Tablet")}
              >
                Tablet
              </button>
              <button
                className={selectedCategory === "Laptop" ? "selected" : ""}
                onClick={() => setSelectedCategory("Laptop")}
              >
                Laptop
              </button>
            </div>
          </div>
        </Box>
        {dataLoaded && RenderCategoryPhone()}
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        {dataLoaded && <ItemCardTest type={PrSmartWatch} />}
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Box width="80%" margin="auto">
          <div className="option-select">
            <Text className="heading">Các phụ kiện khác</Text>
            <div className="options">
              <button
                className={selectedAssessories === "Battery" ? "selected" : ""}
                onClick={() => setSelectedAssessories("Battery")}
              >
                Pin dự phòng
              </button>
              <button
                className={selectedAssessories === "Cable" ? "selected" : ""}
                onClick={() => setSelectedAssessories("Cable")}
              >
                Cáp sạc
              </button>
              <button
                className={selectedAssessories === "Earphone" ? "selected" : ""}
                onClick={() => setSelectedAssessories("Earphone")}
              >
                Tai nghe
              </button>
              <button
                className={
                  selectedAssessories === "LoudSpeaker" ? "selected" : ""
                }
                onClick={() => setSelectedAssessories("LoudSpeaker")}
              >
                Loa
              </button>
              <button
                className={selectedAssessories === "Keyboard" ? "selected" : ""}
                onClick={() => setSelectedAssessories("Keyboard")}
              >
                Bàn phím
              </button>
              <button
                className={selectedAssessories === "Mouse" ? "selected" : ""}
                onClick={() => setSelectedAssessories("Mouse")}
              >
                Chuột
              </button>
            </div>
          </div>
        </Box>
        {dataLoaded && RenderCategoryAssessories()}
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ItemCardTest2
          type={PrApplePhone}
          linked={"/apple/phone"}
          heading="IPHONE"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        {dataLoaded && (
          <ItemCard6 type={ItemDetails9} heading="DỊCH VỤ CỦA CHÚNG TÔI" />
        )}
      </Suspense>

      <BackToTopButton />
    </Box>
  );
};
export default Home;
