import React, { useEffect, useState, lazy, Suspense } from "react";
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
import GridLoader from "react-spinners/ClipLoader";
import ItemCardTest2 from "./SmartWatchSlider";
import BackToTopButton from "./BackToTopButton";
import Loader from "./Loader";
const ItemList = lazy(() => import("./ItemList"));
const ItemCard6 = lazy(() => import("./ItemCard6"));
const TimeDeal = lazy(() => import("./TimeDeal"));
const ItemCardTest = lazy(() => import("./DynamicSlider"));
const Home = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedAssessories, setSelectedAssessories] = useState();
  const [error, setError] = useState(null);
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
        return <ItemList type={PrLoudSpeaker} heading="LoudSpeaker" />;
      case "Keyboard":
        return <ItemList type={PrKeyboard} heading="Keyboard" />;
      case "Mouse":
        return <ItemList type={PrMouse} heading="Mouse" />;
      default:
        return <ItemList type={PrBattery} heading="Battery" />;
    }
  };

  const loadData = async () => {
    try {
      await Promise.all([
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
      ]);
      // Set dataLoaded to true when all data is loaded.
      setDataLoaded(true);
    } catch (error) {
      // Handle errors and set the error state
      setError(error);
    }
  };

  useEffect(() => {
    // Load data for each product category before rendering the components.
    loadData();
  }, []);

  return (
    <Box bg={"#F1F3F7"}>
      <Suspense>
        {error ? (
          <div>
            {/* Display a user-friendly error message */}
            <p>Oops! Something went wrong. Please try again later.</p>
          </div>
        ) : dataLoaded ? (
          <>
            <BannerHome type={BannerHomePage} heading=" " />
            <TimeDeal />
            <Danhmuc heading="DANH MỤC" type={CateFeatures} />
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
            {RenderCategoryPhone()}
            <ItemCardTest type={PrSmartWatch} />
            <Box width="80%" margin="auto">
              <div className="option-select">
                <Text className="heading">Các phụ kiện khác</Text>
                <div className="options">
                  <button
                    className={
                      selectedAssessories === "Battery" ? "selected" : ""
                    }
                    onClick={() => setSelectedAssessories("Battery")}
                  >
                    Pin dự phòng
                  </button>
                  <button
                    className={
                      selectedAssessories === "Cable" ? "selected" : ""
                    }
                    onClick={() => setSelectedAssessories("Cable")}
                  >
                    Cáp sạc
                  </button>
                  <button
                    className={
                      selectedAssessories === "Earphone" ? "selected" : ""
                    }
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
                    className={
                      selectedAssessories === "Keyboard" ? "selected" : ""
                    }
                    onClick={() => setSelectedAssessories("Keyboard")}
                  >
                    Bàn phím
                  </button>
                  <button
                    className={
                      selectedAssessories === "Mouse" ? "selected" : ""
                    }
                    onClick={() => setSelectedAssessories("Mouse")}
                  >
                    Chuột
                  </button>
                </div>
              </div>
            </Box>
            {RenderCategoryAssessories()}
            <ItemCardTest2
              type={PrApplePhone}
              linked={"/apple/phone"}
              heading="IPHONE"
            />
            <ItemCard6 type={ItemDetails9} heading="DỊCH VỤ CỦA CHÚNG TÔI" />
            <BackToTopButton />
          </>
        ) : (
          <div>
            {/* Display a loading spinner while data is being fetched */}
            <Loader loading={!dataLoaded} />
          </div>
        )}
      </Suspense>
    </Box>
  );
};

export default Home;
