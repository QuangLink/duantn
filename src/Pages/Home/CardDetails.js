import axios from 'axios';

const apiUrlBase = 'http://localhost:9000/category/';

const categoryUrls = {
  allproduct: apiUrlBase,
  deals: apiUrlBase + 'deals',
  sale: apiUrlBase + 'sale',
    applephone: apiUrlBase + 'apple',
    appletablet: apiUrlBase + 'apple/tablet',
  samsung: apiUrlBase + 'samsung',
  xiaomi: apiUrlBase + 'xiaomi',
  hp: apiUrlBase + 'hp',
  asus: apiUrlBase + 'asus',
  lenovo: apiUrlBase + 'lenovo',
  acer: apiUrlBase + 'acer',
  asuslaptop: apiUrlBase +"asus/laptop",
};

const fetchDataForCategory = async (category) => {
  try {
    const response = await axios.get(categoryUrls[category]);
    return response.data.map(product => ({
      name: product.prodName,
      img: product.prodImg,
      price: product.prodPrice,
      id: product.prodID,
      sale:product.prodSale,
      original:product.prodPriceSale,
      linked: product.catName.toLowerCase(),
    }));
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
    return [];
  }
};
export let PrAll = [];
export let PrDeals = [];
export let PrSale = [];
export let PrApplePhone = [];
export let PrAppleTablet = [];
export let PrSamsung = [];
export let PrXiaomi = [];
export let PrHp = [];
export let PrAsus = [];
export let PrLenovo = [];
export let PrAcer = [];
export let PrAsusLaptop =[];

const fetchDataForAllCategories = async () => {
  PrAll = await fetchDataForCategory('allproduct');
  PrDeals = await fetchDataForCategory('deals');
  PrSale = await fetchDataForCategory('sale');
  PrApplePhone = await fetchDataForCategory('applephone');
  PrAppleTablet = await fetchDataForCategory('appletablet');
  PrSamsung = await fetchDataForCategory('samsung');
  PrXiaomi = await fetchDataForCategory('xiaomi');
  PrHp = await fetchDataForCategory('hp');
  PrAsus = await fetchDataForCategory('asus');
  PrLenovo = await fetchDataForCategory('Lenovo');
  PrAcer = await fetchDataForCategory('acer');
  PrAsusLaptop = await fetchDataForCategory('asuslaptop')
};

fetchDataForAllCategories();




export const BannersCenter = [
  {
    "id": 1,
    "name": "Máy tính",
    "imgbnct": "https://i.pinimg.com/564x/a5/6c/93/a56c930c91e49eebd953ff0d51a9bec6.jpg"
  },
];


export const BannersLeft = [
  {
    "id": 1,
    "name": "Máy tính",
    "imgcatehot": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Laptop-129x129.png"
  },
];




export const CateFeatures = [
  
    {
      "id": 1,
      "name": "Máy tính",
      "imgcatehot": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Laptop-129x129.png"
    },
    {
      "id": 2,
      "name": "Tablet",
      "imgcatehot": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Tablet-128x129.png"
    },
    {
      "id": 3,
      "name": "Đồng hồ thông minh",
      "imgcatehot": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/icon-moi-128x129.png"
    },
    {
      "id": 4,
      "name": "Điện thoại độc quyền",
      "imgcatehot": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/dien-thoai-doc-quyen-128x128.png"
    },
    {
      "id": 5,
      "name": "Màn hình máy tính",
      "imgcatehot": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Manhinhmaytinh-128x129.png"
    },
    {
      "id": 6,
      "name": "Phụ kiện di động",
      "imgcatehot": "https://duhung.vn/wp-content/uploads/2023/05/Bo-phu-kien-di-dong-Yealink-cho-WH6367-2.png"
    },
    {
      "id": 7,
      "name": "Phụ kiện Gaming",
      "imgcatehot": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Phukiengaming-128x129.png"
    },
    {
      "id": 8,
      "name": "Thiết bị âm thanh",
      "imgcatehot": "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//content/Loa-128x128.png"
    },
    {
      "id": 9,
      "name": "Điều hòa",
      "imgcatehot": "https://tse4.mm.bing.net/th?id=OIP.7BSmCxRZXYWjuGgMj_vDWQHaHa&pid=Api&P=0&h=220"
    },
    {
      "id": 10,
      "name": "Thiết bị làm mát",
      "imgcatehot": "https://tse2.mm.bing.net/th?id=OIP.xFEN277jlGRs4XzhB_E5jAHaE8&pid=Api&P=0&h=220"
    },


   
    
  
];




export const ItemDetails1 = [
  {
    img1: "https://i.pinimg.com/564x/e4/ac/1c/e4ac1c62cd247e2df4d9d554fca44021.jpg",
    img2: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/09/banner/IP15-720-220-720x220-5.png",

    caption: "Slide 1",
  },
  {
    
    img2: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/10/banner/Mua-kem-720-220-720x220-1.png",
    img1: "https://www.reliancedigital.in/medias/MIdnight-Sale-Carousel-07-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w5OTA2OXxpbWFnZS9qcGVnfGltYWdlcy9oNzYvaGM5Lzk5MjgzODQ4Mzk3MTAuanBnfGUxZTBiNDNlOGU2ZWUzMzg2YjU3MWMwYmJiNTBhZjM5ODdkMzhjYjNiYWZhYzllYWJmNzE0MGY4MTFmMjY3MDU",

    caption: "Slide 2",
  },
  
];








export const ItemDetails7 = [
  {
    img: "https://www.reliancedigital.in/medias/airpods-pro-2nd-gen-Buy-now-NPI-Banner-01-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDM4NjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ2L2g2Ny85OTIyNDU2MTkxMDA2LmpwZ3w0MGQxZjFhYjQ0ZjU1NTQzZjJiOGJmYzZhMDg5NTY5M2Y3NzIxZDkzOTQ2Yjg4YmNmOWZlMzc4OWM0YjlkMjA2",
    caption: "Slide 1",
  },
  {
    img: "https://www.reliancedigital.in/medias/iPad-10th-Gen-NPI-Banner-Available-now-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDYzNDB8aW1hZ2UvanBlZ3xpbWFnZXMvaGY2L2hiMS85OTEzNjU2NDEwMTQyLmpwZ3wxNTJiZjhiZDMxYTcyZWJmMGM4MzE4OTdlYjkzOGMwYWMzM2E0Mzk1YWFiNTQzZjdiYmJkOTJlNGQ3Yjk5MDBm",
    caption: "Slide 2",
  },
  {
    img: "https://www.reliancedigital.in/medias/iPad-Pro-NPI-Banner-Available-now-27-10-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDYwNjh8aW1hZ2UvanBlZ3xpbWFnZXMvaDNlL2gyMC85OTEzNjU2NTQxMjE0LmpwZ3wwOTcxYjg0MTc5NDQxNDcwNTRjMzcwNjkxYWJlNGI2NDk3ZjkyYzNhNzM5NWY3NzM0NTRiYjA3ODA1MzRiOWFk",
    caption: "Slide 3",
  },
];



export const ItemDetails9 = [
  {
    img: "https://www.reliancedigital.in/medias/Insta-Delivery-Brand-Promise-Icon.png?context=bWFzdGVyfGltYWdlc3wxNTM3fGltYWdlL3BuZ3xpbWFnZXMvaGI2L2gwNS85NDQ3MTcwMzQyOTQyLnBuZ3w2Yzc1ZmY1ZjYwOWIyNWU0ZTgwMjFlYmRkMTU5ZTgzMGI4ZDNmZTE2NjVjYmRlMmUwMmRiODI2OTExNWM5ZTdk",
    caption: "Slide 1",
    title: "Ship hàng toàn quốc",
    desc: "Freeship nội thành TP.HCM",
  },
  {
    img: "https://www.reliancedigital.in/medias/Best-Finance-Options-2.png?context=bWFzdGVyfGltYWdlc3wxMjM4fGltYWdlL3BuZ3xpbWFnZXMvaDJmL2gxOS85NDQ3MTcwNDA4NDc4LnBuZ3xlMDBiNjY4YWI5YzMzYjZkZDhlZTMyMDhjYjE2YzI2OTY2NWJhYjk2M2VkNzdjZDg3NTNlMGEyMTA1ZjFlODZh",
    caption: "Slide 2",
    title: "Dùng thử sản phẩm 30 ngày",
    desc: "Bảo hành 365 ngày",
  },
  {
    img: "https://www.reliancedigital.in/medias/service-img.png?context=bWFzdGVyfGltYWdlc3w5MTB8aW1hZ2UvcG5nfGltYWdlcy9oMDYvaGEzLzkwOTA3OTc5OTQwMTQucG5nfGJjZmJhNzM1ODdkYTQ5ODI3YzNiMzQ1ZTdlM2JjNjUwMTBjM2E3YWFjNmUxZjdmMmEyOGRjZDMxOGI4ZWE0MWY",
    caption: "Slide 3",
    title: "Hỗ trợ trả góp 0 đồng",
    desc: "Linh hoạt nhiều hình thức thanh toán",
  },
  {
    img: "https://www.reliancedigital.in/medias/unmatched-network-img.png?context=bWFzdGVyfGltYWdlc3w3NDV8aW1hZ2UvcG5nfGltYWdlcy9oODIvaDJhLzkwOTA3OTgwNTk1NTAucG5nfDFmMThjYzdiYTNiOTgxYjA5YzdlZTFiMmQyODI5MGY2NTM4ZTcxOWZkZTA1ZjAzY2Q1ZTk5YjQ1NTMxMWViYzU",
    caption: "Slide 4",
    title: "Thu cũ - Đổi mới",
    desc: "Hỗ trợ thu lại máy cũ, bù tiền lấy mới",
  },
];





