import React from "react";
import ItemCard1 from "./ItemCard1";
import ItemCard2 from "./ItemCard2";
import ItemCard4 from "./ItemCard4";
import ItemCard5 from "./ItemCard5";
import ItemCard6 from "./ItemCard6";
import ItemCard7 from "./ItemCard7";
import ItemCard8 from "./ItemCard8";
import ItemCard9 from "./ItemCard9";
import CateFeature from "./CateFeature";
import BannerLeft from "./BannerLeft";



import {
  ItemDetails1,
  ItemDetails2,
  ItemDetails3,
  ItemDetails4,
  ItemDetails5,
  ItemDetails6,
  ItemDetails7,
  ItemDetails8,
  ItemDetails9,
  ItemDetails10,
  ItemDetails11,
  ItemDetails12,
  ItemDetails13,
  ItemDetails14,
  ItemDetails15,
  ItemDetails16,
  ItemDetails17,
  ItemDetails18,
  CateFeatures,
  BannersLeft,

} from "./CardDetails";


import { Box,
    
 } from "@chakra-ui/react";
import Banners from "./BannerLeft";

const Home = () => {
  return (
    <Box>
       
      <ItemCard1 type={ItemDetails1} />
      <br/>
      <hr/>
      <CateFeature type={CateFeatures}  />
      <br />
      <hr />
      {/* <ItemCard1 type={ItemDetails2} /> */}
      <ItemCard5 type={ItemDetails8} heading="MÁY TÍNH NỔI BẬT | " />
      <br />
      <hr />
      <ItemCard2
        type={ItemDetails3}
        linked={"/personalcare"}
        heading="ĐỒNG HỒ THÔNG MINH APPLE | "
        src="https://i.imgur.com/8pxYJUB.png"
      />
      <hr />
      {/* <ItemCard4 type={ItemDetails4} heading="SẢN PHẨM CỦA CHÚNG TÔI" /> */}
      <ItemCard5
        type={ItemDetails5}
        heading="LÒ VI SÓNG GIÁ CỰC SỐC | "
      />
      <br />
      <hr />
      {/* <ItemCard4 type={ItemDetails6} heading="SẢN PHẨM ƯU ĐÃI SỐC" /> */}
      <ItemCard9 type={ItemDetails7} />
      <ItemCard6
        type={ItemDetails9}
        heading="DỊCH VỤ CỦA CHÚNG TÔI"
      />
      <br />
      <hr />
      <ItemCard2
        type={ItemDetails10}
        heading="GIẢM GIÁ LÊN ĐẾN 80% DỤNG CỤ CẠO RÂU | "
        src="https://i.imgur.com/FPm2ngR.png"
      />
      <hr />
      <BannerLeft type={BannersLeft}  />
      <br />
      <hr />

      <ItemCard7
        type={ItemDetails11}
        heading="MẶT HÀNG TIVI TỐT NHẤT HIỆN NAY | "
        src="https://i.imgur.com/fL1O6va.png"
      />
      <hr />
      <ItemCard2
        type={ItemDetails12}
        heading="ĐỒNG HỒ THÔNG MINH | "
        src="https://i.imgur.com/OGeXueA.png"
      />
      <hr />
      <ItemCard7
        type={ItemDetails13}
        heading="ĐIỀU HÒA / LÀM MÁT | "
        src="https://i.imgur.com/ntyAjRL.png"
      />
      <hr />
      <ItemCard2
        type={ItemDetails14}
        heading="PHỤ KIỆN ĐIỆN TỬ | "
        src="https://i.imgur.com/tpj1BEM.png"
      />
      <hr />
      <ItemCard7
        type={ItemDetails15}
        heading=" SẢN PHẨM APPLE NỔI BẬT | "
        src="https://i.imgur.com/tkLHMZ8.png"
      />
      <hr />
      <ItemCard2
        type={ItemDetails16}
        heading="PHỤ KIỆN ÂM THANH GIẢM GIÁ | "
        src="https://i.imgur.com/7J25A1o.png"
      />
      <hr />
      <ItemCard7
        type={ItemDetails17}
        heading="GIẢM GIÁ LÊN ĐẾN 75% PHỤ KIỆN CAMERA | "
        
      />
      <ItemCard8 type={ItemDetails18} heading="EXPLORE OUR RANGE OF PRODUCTS" />
      
      
    </Box>
  );
};

export default Home;
